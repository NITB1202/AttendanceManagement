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
import { PieChart } from "react-native-chart-kit";

export default function TeacherDashboard() {
  const [filter, setFilter] = useState<{ class: string; session: string }>({
    class: "All",
    session: "All",
  });
  const [dropdown, setDropdown] = useState<{
    class: boolean;
    session: boolean;
  }>({ class: false, session: false });

  const classOptions = ["SE100.P11", "SE100.P12", "SE109.1"];
  const sessionOptions = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

  const toggleDropdown = (type: "class" | "session") => {
    setDropdown((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const selectOption = (type: "class" | "session", option: string) => {
    setFilter((prev) => ({ ...prev, [type]: option }));
    setDropdown((prev) => ({ ...prev, [type]: false }));
  };

  // Dữ liệu cho PieChart
  const understandingData = [
    {
      name: "Well",
      population: 30,
      color: "#EF1F1F",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Normal",
      population: 13,
      color: "#FFC038",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Not well",
      population: 25,
      color: "#6A9AB0",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Bad",
      population: 55,
      color: "#00B01A",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
  ];

  const presenceData = [
    {
      name: "On-time",
      population: 30,
      color: "#EF1F1F",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Late",
      population: 25,
      color: "#6A9AB0",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Absence",
      population: 13,
      color: "#FFC038",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
  ];

  return (
    <Layout>
      <View style={styles.container}>
        {/* Thanh Filter */}
        <View
          style={[
            styles.filterBar,
            dropdown.class || dropdown.session ? { zIndex: 1000 } : {},
          ]}
        >
          {/* Class Dropdown */}
          <View style={styles.dropdownContainer1}>
            <Text style={styles.dropdownLabel}>Class</Text>
            <TouchableOpacity
              onPress={() => toggleDropdown("class")}
              style={styles.dropdownButton}
            >
              <Text style={styles.dropdownText}>{filter.class}</Text>
              <Image
                source={require("../../assets/images/icon/Chevron down.png")} // Đường dẫn tới ảnh icon của bạn
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            {dropdown.class && (
              <View style={[styles.dropdownMenu, { top: 74, zIndex: 2000 }]}>
                {classOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => selectOption("class", option)}
                    style={styles.dropdownItem}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Session Dropdown */}
          <View style={styles.dropdownContainer2}>
            <Text style={styles.dropdownLabel}>Session</Text>
            <TouchableOpacity
              onPress={() => toggleDropdown("session")}
              style={styles.dropdownButton}
            >
              <Text style={styles.dropdownText}>{filter.session}</Text>
              <Image
                source={require("../../assets/images/icon/Chevron down.png")} // Đường dẫn tới ảnh icon của bạn
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            {dropdown.session && (
              <View style={[styles.dropdownMenu, { top: 74, zIndex: 2000 }]}>
                {sessionOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => selectOption("session", option)}
                    style={styles.dropdownItem}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Card */}

        <View style={styles.containerCard}>
          {/* Card 1 */}
          <View style={[styles.card, { backgroundColor: "#6A9AB0" }]}>
            <Image
              source={require("../../assets/images/icon/list-center.png")} // Đường dẫn icon trong máy
              style={styles.icon}
            />
            <View>
              <Text style={styles.cardTitle}>Respond received</Text>
              <Text style={styles.cardValue}>48</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={[styles.card, { backgroundColor: "#4CAF50" }]}>
            <Image
              source={require("../../assets/images/icon/shape.png")} // Đường dẫn icon trong máy
              style={styles.icon}
            />
            <View>
              <Text style={styles.cardTitle}>The efficacy of the lesson</Text>
              <Text style={styles.cardValue}>72%</Text>
            </View>
          </View>
        </View>

        {/* Biểu đồ Pie Chart */}
        <View style={styles.chartField}>
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Students' understanding level</Text>
            <PieChart
              data={understandingData}
              width={Dimensions.get("window").width / 2 - 20}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[10, 0]}
              absolute
            />
          </View>

          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Presence rate</Text>
            <PieChart
              data={presenceData}
              width={Dimensions.get("window").width / 2 - 40}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[10, 0]}
              absolute
            />
          </View>
        </View>
      </View>
    </Layout>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  useShadowColorFromDataset: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    zIndex: 1000,
  },
  dropdownContainer1: {
    width: 121,
  },
  dropdownContainer2: {
    width: 94,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
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
  dropdownText: {
    fontSize: 16,
  },
  dropdownMenu: {
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
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  chartField: {
    flexDirection: "row", // Hiển thị theo hàng ngang
    justifyContent: "space-between", // Khoảng cách đều giữa các biểu đồ
    alignItems: "center", // Canh giữa theo chiều dọc
    marginTop: 20,
  },
  chartContainer: {
    flex: 1, // Chiếm đều không gian
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginHorizontal: 5, // Khoảng cách giữa hai biểu đồ
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dropdownIcon: {
    width: 16, // Đặt kích thước phù hợp với thiết kế của bạn
    height: 16,
    marginLeft: 5, // Khoảng cách giữa text và icon
  },

  containerCard: {
    flexDirection: "row", // Hiển thị các card ngang hàng
    justifyContent: "space-between", // Khoảng cách đều giữa các card
    alignItems: "center", // Căn giữa theo chiều dọc
    paddingHorizontal: 10, // Khoảng cách hai bên
    marginVertical: 20, // Khoảng cách trên và dưới
  },
  card: {
    flexDirection: "row", // Hiển thị icon và nội dung ngang hàng
    alignItems: "center", // Căn giữa theo chiều dọc
    padding: 10,
    borderRadius: 8,
    width: "48%", // Mỗi card chiếm 48% màn hình
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Hiệu ứng đổ bóng cho Android
  },
  icon: {
    width: 40, // Kích thước icon
    height: 40,
    marginRight: 10, // Khoảng cách giữa icon và text
  },
  cardTitle: {
    fontSize: 14,
    color: "#ffffff", // Màu chữ tiêu đề
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", // Màu chữ giá trị
  },
});
