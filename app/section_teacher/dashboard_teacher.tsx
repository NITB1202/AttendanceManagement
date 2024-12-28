import React, { useState } from "react";
import Layout from "@/component/Layout";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function TeacherDashboard() {
  const [filter, setFilter] = useState("Week");

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.filterBar}>
          <Text style={styles.filterLabel}>Filter by</Text>
          <RNPickerSelect
            onValueChange={(value) => setFilter(value)}
            items={[
              { label: "Week", value: "Week" },
              { label: "Month", value: "Month" },
              { label: "Year", value: "Year" },
            ]}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
            value={filter}
          />
        </View>
        <Text style={styles.title}>This is teacher dashboard</Text>
        <Text style={styles.selectedText}>Selected Filter: {filter}</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  pickerInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
  },
});
