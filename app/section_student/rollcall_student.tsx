import Layout from "@/component/Layout";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RoundedButton from "@/component/RoundedButton";
import QRCode from 'react-native-qrcode-svg';
import { router } from "expo-router";
import { Platform } from 'react-native';

const RollcallStudent = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>("SE501.P12");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showQR, setShowQR] = useState(false);
  const [QRContent, setQRContent] = useState<{className: string; session: number}>({
    className: "",
    session: 0
  });
  
  const classOptions: string[] = [
    "SE501.P12",
    "SE502.P11",
    "SE503.P10",
    "SE504.P09",
    "SE505.P08",
    "SE506.P07",
  ];

  const handleGenerateQRCode = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowDropdown(false);
  };

  const handleSelectClass = (className: string) => {
    setSelectedClass(className);
    setShowDropdown(false);
  };

  const handleConfirm = () => {
    setQRContent({
      className: selectedClass,
      session: 1
    });
    setModalVisible(false);
    setShowQR(true);
  };

  const handleScanQRCode = () => {
    console.log("Scan QR code");
    router.navigate("/section_student/open_camera");
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="Generate QR code"
            icon={<Ionicons name="add-circle-outline" size={30} color="#FFFFFF" />}
            style={styles.generateButton}
            focusColor="#027D15"
            onPress={handleGenerateQRCode}>
          </RoundedButton>
        {
          Platform.OS !== 'web' &&
          <RoundedButton
            title="Scan QR code"
            icon={<Ionicons name="camera-outline" size={30} color="#FFFFFF" />}
            onPress={handleScanQRCode}>
          </RoundedButton>
        }
        </View>

        <View style={styles.qrContainer}>
          {
            showQR &&
            <QRCode
              value={JSON.stringify(QRContent)}
              size={400}
              backgroundColor="white"
              color="black">
            </QRCode>
          }
        </View>

        <Text style={styles.timer}>00:00</Text>

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
              <Pressable onPress={handleCloseModal}>
                  <Ionicons name="close" size={24} color="#000" />
              </Pressable>
              <Text style={styles.modalTitle}>Take a roll call</Text>

              {/* Body */}
              <Text style={styles.modalText}>
                Select the class for which you would like to take a roll call
              </Text>

              {/* Dropdown */}
              <Pressable
                style={styles.dropdown}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                <Text style={styles.dropdownText}>{selectedClass}</Text>
                <Ionicons
                  name={showDropdown ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#000"
                />
              </Pressable>

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
              <RoundedButton
                title="CONFIRM"
                onPress={handleConfirm}
                style={styles.confirmButton}
                focusColor="#027D15">
              </RoundedButton>
             
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
    gap: 40,
  },
  button: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  generateButton: {
    backgroundColor: "#00B01A",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 500,
    borderColor: "#001F3F",
    borderRadius: 10,
    borderWidth: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-end",
    width: 400,
    marginLeft: 255,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "flex-start",
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
    alignSelf: "flex-start",
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
    maxHeight: 150,
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
    backgroundColor: "#00B01A",
    width: "100%",
    height: 40  ,
    marginTop: 20,
  },
  timer:{
    padding: 20,
    fontSize: 36,
    fontFamily: "Roboto_700Bold",
  }
});
