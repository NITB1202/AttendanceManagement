import React, {useState} from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  TextInput,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [newClassName, setNewClassName] = useState('');

  const handleAddNew = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    console.log('New Class Name:', newClassName);
    setModalVisible(false);
  };

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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create New Class</Text>

              <View style={styles.contentContainer}>
                <View style={styles.contentBox1}>
                  <Text style={styles.label}>Class Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter class name"
                    value={newClassName}
                    onChangeText={setNewClassName}
                  />
                  <Text style={styles.label}>Course Name</Text>
                  <select style={styles.dropdown}>
                    <option value="class1">Math</option>
                    <option value="class2">Literature</option>
                    <option value="class3">Physics</option>
                  </select>
                </View>
                <View style={styles.contentBox2}>
                  <View style={styles.column}>
                    <Text style={styles.label}>Start Date</Text>
                    <TextInput style={styles.input} placeholder="Input 1" />
                    <Text style={styles.label}>Start Time</Text>
                    <TextInput style={styles.input} placeholder="Input 1" />
                    <select style={styles.dropdown}>
                      <option value="class1">Math</option>
                      <option value="class2">Literature</option>
                      <option value="class3">Physics</option>
                    </select>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.label}>End Date</Text>
                    <TextInput style={styles.input} placeholder="Input 2" />
                    <Text style={styles.label}>End Time</Text>
                    <TextInput style={styles.input} placeholder="Input 1" />
                    <select style={styles.dropdown}>
                      <option value="class1">Math</option>
                      <option value="class2">Literature</option>
                      <option value="class3">Physics</option>
                    </select>
                  </View>
                </View>
                <View style={styles.contentBox3}>
                  áa
                </View>
              </View>
              
              <View style={styles.buttonContainer}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </View>
        </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 523,
    height: 745,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  contentBox1: {
    flex: 1,
    marginHorizontal: 5,
  },
  contentBox2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  contentBox3: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    width: '70%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
});