import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedButton from "@/component/RoundedButton";
import { router } from "expo-router";

interface PasswordUpdatedProps {
  onBackToLogin: () => void;
}

export default function PasswordUpdated({
  onBackToLogin,
}: PasswordUpdatedProps) {
  return (
    <SafeAreaView>
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
    padding: 20,
  },
  partContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1, // Chiếm toàn bộ chiều cao của container
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    gap: 10, // Khoảng cách giữa các thành phần
    width: "100%", // Sử dụng toàn bộ chiều rộng
    paddingBottom: 0, // Xóa padding không cần thiết
    paddingHorizontal: 447,
    paddingVertical: 150,
  },

  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  notice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    marginBottom: 0,
  },
  button: {
    width: "100%",
    marginTop: 30,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
