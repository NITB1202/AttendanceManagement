import React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "../component/NavBar"; // Đường dẫn tới Navbar component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {/* Navbar chiếm 30% */}
      <View style={styles.navbar}>
        <Navbar />
      </View>

      {/* Main Content chiếm 70% */}
      <View style={styles.mainContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Navbar bên trái, nội dung bên phải
  },
  navbar: {
    flex: 1.6, // Tỷ lệ 3/10 (30%)
    backgroundColor: "#fff", // Tùy chỉnh màu nền cho Navbar
  },
  mainContent: {
    flex: 8.4, // Tỷ lệ 7/10 (70%)
    backgroundColor: "#f5f5f5", // Màu nền cho nội dung
    padding: 20, // Khoảng cách nội dung
  },
});
