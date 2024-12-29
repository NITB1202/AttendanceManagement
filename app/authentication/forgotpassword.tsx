import React, { useState } from "react";
import Input from "../../component/Input";
import RoundedButton from "@/component/RoundedButton";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ErrorMessage from "@/component/ErrorMessage";
import validateEmail from "@/util/validEmail";
import authAPI from "@/apis/authAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState<{ title: string; description: string }>({
      title: '',
      description: '',
  });

  const handleClick = async () =>{
    if(email === ""){
      setShowError(true);
      setError({
        title: "Invalid email",
        description: "Email is empty."
      });
      return;
    }

    if(!validateEmail(email)){
      setShowError(true);
      setError({
        title: "Invalid email",
        description: "Invalid email format."
      })
      return;
    }

    try{
      await authAPI.sendCode(email);
      AsyncStorage.setItem("email", email);
      router.push("/authentication/verification");
    }
    catch (error) {
      setShowError(true);
      setError({
        title: "Error",
        description: "User not found."
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>FORGOT PASSWORD</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.notice}>
            Please enter your email address. You will receive 4 digits code via
            email to reset your password
          </Text>
          <Input
            title="Email"
            placeHolder="Enter your email..."
            style={styles.input}
            onChangeText={setEmail}
          />
          <RoundedButton
            title="CONTINUE"
            onPress={handleClick}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/ForgotPassword.png")}
          resizeMode="contain"
        />
      </View>
      {
        showError &&
        <ErrorMessage
          title={error.title}
          description={error.description}
          setOpen={setShowError}>
        </ErrorMessage>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
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
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 20,
  },
  notice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "#959595",
    textAlign: "left",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 40,
  },
  imageContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
