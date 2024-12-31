import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import Layout from "../../component/Layout"; // Import Layout component
import TableComponent from "../../component/Table"; // Import TableComponent của bạn
import SearchBar from "@/component/SearchBar";
import { Image } from "react-native";
import DocumentPicker, {
  DocumentPickerResponse,
} from "react-native-document-picker";

const handleSearch = (query: string) => {
  console.log("Từ khóa tìm kiếm:", query);
};

const AccountManager = () => {
  const [activeTab, setActiveTab] = useState("All"); // State để lưu tab hiện tại
  const [isModalVisible, setIsModalVisible] = useState(false); // State để kiểm soát modal
  const [open, setOpen] = useState(false); // Trạng thái mở của Dropdown
  const tableHeader = [
    "ID",
    "ROLE",
    "USERNAME",
    "EMAIL",
    "FULL NAME",
    "PHONE",
    "DATE OF BIRTH",
    "ROLE CODE",
  ];

  const tableData = [
    [
      "1",
      "STUDENT",
      "harry.potter",
      "harry.potter@hogwarts.edu",
      "Harry Potter",
      "123-456-7890",
      "31/07/1980",
      "SV111",
    ],
    [
      "2",
      "STUDENT",
      "hermione.granger",
      "hermione.granger@hogwarts.edu",
      "Hermione Granger",
      "123-456-7891",
      "19/09/1979",
      "SV112",
    ],
    [
      "3",
      "STUDENT",
      "ron.weasley",
      "ron.weasley@hogwarts.edu",
      "Ron Weasley",
      "123-456-7892",
      "01/03/1980",
      "SV113",
    ],
    [
      "4",
      "TEACHER",
      "albus.dumbledore",
      "albus.dumbledore@hogwarts.edu",
      "Albus Dumbledore",
      "123-456-7893",
      "02/07/1881",
      "TEA001",
    ],
    [
      "5",
      "TEACHER",
      "minerva.mcgonagall",
      "minerva.mcgonagall@hogwarts.edu",
      "Minerva McGonagall",
      "123-456-7894",
      "04/10/1935",
      "TEA002",
    ],
    [
      "6",
      "TEACHER",
      "severus.snape",
      "severus.snape@hogwarts.edu",
      "Severus Snape",
      "123-456-7895",
      "09/01/1960",
      "TEA003",
    ],
    [
      "7",
      "MANAGER",
      "rubeus.hagrid",
      "rubeus.hagrid@hogwarts.edu",
      "Rubeus Hagrid",
      "123-456-7896",
      "06/12/1928",
      "MAN001",
    ],
    [
      "8",
      "MANAGER",
      "sirius.black",
      "sirius.black@hogwarts.edu",
      "Sirius Black",
      "123-456-7897",
      "03/11/1959",
      "MAN002",
    ],
    [
      "9",
      "MANAGER",
      "remus.lupin",
      "remus.lupin@hogwarts.edu",
      "Remus Lupin",
      "123-456-7898",
      "10/03/1960",
      "MAN003",
    ],
  ];

  // Hàm lọc dữ liệu dựa trên tab
  const filterDataByRole = (role: string) => {
    if (role === "All") return tableData;
    return tableData.filter((row) => row[1] === role);
  };

  const filteredData = filterDataByRole(activeTab); // Dữ liệu sau khi lọc
  const [items, setItems] = useState([
    { label: "Student", value: "Student" },
    { label: "Teacher", value: "Teacher" },
    { label: "Manager", value: "Manager" },
  ]);

  const handleRowPress = (rowData: any[]) => {
    setSelectedRowData({
      email: rowData[3],
      role: rowData[1],
      fullName: rowData[4],
      dateOfBirth: rowData[6],
      phone: rowData[5],
      roleCode: rowData[7],
    });
    setIsModalVisible(true);
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Layout>
      <ScrollView style={styles.container}>
        {/* Search and Filter Section */}
        <View style={styles.searchContainer}>
          <SearchBar
            title="Search"
            placeholder="Search by..."
            onSearch={handleSearch}
          />
          <View style={styles.dropdownContainer}>
            <select
              style={styles.dropdownInput}
              onChange={(e) => console.log(e.target.value)} // Xử lý sự kiện thay đổi giá trị
            >
              <option value="MAN003">Role Code</option>
              <option value="remus.lupin@hogwarts.edu">Email</option>
              <option value="123-456-78984">Phone</option>
            </select>
          </View>
        </View>
        {/* Navbar */}
        <View style={styles.center}>
          <View style={styles.navbar}>
            {["All", "STUDENT", "TEACHER", "MANAGER"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.navButton,
                  activeTab === tab && styles.activeButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.navText,
                    activeTab === tab && styles.activeText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.containerAdd}>
            {/* Button Upload */}
            <TouchableOpacity style={[styles.button, styles.uploadButton]}>
              <Image
                source={require("../../assets/images/icon/user-check.png")} // Đường dẫn tới hình ảnh
                style={styles.icon}
              />
              <Text style={styles.uploadText}>Upload excel file</Text>
            </TouchableOpacity>

            {/* Button Add */}
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={toggleModal}
            >
              <Image
                source={require("../../assets/images/icon/plus-circle.png")}
                style={styles.icon}
              />
              <Text style={styles.addText}>Add new</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Table Section */}
        <View style={styles.tableContainer}>
          <TableComponent tableHeader={tableHeader} tableData={filteredData} />
        </View>

        {/* Modal */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>

              {/* Title */}
              <Text style={styles.modalTitle}>Create a new account</Text>

              {/* Email and Role */}
              <View style={styles.row}>
                <View>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[styles.input, { width: 304 }]}
                    placeholder="anna123@gmail.com"
                    keyboardType="email-address"
                  />
                </View>

                <View>
                  <Text style={styles.label}>Role</Text>
                  <View style={styles.dropdownContainer}>
                    <select
                      style={styles.dropdownInput}
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </View>
                </View>
              </View>

              {/* Full Name */}
              <View style={styles.column}>
                <Text style={styles.label}>Full name</Text>
                <TextInput
                  style={[styles.input, { width: 304 }]}
                  placeholder="Anna Maderlaise"
                />
              </View>

              {/* Date of Birth and Phone */}
              <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <Text style={styles.label}>Date of birth</Text>
                  <TextInput
                    style={[styles.input, { width: 156 }]}
                    placeholder="12/07/1998"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput
                    style={[styles.input, { width: 223 }]}
                    placeholder="09367891072"
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              {/* Role Code */}
              <View style={styles.column}>
                <Text style={styles.label}>Role code</Text>
                <TextInput
                  style={[styles.input, { width: 304 }]}
                  placeholder='If role is "Manager", you can leave this empty'
                />
              </View>

              {/* Confirm Button */}
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={toggleModal}
              >
                <Text style={styles.confirmText}>CONFIRM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Layout>
  );
};

