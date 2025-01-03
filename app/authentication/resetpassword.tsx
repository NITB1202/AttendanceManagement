import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import RoundedButton from "@/component/RoundedButton";
import PasswordInput from "@/component/PasswordInput";
import { router } from "expo-router";
import ErrorMessage from "@/component/ErrorMessage";
import authAPI from "@/apis/authAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState<{ title: string; description: string }>({
      title: '',
      description: '',
  });

  const handleConfirm = async () =>{
    if(password === "")
    {
      setShowError(true);
      setError({
        title: "Invalid password",
        description: "Password is empty."
      })
      return;
    }

    if(confirmPassword === "")
    {
      setShowError(true);
      setError({
        title: "Invalid password",
        description: "Confirm password is empty."
      });
      return;
    }

    if(password !== confirmPassword)
    {
      setShowError(true);
      setError({
        title: "Error",
        description: "Password and confirmed password do not match."
      })
      return;
    }

    const email = await AsyncStorage.getItem("email");
    if(email === null)
    {
      setShowError(true);
      setError({
        title: "Error",
        description: "Unable to locate recovered email."
      });
    }
    else{
      try{
        await authAPI.reset(email, password);
        AsyncStorage.removeItem("email");
        router.push("/authentication/passwordupdated");
      }
      catch(error){
        setShowError(true);
        setError({
          title: "Duplicated password",
          description: "The new password is the same as the old password."
      });
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <Text style={styles.header}>RESET PASSWORD</Text>
        <View style={styles.formContainer}>
          <Text style={styles.notice}>
            Create a new password for your account
          </Text>
          <PasswordInput
            title="New password"
            placeHolder="Enter your new password..."
            onChangeText={setPassword}
          />
          <PasswordInput
            title="Confirm password"
            placeHolder="Enter your new password..."
            onChangeText={setConfirmPassword}
          />
          <RoundedButton
            title="CONFIRM"
            onPress={handleConfirm}
          />
        </View>
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
    padding: 20,
    backgroundColor: "white"
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    gap: 20,
    width: 400,
    paddingBottom: 100,
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
  },
  notice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "gray",
    textAlign: "left",
    marginBottom: 0,
  },
});
