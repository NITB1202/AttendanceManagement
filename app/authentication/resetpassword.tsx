import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import RoundedButton from "@/component/RoundedButton";
import PasswordInput from "@/component/PasswordInput";
import { router } from "expo-router";

export default function ResetPassword() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <Text style={styles.header}>Reset Password</Text>
        <View style={styles.formContainer}>
          <Text style={styles.notice}>
            Create a new password for your account
          </Text>
          <PasswordInput
            title="New password"
            placeHolder="Enter your new password..."
          />
          <PasswordInput
            title="Confirm new password"
            placeHolder="Enter your new password..."
          />
          <RoundedButton
            title="CONFIRM"
            onPress={() => {
              router.push("/authentication/passwordupdated");
            }}
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
    padding: 20,
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    gap: 15,
    width: 400,
    paddingBottom: 100,
  },
  header: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
    textAlign: "center",
  },
  notice: {
    fontSize: 20,
    color: "gray",
    textAlign: "left",
    marginBottom: 0,
  },
});
