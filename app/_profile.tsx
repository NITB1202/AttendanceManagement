import Layout from "@/component/Layout";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  const [username, setUsername] = useState("Anna Maderlaise");
  const [fullName, setFullName] = useState("Anna Maderlaise");
  const [dateOfBirth, setDateOfBirth] = useState("12/07/1998");
  const [phone, setPhone] = useState("0934567823");
  const [roleCode, setRoleCode] = useState("");

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Phần Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s", // Thay URL này bằng ảnh thực tế
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../assets/images/icon/camera.png")} // Đường dẫn ảnh có sẵn
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        {/* Form thông tin */}
        <Text style={styles.label}>User name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter user name"
          placeholderTextColor={styles.placeholder.color}
        />

        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter full name"
          placeholderTextColor={styles.placeholder.color}
        />
        <View style={styles.row}>
          <View style={[styles.column, { marginRight: 10 }]}>
            <Text style={styles.label}>Date of birth</Text>
            <TextInput
              style={styles.input}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholder="DD/MM/YYYY"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
        </View>

        <Text style={styles.label}>Role code</Text>
        <TextInput
          style={styles.input}
          value={roleCode}
          onChangeText={setRoleCode}
          placeholder="Enter role code"
          placeholderTextColor={styles.placeholder.color}
        />

        <TouchableOpacity>
          <Text style={styles.resetPassword}>Reset password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 459,
    justifyContent: "center",
    alignSelf: "center", // Đảm bảo căn giữa nếu container có kích thước cố định
  },
  avatarContainer: {
    alignItems: "center",

    position: "relative",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  iconContainer: {
    bottom: 40,
    left: 60,
    backgroundColor: "#3A6D8C",
    borderRadius: 23,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3, // Hiệu ứng nổi
  },
  iconImage: {
    margin: 4,
    width: 18,
    height: 14,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "400",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  placeholder: {
    color: "rgba(0, 0, 0, 0.3)",
  },
  resetPassword: {
    color: "#0900FF", // Màu xanh
    textAlign: "left", // Căn lề trái
    marginBottom: 20, // Khoảng cách dưới
    fontSize: 20, // Kích thước chữ
    textDecorationLine: "underline", // Gạch chân
  },

  saveButton: {
    backgroundColor: "#3A6D8C",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  column: {
    flex: 1,
  },
});

export default ProfileScreen;
