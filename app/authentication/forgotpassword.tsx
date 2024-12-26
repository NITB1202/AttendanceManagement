import React, { useState } from "react";
import Input from "../../component/Input";
import RoundedButton from "@/component/RoundedButton";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>FORGOT PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.notice}>
              Please enter your email address. You will receive
            </Text>
            <Text style={styles.notice}>
              4 digits code via email to reset your password
            </Text>
            <Input
              title="Email"
              placeHolder="Enter your email..."
              style={styles.input}
            />
            <RoundedButton
              title="CONTINUE"
              onPress={() => {
                router.push("/authentication/verification");
              }}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.formatImage}
            source={require("../../assets/images/ForgotPassword.png")}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 480,
    marginTop: 100,
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 42,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  notice: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    color: "#959595",
    textAlign: "left",
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  formatImage: {
    width: 356,
    height: 280,
    marginBottom: 60,
  },
});
