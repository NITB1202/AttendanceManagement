import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Layout from "../../component/Layout"; // Đường dẫn tới Layout component
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function DashboardStudent() {
  const pieData = [
    {
      name: "On-time",
      population: 3,
      color: "#ff0000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Late",
      population: 2,
      color: "#ffcc00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Absence",
      population: 2,
      color: "#007FFF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.dashboardContent}>
        <Text style={styles.title}>Attendance Status</Text>

        {/* Container for Summary and PieChart */}
        <View style={styles.rowContainer}>
          {/* Summary - Display as table */}
          <View style={styles.summaryContainer}>
            <View style={styles.row}>
              <View style={[styles.summaryBox, { backgroundColor: "#7BAFD4" }]}>
                <Ionicons name="time-outline" size={24} color="#fff" />
                <Text style={styles.summaryTitle}>Number of lateness</Text>
                <Text style={styles.summaryValue}>3</Text>
              </View>
              <View style={[styles.summaryBox, { backgroundColor: "#F5BE40" }]}>
                <Ionicons name="alert-circle-outline" size={24} color="#fff" />
                <Text style={styles.summaryTitle}>
                  Maximum allowed lateness
                </Text>
                <Text style={styles.summaryValue}>6</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.summaryBox, { backgroundColor: "#4CAF50" }]}>
                <Ionicons name="person-outline" size={24} color="#fff" />
                <Text style={styles.summaryTitle}>Number of absences</Text>
                <Text style={styles.summaryValue}>2</Text>
              </View>
              <View style={[styles.summaryBox, { backgroundColor: "#F44336" }]}>
                <Ionicons name="person-remove-outline" size={24} color="#fff" />
                <Text style={styles.summaryTitle}>
                  Maximum allowed absences
                </Text>
                <Text style={styles.summaryValue}>4</Text>
              </View>
            </View>
          </View>

          {/* PieChart */}
          <PieChart
            data={pieData}
            width={screenWidth * 0.45} // Chiếm 50% container
            height={220}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute
          />
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  dashboardContent: {
    flexGrow: 1,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp theo hàng
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  summaryContainer: {
    flex: 1, // Chiếm 50% container
    marginRight: 10,
  },
  row: {
    flexDirection: "row", // Mỗi hàng chứa 2 ô
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryBox: {
    width: "48%", // Mỗi ô chiếm 48% chiều rộng trong hàng
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Đổ bóng
  },
  summaryTitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
});
