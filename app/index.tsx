import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../component/Input";
import PasswordInput from "../component/PasswordInput";
import RoundedButton from "../component/RoundedButton";
import CheckBox from "../component/CheckBox";
import { useAuth } from "../context/AuthContext";
import { Role } from "../context/AuthContext";

export default function Index() {
  const { onLogin } = useAuth(); // Lấy hàm login từ AuthContext
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!fontsLoaded) return null;

  const handleLogin = () => {
    if (!onLogin) {
      console.error("onLogin is undefined. Please check AuthProvider.");
      return;
    }

    // Gọi hàm onLogin
    onLogin(email, password);

    // Lấy trạng thái từ AuthContext
    const { authState } = useAuth();

    // Kiểm tra nếu authState không được định nghĩa
    if (!authState) {
      console.error("authState is undefined. Please check AuthProvider.");
      return;
    }

    const { authenticated, role } = authState;

    if (authenticated) {
      if (role === Role.MANAGER) {
        router.push("/section_manager/dashboard_manager");
      } else if (role === Role.TEACHER) {
        router.push("/section_teacher/dashboard_teacher");
      } else if (role === Role.STUDENT) {
        router.push("/section_student/dashboard_student");
      } else {
        console.error("Unknown role detected.");
      }
    } else {
      Alert.alert(
        "Login Failed",
        "Invalid username or password. Please try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>SIGN IN</Text>
          <View style={styles.inputContainer}>
            <Input title="Email" placeHolder="Enter your email..." />
            <PasswordInput
              title="Password"
              placeHolder="Enter your password..."
            />
            <View style={styles.bottom}>
              <View style={styles.checkBoxContainer}>
                <CheckBox onPress={(isChecked) => {}}></CheckBox>
                <Text style={styles.text}>Remember me</Text>
              </View>
              <TouchableHighlight
                onPress={() => {
                  router.push("/authentication/forgotpassword");
                }}
              >
                <Text style={styles.highlight}>Forgot password?</Text>
              </TouchableHighlight>
            </View>
          </View>
          <RoundedButton
            title="SIGN IN"
            onPress={() => {
              router.push("/section_student/dashboard_student");
            }}
          />
        </View>
      </View>
      <View style={styles.partContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.formatImage}
            source={require("../assets/images/Login.png")}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    textAlign: "center",
  },
  inputContainer: {
    gap: 15,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
  },
  formContainer: {
    gap: 40,
    width: "80%",
    maxWidth: 400,
    paddingBottom: 100,
  },
  highlight: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: Colors.primary,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formatImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
  },
});
