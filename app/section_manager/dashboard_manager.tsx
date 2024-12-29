import Layout from "@/component/Layout";
import Table from "@/component/Table";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function ManagerDashboard() {
  const [filter, setFilter] = useState("Week");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ["Week", "Month", "Year"];

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const selectOption = (option: string) => {
    setFilter(option);
    setDropdownOpen(false);
  };

  // data for statistic
  const summaryData = [
    {
      label: "Absence with permission",
      value: 18,
      color: "#6A9AB0",
      icon: require("../../assets/images/icon/user-check.png"),
    },
    {
      label: "Late for class",
      value: 27,
      color: "#FFC038",
      icon: require("../../assets/images/icon/user-warning.png"),
    },
    {
      label: "Absence without permission",
      value: 5,
      color: "#EF1F1F",
      icon: require("../../assets/images/icon/user-cross.png"),
    },
  ];
  const groupedData = [
    {
      label: "Mon",
      values: [5, 14, 12],
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
    {
      label: "Tue",
      values: [3, 7, 10],
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
    {
      label: "Wed",
      values: [1, 19, 5],
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
    {
      label: "Thu",
      values: [0, 0, 0], // Thứ không có dữ liệu
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
    {
      label: "Fri",
      values: [0, 0, 0], // Thứ không có dữ liệu
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
    {
      label: "Sat",
      values: [0, 0, 0], // Thứ không có dữ liệu
      colors: ["#3A6D8C", "#FFC038", "#EF1F1F"],
    },
  ];

  // Tạo dữ liệu hợp nhất và xử lý nhãn trục x
  const flattenedData = groupedData.flatMap((group, groupIndex) =>
    group.values.map((value, index) => ({
      value,
      label: index === Math.floor(group.values.length / 2) ? group.label : "", // Hiển thị nhãn ở giữa nhóm
      frontColor: group.colors[index],
      spacing: index === group.values.length - 1 ? 20 : 2, // 10px giữa nhóm, 2px giữa các cột cùng nhóm
    }))
  );

  console.log(flattenedData);

  const tableHeader = ["NO", "CLASS NAME", "TEACHER NAME", "START TIME", "NUM"];
  const tableData = [
    ["1", "SE100.P12", "Albus Dumbledore", "7:30 AM", "12"],
    ["2", "SE101.P11", "Severus Snape", "1:00 PM", "2"],
  ];

  return (
    <Layout>
      <ScrollView style={styles.container}>
        {/* Thanh Filter */}
        <View style={styles.filterBar}>
          <Text style={styles.filterLabel}>Filter by</Text>
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={toggleDropdown}
            >
              <Text style={styles.dropdownButtonText}>{filter}</Text>
              <Image
                source={require("../../assets/images/icon/Chevron down.png")}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            {isDropdownOpen && (
              <View style={styles.dropdownOptions}>
                <FlatList
                  data={options}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => selectOption(item)}
                    >
                      <Text style={styles.dropdownOptionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>
        </View>

        {/* Nội dung chính */}
        <View style={styles.content}>
          {/* Bảng tóm tắt */}
          <View style={styles.summary}>
            {summaryData.map((item, index) => (
              <View
                key={index}
                style={[styles.summaryItem, { backgroundColor: item.color }]}
              >
                <View style={styles.summaryRow}>
                  <Image source={item.icon} style={styles.summaryIcon} />
                  <View style={styles.summaryTextContainer}>
                    <Text style={styles.summaryValue}>{item.value}</Text>
                    <Text style={styles.summaryLabel}>{item.label}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.bar}>
            <View style={styles.topContent}>
              <Text style={styles.chartTitle}>
                Student attendance statistic table
              </Text>
              {/* Chú thích */}
              <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendColorBox,
                      { backgroundColor: "#3A6D8C" },
                    ]}
                  />
                  <Text style={styles.legendText}>Permission</Text>
                </View>
                <View style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendColorBox,
                      { backgroundColor: "#FFC038" },
                    ]}
                  />
                  <Text style={styles.legendText}>Late</Text>
                </View>
                <View style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendColorBox,
                      { backgroundColor: "#EF1F1F" },
                    ]}
                  />
                </View>
                <Text style={styles.legendText}>Without permission</Text>
              </View>
            </View>
            <View style={styles.containerBar}>
              <BarChart
                data={flattenedData}
                barWidth={40}
                spacing={4} // Đặt cố định khoảng cách 2px giữa các cột
                hideYAxisText={false} // Hiển thị các giá trị trục Y
                yAxisTextStyle={styles.yAxisLabel} // Sử dụng style cho trục Y
                yAxisThickness={1} // Độ dày của trục Y
                xAxisLabelTextStyle={styles.xAxisLabel}
                noOfSections={6} // Số phần trên trục Y
                maxValue={30} // Giá trị tối đa của trục Y
                isAnimated
              />
            </View>
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.chartTitle}>
              Top classes with the most absent student
            </Text>
            <Table tableHeader={tableHeader} tableData={tableData} />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative", // Quan trọng để dropdown nằm trên nội dung
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    zIndex: 1000,
    paddingLeft: 20,
  },
  filterLabel: {
    fontSize: 20,
    fontWeight: "700", // SemiBold
    marginRight: 10,
  },
  dropdown: {
    width: 107,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#959595",
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#FFFFFF",
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "400",
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  bar: {
    backgroundColor: "#EFEFEF",
    shadowColor: "#000", // Màu của bóng
    shadowOffset: { width: 0, height: 3 }, // Độ lệch của bóng
    shadowOpacity: 0.2, // Độ mờ của bóng
    borderRadius: 10,
  },

  dropdownOptions: {
    position: "absolute", // Đảm bảo dropdown đè lên nội dung
    top: 45, // Khoảng cách từ nút dropdown
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#959595",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    zIndex: 2000, // Đảm bảo luôn nằm trên tất cả
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "400",
  },
  content: {
    marginTop: 20,
    padding: 10,
    zIndex: 1, // Nội dung chính có zIndex thấp hơn dropdown
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  summaryItem: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 5,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  summaryIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  summaryTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  summaryValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendColorBox: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: "#000000",
  },
  topContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 14,
  },

  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    paddingTop: 20,
  },
  containerBar: {
    flex: 1,
    padding: 20,
  },
  yAxisLabel: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "400",
  },
  xAxisLabel: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "400",
  },
  tableContainer: {
    marginBottom: 20,
    display: "flex",
    gap: 20,
    marginTop: 20,
    // alignItems: "center",
  },
});
