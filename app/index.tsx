import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import điều hướng
import Input from "../component/Input";
import PasswordInput from "../component/PasswordInput";
import RoundedButton from "../component/RoundedButton";
import CheckBox from "../component/CheckBox";
import ForgotPassword from "./authentication/forgotpassword";
import { router } from "expo-router";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigation = useNavigation(); // Sử dụng hook điều hướng

  if (!fontsLoaded) return null;

  const { width } = Dimensions.get("window");
  const isMobileView = width < 480;

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.partContainer, isMobileView && styles.fullWidth]}>
        <View style={[styles.formContainer, isMobileView && styles.formMobile]}>
          <Text style={[styles.header, isMobileView && styles.headerMobile]}>
            SIGN IN
          </Text>
          <View style={styles.inputContainer}>
            <Input title="Email" placeHolder="Enter your email..." />
            <PasswordInput
              title="Password"
              placeHolder="Enter your password..."
            />
            <View style={styles.bottom}>
              <View style={styles.checkBoxContainer}>
                <CheckBox onPress={(isChecked) => {}} />
                <Text style={styles.text}>Remember me</Text>
              </View>
              <TouchableHighlight onPress={() => setShowForgotPassword(true)}>
                <Text style={styles.highlight}>Forgot password?</Text>
              </TouchableHighlight>
            </View>
          </View>
          <RoundedButton
            title="SIGN IN"
            onPress={() => router.push("/section_student/dashboard_student")}
          />
        </View>
      </View>
      {!isMobileView && (
        <View style={styles.partContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.formatImage}
              source={require("../assets/images/Login.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  partContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    textAlign: "center",
  },
  headerMobile: {
    fontSize: 32,
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
    width: 400,
    paddingBottom: 100,
  },
  formMobile: {
    width: "90%",
    gap: 30,
    paddingBottom: 50,
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
