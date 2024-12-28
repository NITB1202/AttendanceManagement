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
import { BarChart } from "react-native-chart-kit";
import { G, Rect, Text as SvgText } from "react-native-svg";

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

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [5, 3, 1, 0, 0, 0],
        color: () => "#4CAF50", // Màu cho "Permission"
      },
      {
        data: [14, 7, 19, 0, 0, 0],
        color: () => "#FFC107", // Màu cho "Late"
      },
      {
        data: [12, 10, 5, 0, 0, 0],
        color: () => "#F44336", // Màu cho "Without Permission"
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // Sử dụng màu từ dataset
  };

  const screenWidth = Dimensions.get("window").width;

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
          <BarChart
            data={barData}
            width={screenWidth - 20}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            showValuesOnTopOfBars
            style={styles.chartContainer}
            yAxisLabel="" // Cung cấp nhãn cho trục Y (có thể để chuỗi rỗng)
            yAxisSuffix="" // Cung cấp hậu tố cho trục Y (có thể để chuỗi rỗng)
          />
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
  chartContainer: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
});
