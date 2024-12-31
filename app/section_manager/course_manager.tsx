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
import Layout from "../../component/Layout"; 
import TableComponent from "../../component/Table"; 
import SearchBar from "@/component/SearchBar";
import RoundedButton from "@/component/RoundedButton";

const handleSearch = (query: string) => {
  console.log("Từ khóa tìm kiếm:", query);
};

const CourseManager = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [actionModalVisible, setActionModalVisible] = useState(false);

  const handleAddNew = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    console.log('New Class Name:', newClassName);
    setModalVisible(false);
  };

  const tableHeader = [
    "ID",
    "COURSE NAME",
    "COURSE CODE",
    "",
  ];

  const tableData = [
    [
      "M120.P22",
      "MATH BASIC",
      "MB101.001",
    ],
  ];

    const handleUploadExcel = () => {
        console.log('Upload Excel File button clicked');
    };

    const handleActionButtonClick = () => {
        setActionModalVisible(true);
    };

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
              <option value="SE103.022">Name</option>
              <option value="SE104.023">Code</option>
            </select>
          </View>
                  <TouchableOpacity style={styles.uploadButton} onPress={handleUploadExcel}>
                      <Text style={styles.uploadButtonText}>Upload Excel File</Text>
                  </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
             <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
          
        </View>

        {/* Table Section */}
        <View style={styles.tableContainer}>
            <TableComponent 
                tableHeader={tableHeader} 
                tableData={tableData.map(row => [...row, (
                    <TouchableOpacity style={styles.actionButton} onPress={handleActionButtonClick}>
                        <Text style={styles.actionButtonText}>⋯</Text>
                    </TouchableOpacity>
                )])} 
            />
        </View>
        {/* Modal */}
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
                                                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                                    <Text style={styles.closeButtonText}>✕</Text>
                                                </TouchableOpacity>
                                                <Text style={styles.modalText}>Create a new course</Text>
                                                <Text style={styles.labelModal}>Course Name</Text>
                                                <View style={styles.textBox}>
                                                    <Text style={styles.text}></Text>
                                                </View>
                                                <Text style={styles.labelModal}>Course Code</Text>
                                                <View style={styles.textBox}>
                                                    <Text style={styles.text}></Text>
                                                </View>
                                                <RoundedButton
                                                    title="CONFIRM"
                                                    onPress={() => { }}
                                                    style={styles.roundedButton}
                                                    textStyle={styles.roundedButtonText}
                                                />                                           
                                            </View>
                                        </View>
                                    </Modal>
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={actionModalVisible}
                  onRequestClose={() => {
                      setActionModalVisible(!actionModalVisible);
                  }}
              >
                  <View style={styles.modalContainer}>
                      <View style={styles.modalView}>
                          <TouchableOpacity style={styles.closeButton} onPress={() => setActionModalVisible(false)}>
                              <Text style={styles.closeButtonText}>✕</Text>
                          </TouchableOpacity>
                          <Text style={styles.modalText}>Update course</Text>
                          <Text style={styles.labelModal}>Course Name</Text>
                          <View style={styles.textBox}>
                              <Text style={styles.text}></Text>
                          </View>
                          <Text style={styles.labelModal}>Course Code</Text>
                          <View style={styles.textBox}>
                              <Text style={styles.text}></Text>
                          </View>
                          <RoundedButton
                              title="CONFIRM"
                              onPress={() => { }}
                              style={styles.roundedButton}
                              textStyle={styles.roundedButtonText}
                          />
                      </View>
                  </View>
              </Modal>
      </ScrollView>
    </Layout>
  );
};

export default CourseManager;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 80,
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
    uploadButton: {
        marginLeft: 420,
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    uploadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
  tableContainer: {
    marginTop: 20,
  },
    actionButton: {
        marginTop: -10,
    },
    actionButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
    modalView: {
        width: 297,
        height: 300,
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
  inputTime: {
    width: '47%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dropdownTime: {
    width: '47%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  dropdownTeacher: {
    width: '90%',
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
  column2: {
    flex: 2,
    marginHorizontal: 5,
  },
  column3: {
    flex: 1,
    marginHorizontal: 5,
  },
  textBoxCode: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    height: 40,
  },
  textBoxList: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    height: 40,
  },
  text: {
    fontSize: 16,
    flexDirection: 'row',
    flex: 1,
  },
  roundedButtonText: {
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  roundedButtonSave: {
    fontSize: 20, 
    fontWeight: 'bold', 
  },
  roundedButton: {
    marginTop: 25, 
    width: '100%', 
    height: 40, 
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 24,
  },
  labelModal: {
      fontSize: 16,
      marginBottom: 5,
      alignSelf: 'flex-start',
  },
  dropdownModal: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
 },
 textBox: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    height: 40,
 },

});