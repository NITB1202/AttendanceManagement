import Layout from "@/component/Layout";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RollcallStudent = () => {
  const [isModalVisible, setModalVisible] = useState(false); // Hiển thị modal
  const [selectedClass, setSelectedClass] = useState<string>("SE501.P12"); // Lớp học được chọn
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // Hiển thị dropdown
  const classOptions: string[] = [
    "SE501.P12",
    "SE502.P11",
    "SE503.P10",
    "SE504.P09",
    "SE505.P08",
    "SE506.P07",
  ]; // Danh sách lớp học

  const handleGenerateQRCode = () => {
    setModalVisible(true); // Hiển thị modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Ẩn modal
  };

  const handleSelectClass = (className: string) => {
    setSelectedClass(className); // Gán giá trị lớp học
    setShowDropdown(false); // Đóng dropdown
  };

  const handleConfirm = () => {
    console.log("Selected class:", selectedClass);
    setModalVisible(false); // Ẩn modal
  };

  const handleScanQRCode = () => {
    console.log("Scan QR code");
    // Thêm logic quét mã QR tại đây
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.generateButton]}
            onPress={handleGenerateQRCode}
          >
            <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
            <Text style={styles.buttonText}>Generate QR code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.scanButton]}
            onPress={handleScanQRCode}
          >
            <Ionicons name="camera-outline" size={20} color="#FFFFFF" />
            <Text style={styles.buttonText}>Scan QR code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.qrContainer}>
          <Image
            source={require("../../assets/images/qr.png")} // Đường dẫn ảnh từ dự án của bạn
            style={styles.qrCode}
          />
        </View>

        {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {/* Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Take a roll call</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              {/* Body */}
              <Text style={styles.modalText}>
                Select the class for which you would like to take a roll call
              </Text>
              {/* Dropdown */}
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                <Text style={styles.dropdownText}>{selectedClass}</Text>
                <Ionicons
                  name={showDropdown ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>

              {showDropdown && (
                <ScrollView style={styles.dropdownListInModal}>
                  {classOptions.map((className, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleSelectClass(className)}
                    >
                      <Text style={styles.dropdownItemText}>{className}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}

              {/* Confirm Button */}
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={handleConfirm}
              >
                <Text style={styles.buttonText}>CONFIRM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
};

export default RollcallStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: 500,
    gap: 40,
  },
  button: {
    flex: 1,
    flexDirection: "row", // Đặt biểu tượng và text nằm ngang
    alignItems: "center", // Căn giữa icon và text theo chiều dọc
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  generateButton: {
    backgroundColor: "#4CAF50", // Màu xanh lá
  },
  scanButton: {
    backgroundColor: "#3A6D8C", // Màu xanh dương
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10, // Khoảng cách giữa biểu tượng và text
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 500,
  },
  qrCode: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền tối mờ
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start", // Đưa toàn bộ nội dung căn trái
    width: "40%",
    marginLeft: 255,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left", // Căn lề trái
    alignSelf: "flex-start", // Đảm bảo nội dung căn từ đầu của container
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignSelf: "flex-start", // Đưa dropdown sát bên trái
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownListInModal: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginTop: 10,
    width: "100%",
    maxHeight: 150, // Đặt độ cao tối đa
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownItemText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Cách nút confirm 10px
  },
});
