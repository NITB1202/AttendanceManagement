import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Layout from "../../component/Layout"; // Import Layout component
import TableComponent from "../../component/Table"; // Import TableComponent của bạn
import SearchBar from "@/component/SearchBar";

const handleSearch = (query: string) => {
  console.log("Từ khóa tìm kiếm:", query);
};

const handleAddNew = () => {
  console.log('Add New button clicked');
};

const ClassManager = () => {
  const tableHeader = [
    "CLASS NAME",
    "COURSE NAME",
    "START DATE",
    "END DATE",
    "START TIME",
    "END TIME",
    "TEACHER NAME",
  ];

  const tableData = [
    [
      "M120.P22",
      "MATH BASIC",
      "01/06/2024",
      "01/09/2024",
      "07:00 AM",
      "10:30 AM",
      "Luwid Mathra",
    ],
  ];

  return (
    <Layout>
      <ScrollView style={styles.container}>
        {/* Search and Filter Section */}
        <View style={styles.searchContainer}>
          <SearchBar
            title="Search"
            placeholder="Type to search..."
            onSearch={handleSearch}
          />
          <View style={styles.dropdownContainer}>
            <select
              style={styles.dropdownInput}
              onChange={(e) => console.log(e.target.value)} // Xử lý sự kiện thay đổi giá trị
            >
              <option value="SE103.022">Class name</option>
              <option value="SE104.023">Course name</option>
              <option value="SE105.024">Teacher name</option>
            </select>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
             <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        {/* Table Section */}
        <View style={styles.tableContainer}>
          <TableComponent tableHeader={tableHeader} tableData={tableData} />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ClassManager;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    marginVertical: 0,
    paddingLeft: 20,
    height: 37,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  dropdownInput: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
    addButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 'auto',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
  tableContainer: {
    marginTop: 20,
  },
});