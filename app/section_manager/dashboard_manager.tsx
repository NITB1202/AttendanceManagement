import Layout from "@/component/Layout";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
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
      colors: ["#1E88E5", "#FFC107", "#F44336"],
    },
    {
      label: "Tue",
      values: [3, 7, 10],
      colors: ["#1E88E5", "#FFC107", "#F44336"],
    },
    {
      label: "Wed",
      values: [1, 19, 5],
      colors: ["#1E88E5", "#FFC107", "#F44336"],
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

  return (
    <Layout>
      <View style={styles.container}>
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
                <Image source={item.icon} style={styles.summaryIcon} />
                <Text style={styles.summaryValue}>{item.value}</Text>
                <Text style={styles.summaryLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Chú thích */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColorBox, { backgroundColor: "#4CAF50" }]}
              />
              <Text style={styles.legendText}>Permission</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColorBox, { backgroundColor: "#FFC107" }]}
              />
              <Text style={styles.legendText}>Late</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendColorBox, { backgroundColor: "#F44336" }]}
              />
              <Text style={styles.legendText}>Without Permission</Text>
            </View>
          </View>

          {/* Biểu đồ chi tiết */}
          <Text style={styles.chartTitle}>
            Student attendance statistic table
          </Text>
          <View style={styles.containerBar}>
            <BarChart
              data={flattenedData}
              barWidth={40}
              spacing={4} // Đặt cố định khoảng cách 2px giữa các cột
              hideYAxisText
              xAxisLabelTextStyle={styles.xAxisLabel}
              noOfSections={4}
              maxValue={30}
              isAnimated
            />
          </View>
        </View>
      </View>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  summaryIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
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
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  containerBar: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  yAxisLabel: {
    color: "#757575",
    fontSize: 12,
  },
  xAxisLabel: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "bold",
  },
});
