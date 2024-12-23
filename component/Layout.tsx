import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../component/NavBar"; // Đường dẫn tới Navbar component
import Header from "../component/Header"; // Thêm Header component

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State để kiểm soát hiển thị Navbar

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev); // Đảo trạng thái hiển thị Navbar
  };

  return (
    <View style={styles.container}>
      {/* Nút Menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={toggleNavbar}>
        <Ionicons name="menu-outline" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Navbar (hiển thị hoặc ẩn dựa trên state isNavbarVisible) */}
      {isNavbarVisible && (
        <View style={styles.navbar}>
          <Navbar />
        </View>
      )}

      {/* Main Content */}
      <View
        style={[
          styles.mainContent,
          !isNavbarVisible && styles.fullWidthContent,
        ]}
      >
        {/* Header nằm ở đầu mainContent */}
        <Header />

        {/* Nội dung chính */}
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  menuIcon: {
    position: "absolute",
    top: 6,
    left: 10,
    zIndex: 10, // Đảm bảo nút menu luôn hiển thị trên cùng
    backgroundColor: "#001F3F",
    borderRadius: 10,
    padding: 5,
    elevation: 3,
  },
  navbar: {
    paddingTop: 30,
    flex: 1.7,
    backgroundColor: "#001f3f",
  },
  mainContent: {
    flex: 8.3,
    backgroundColor: "#f5f5f5",
  },
  fullWidthContent: {
    flex: 1, // Chiếm toàn bộ chiều rộng khi Navbar bị ẩn
  },
  content: {
    flex: 1,
    padding: 20, // Nội dung nằm dưới Header
  },
});
