import React, { useState } from 'react';
import { router } from "expo-router";
import { Dimensions, Image, Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../component/Input";
import PasswordInput from "../component/PasswordInput";
import RoundedButton from "../component/RoundedButton";
import CheckBox from "../component/CheckBox";
import ForgotPassword from './authentication/forgotpassword';
import Verification from './authentication/verification';
import ResetPassword from './authentication/resetpassword';
import PasswordUpdated from './authentication/passwordupdated';

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  if (!fontsLoaded) return null;

  const { width } = Dimensions.get('window');
  const isMobileView = width < 480;
  const containerStyle = isMobileView ? [styles.partContainer, { flex: 1 }] : styles.partContainer;

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setShowVerification(false);
    setShowResetPassword(false);
    setPasswordUpdated(false);
  };

  if (passwordUpdated) {
    return <PasswordUpdated onBackToLogin={handleBackToLogin} />;
  }

  if (showResetPassword) {
    return <ResetPassword onBack={() => setShowResetPassword(false)} onPasswordUpdated={() => setPasswordUpdated(true)} />;
  }

  if (showVerification) {
    return <Verification onBack={() => setShowVerification(false)} onResetPassword={() => setShowResetPassword(true)} />;
  }

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} onVerification={() => setShowVerification(true)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>SIGN IN</Text>
          <View style={styles.inputContainer}>
            <Input title="Email" placeHolder="Enter your email..." value="" onChangeText={() => {}} ></Input>
            <PasswordInput title="Password" placeHolder="Enter your password..."></PasswordInput>
            <View style={styles.bottom}>
              <View style={styles.checkBoxContainer}>
                <CheckBox onPress={(isChecked) => { }}></CheckBox>
                <Text style={styles.text}>Remember me</Text>
              </View>
              <TouchableHighlight onPress={() => setShowForgotPassword(true)}>
                <Text style={styles.highlight}>Forgot password?</Text>
              </TouchableHighlight>
            </View>
          </View>
          <RoundedButton title="SIGN IN" onPress={() => { }}></RoundedButton>
        </View>
      </View>
      {!isMobileView &&
        <View style={styles.partContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.formatImage} source={require('../assets/images/Login.png')} resizeMode="contain"></Image>
          </View>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  partContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    textAlign: "center"
  },
  inputContainer: {
    gap: 15
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
    paddingBottom: 100
  },
  highlight: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: Colors.primary
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formatImage: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "80%",
    height: "80%",
    overflow: "hidden"
  }
});