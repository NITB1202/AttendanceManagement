import userApi from '@/apis/userApi';
import RoundedButton from '@/component/RoundedButton';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/context/AuthContext';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';


const openCamera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [scannedData, setScannedData] = useState<{ className: string; session: number }>({
    className: "",
    session: 0,
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const { authState } = useAuth();
  const [user, setUser] = useState<{ name: string; code: string }>({
    name: "",
    code: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await userApi.getById(authState.id);
        setUser({
          name: response.data.name,
          code: response.data.roleCode,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [authState.id]);

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (isScanning) {
      setIsScanning(false);
      setShowConfirm(true);
      try {
        const jsonData = JSON.parse(data);
        setScannedData({
          className: jsonData.className,
          session: jsonData.session,
        });
      } catch (error) {
        console.log("Invalid QR code data");
      }
    }
  };

  const handleCloseModal = () => {
    setShowConfirm(false);
    setIsScanning(true);
  };

  if (!permission) {
    return <View />;
  }

  const handleConfirm = () =>{
    router.back();
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={isScanning ? handleBarcodeScanned : undefined}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={showConfirm}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={handleCloseModal}>
              <Ionicons name="close" size={24} color="#000" />
            </Pressable>
            <Text style={styles.title}>Attendance confirmation</Text>
            <View style={styles.body}>
              <View>
                <Text>Class name:</Text>
                <Text>Session no:</Text>
                <Text>Date:</Text>
                <Text>Student name:</Text>
                <Text>Student code:</Text>
                <Text>Arrival time:</Text>
              </View>
              <View>
                <Text>{scannedData.className}</Text>
                <Text>{scannedData.session}</Text>
                <Text>{new Date().toLocaleDateString()}</Text>
                <Text>{user.name}</Text>
                <Text>{user.code}</Text>
                <Text>{new Date().toLocaleTimeString()}</Text>
              </View>
            </View>
            <RoundedButton
              title="CONFIRM"
              style={styles.button}
              textStyle={styles.buttonText}
              focusColor={Colors.focusGreen}
              onPress={handleConfirm}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      width: "100%",
      aspectRatio: 1,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent:{
      zIndex: 10,
      width: 300,
      backgroundColor: "white",
      borderRadius: 10,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      padding: 10,
      gap: 10,
      display: "flex",
      alignItems: "flex-start",
    },
    button:{
      width: "100%",
      height: 40,
      paddingVertical: 5,
      backgroundColor: Colors.green
    },
    buttonText:{
      fontSize: 18
    },
    title:{
      fontSize: 18,
      fontWeight: 600,
      textAlign: "left",
    },
    body:{
      display: "flex",
      flexDirection: "row",
      width: 200,
      gap: 60,
      marginVertical: 10
    },
    closeButton:{
      width: "100%",
      display: "flex",
      alignItems: "flex-end"
    }
  });

export default openCamera;
