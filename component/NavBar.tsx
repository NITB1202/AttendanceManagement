import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Dashboard"); // State mặc định là Dashboard

  const handlePress = (item: string) => {
    setActiveItem(item); // Cập nhật trạng thái khi nhấn
  };

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
        {["Dashboard", "Class", "Attendance", "Roll Call"].map(
          (item: string) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.menuItem,
                activeItem === item && styles.activeMenuItem,
              ]}
              onPress={() => handlePress(item)}
            >
              <Ionicons
                name={
                  item === "Dashboard"
                    ? "home-outline"
                    : item === "Class"
                    ? "book-outline"
                    : item === "Attendance"
                    ? "calendar-outline"
                    : "clipboard-outline"
                }
                size={20}
                color="#ffffff"
              />
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
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
    backgroundColor: "#001F3F",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginRight: 10,
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
    backgroundColor: "transparent", // Màu nền mặc định là trong suốt
  },
  activeMenuItem: {
    backgroundColor: "#3A6D8C", // Màu nền khi mục đang hoạt động
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
