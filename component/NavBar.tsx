import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Sử dụng thư viện Expo hoặc cài đặt react-native-vector-icons

function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/Logo.png")} // Thay đổi đường dẫn tới logo cục bộ
          style={styles.logo}
        />
      </View>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={20} color="#ffffff" />
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="book-outline" size={20} color="#ffffff" />
          <Text style={styles.menuText}>Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="calendar-outline" size={20} color="#ffffff" />
          <Text style={styles.menuText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="clipboard-outline" size={20} color="#ffffff" />
          <Text style={styles.menuText}>Roll Call</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#ffffff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: 231,
    backgroundColor: "#001f3f",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: "100%",
    height: 40,
    marginRight: 10,
  },
  logoText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuContainer: {
    flex: 1,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#002d5f", // Màu nền của menu item
  },
  menuText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#d9534f", // Màu đỏ cho nút Logout
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Navbar;
