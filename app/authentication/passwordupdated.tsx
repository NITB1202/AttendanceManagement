import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedButton from "@/component/RoundedButton";
import { router } from "expo-router";

export default function PasswordUpdated() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={require("../../assets/images/SuccessfulIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.header}>PASSWORD UPDATED</Text>
        <Text style={styles.notice}>
          Your password has been changed successfully. Use your new password to
          log in.
        </Text>

        <RoundedButton
          title="RETURN"
          onPress={() => {
            router.push("/");
          }}
          style={styles.button}
        ></RoundedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Đặt nền trắng nếu cần
  },
  formContainer: {
    width: 514, // Chiều rộng cố định
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30, // Khoảng cách giữa các phần tử
    paddingVertical: 50, // Căn lề dọc
  },
  icon: {
    width: 174,
    height: 174,
    aspectRatio: 1, // Tỉ lệ 1:1 cho hình vuông
    marginBottom: 20,
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    width: "100%", // Chiếm toàn bộ chiều rộng container
  },
  notice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    width: "100%", // Chiếm toàn bộ chiều rộng container
  },
  button: {
    width: "100%", // Chiếm toàn bộ chiều rộng container
    marginTop: 30,
  },
});
