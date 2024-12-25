import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import Layout from "../../component/Layout"; // Đường dẫn tới Layout component
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function DashboardStudent() {
  const [selectedSlice, setSelectedSlice] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const pieData = [
    {
      name: "On-time",
      population: 3,
      color: "#EF1F1F",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Late",
      population: 2,
      color: "#FFC038",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Absence",
      population: 2,
      color: "#6A9AB0",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
  ];

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.dashboardContent}>
        {/* Dropdown  */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Class</Text>
          <select
            style={styles.dropdownInput}
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="SE103.022">SE103.022</option>
            <option value="SE104.023">SE104.023</option>
            <option value="SE105.024">SE105.024</option>
          </select>
        </View>

        {/* Container for Summary and PieChart */}
        <View style={styles.rowContainer}>
          {/* Summary - Display as table */}
          <View style={styles.summaryContainer}>
            <View style={styles.rowGen}>
              <View style={styles.sumLeft}>
                <View
                  style={[styles.summaryBox, { backgroundColor: "#6A9AB0" }]}
                >
                  <Text style={styles.summaryTitle}>Number of lateness</Text>
                  <View style={styles.row}>
                    <Image
                      source={require("../../assets/images/icon/alarm.png")}
                      style={styles.image}
                    />
                    <Text style={styles.summaryValue}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sumRight}>
                <View
                  style={[styles.summaryBox, { backgroundColor: "#FFC038" }]}
                >
                  <Text style={styles.summaryTitle}>
                    Maximum allowed lateness
                  </Text>
                  <View style={styles.row}>
                    <Image
                      source={require("../../assets/images/icon/warning-circle.png")}
                      style={styles.image}
                    />
                    <Text style={styles.summaryValue}>6</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* -------------------------------row2------------------ */}
            <View style={styles.rowGen}>
              <View style={styles.sumLeft}>
                <View
                  style={[styles.summaryBox, { backgroundColor: "#00B01A" }]}
                >
                  <Text style={styles.summaryTitle}>Number of absences</Text>
                  <View style={styles.row}>
                    <Image
                      source={require("../../assets/images/icon/user-warning.png")}
                      style={styles.image}
                    />
                    <Text style={styles.summaryValue}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sumRight}>
                <View
                  style={[styles.summaryBox, { backgroundColor: "#EF1F1F" }]}
                >
                  <Text style={styles.summaryTitle}>
                    Maximum allowed absences
                  </Text>
                  <View style={styles.row}>
                    <Image
                      source={require("../../assets/images/icon/user-cross.png")}
                      style={styles.image}
                    />

                    <Text style={styles.summaryValue}>4</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* PieChart */}

          <View style={styles.right}>
            <Text style={styles.title}>Attendance Status</Text>
            <PieChart
              data={pieData}
              width={screenWidth * 0.45} // Chiếm 50% container
              height={220}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
            {selectedSlice && (
              <View style={styles.tooltip}>
                <Text
                  style={{
                    color: pieData.find((p) => p.name === selectedSlice.label)
                      ?.color,
                  }}
                >
                  {`${selectedSlice.label}: ${selectedSlice.value}`}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  dashboardContent: {
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  image: {
    width: 50, // Kích thước hình ảnh
    height: 50,
  },

  rowGen: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
  },
  sumLeft: {
    flex: 5, // Chiếm 40% chiều rộng
  },
  sumRight: {
    flex: 6, // Chiếm 60% chiều rộng
    alignItems: "center",
  },
  dropdownContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    width: "30%",
    alignItems: "center",
  },
  dropdownLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
    fontFamily: "Roboto",
    marginLeft: 40,
  },
  dropdownInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  right: {
    flex: 4,
    width: "100%",
    alignItems: "center", // Căn giữa theo chiều ngang
    gap: 50, // Khoảng cách giữa các cột
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp theo hàng
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingLeft: 87,
    gap: 60,
  },
  summaryContainer: {
    flex: 4,
    width: "100%",
    marginTop: 57,
    paddingLeft: 40,
    gap: 40,
  },

  row: {
    flexDirection: "row", // Mỗi hàng chứa 2 ô
  },
  summaryBox: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Đổ bóng
  },
  summaryTitle: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    marginTop: 5,
    fontFamily: "Roboto",
    fontWeight: "600", // 600 thường được dùng để đại diện cho semibold
  },

  summaryValue: {
    fontSize: 45,
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "600",
    marginLeft: 10,
  },
  tooltip: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