export default AccountManager;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navbar: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#001F3F",
    width: 451,
    height: 60,
    borderRadius: 10,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderRadius: 5,
    width: 40,
    height: 40,
    marginTop: 10,
  },
  activeButton: {
    backgroundColor: "#4CAF50",
  },
  navText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  activeText: {
    color: "#FFFFFF",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    height: 40,
    gap: 20,
  },
  tableContainer: {
    marginTop: 20,
  },
  dropdownContainer: {
    marginVertical: 0,

    height: 37,
    width: 120,
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
    borderColor: "#959595",
    backgroundColor: "#fff",
    fontSize: 16,
  },

  button: {
    flexDirection: "row", // Biểu tượng và chữ hiển thị ngang nhau
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2, // Bóng trên Android
  },
  uploadButton: {
    backgroundColor: "#b0b0b0", // Màu xám
  },
  addButton: {
    backgroundColor: "#4CAF50", // Màu xanh lá
  },
  uploadText: {
    color: "#fff", // Màu chữ cho nút upload
    fontWeight: "bold",
    marginLeft: 8, // Khoảng cách giữa icon và text
  },
  addText: {
    color: "#fff", // Màu chữ cho nút add
    fontWeight: "bold",
    marginLeft: 8, // Khoảng cách giữa icon và text
  },
  icon: {
    width: 20, // Chiều rộng icon
    height: 20, // Chiều cao icon
    resizeMode: "contain", // Đảm bảo ảnh không bị méo
  },
  containerAdd: {
    flexDirection: "row", // Hiển thị nút theo hàng ngang
    justifyContent: "space-between", // Khoảng cách giữa các nút
    padding: 10,
    gap: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "flex-start",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: "#3A6D8C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: { fontSize: 18, fontWeight: "bold", color: "#000" },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
});
function setSelectedRowData(arg0: {
  email: any;
  role: any;
  fullName: any;
  dateOfBirth: any;
  phone: any;
  roleCode: any;
}) {
  throw new Error("Function not implemented.");
}
