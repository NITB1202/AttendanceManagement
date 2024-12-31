import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TableComponentProps {
  tableHeader: string[];
  tableData: (string | React.ReactNode)[][];
}

export default function TableComponent({
  tableHeader,
  tableData,
}: TableComponentProps) {
  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.headerRow}>
        {tableHeader.map((header, index) => (
          <Text key={index} style={styles.headerCell}>
            {header}
          </Text>
        ))}
      </View>
      {/* Table Data */}
      {tableData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.dataRow}>
          {row.map((cell, cellIndex) => (
            <Text key={cellIndex} style={styles.dataCell}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#6A9AB0",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dataCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#333",
  },
});
