import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Layout from "../../component/Layout"; // Đường dẫn tới Layout component

export default function DashboardStudent() {
  return (
    <Layout>
      {/* Nội dung chính của Dashboard */}
      <ScrollView contentContainerStyle={styles.dashboardContent}>
        <Text style={styles.header}>Dashboard - Student</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Number of lateness</Text>
            <Text style={styles.cardNumber}>3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Maximum allowed lateness</Text>
            <Text style={styles.cardNumber}>6</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Number of absence</Text>
            <Text style={styles.cardNumber}>2</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Maximum allowed absence</Text>
            <Text style={styles.cardNumber}>4</Text>
          </View>
        </View>
        <Text style={styles.attendanceHeader}>Attendance Record</Text>
        <View style={styles.attendanceTable}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>No</Text>
            <Text style={styles.tableHeaderText}>Date</Text>
            <Text style={styles.tableHeaderText}>Arrival Time</Text>
            <Text style={styles.tableHeaderText}>Attendance Status</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>12/09/2024</Text>
            <Text style={styles.tableCell}>09:00 AM</Text>
            <Text style={styles.tableCell}>Late</Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  dashboardContent: {
    flexGrow: 1,
    paddingTop: 0,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#001f3f",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#007bff",
    width: "48%",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  cardText: {
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 10,
  },
  cardNumber: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  attendanceHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#001f3f",
  },
  attendanceTable: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#001f3f",
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
});
