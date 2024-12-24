import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../component/NavBar"; // Đường dẫn tới Navbar component
import Header from "../component/Header"; // Thêm Header component

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Mặc định Navbar hiển thị
  const { width } = Dimensions.get("window");
  const isMobileView = width < 480; // Kiểm tra nếu là màn hình nhỏ

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev); // Đảo trạng thái hiển thị Navbar
  };

  return (
    <View style={styles.container}>
      {/* Nút Menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={toggleNavbar}>
        <Ionicons
          name={isNavbarVisible ? "close-outline" : "menu-outline"} // Thay đổi icon
          size={30}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Navbar (hiển thị hoặc ẩn dựa trên state isNavbarVisible) */}
      {isNavbarVisible && (
        <View
          style={[
            styles.navbar,
            isMobileView ? styles.navbarMobile : {}, // Áp dụng kiểu dành cho điện thoại
          ]}
        >
          <Navbar />
        </View>
      )}

      {/* Main Content */}
      <View
        style={[
          styles.mainContent,
          isMobileView && isNavbarVisible && styles.mainContentOverlay, // Làm mờ main content khi navbar hiện
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
    top: 10,
    left: 10,
    zIndex: 30, // Đảm bảo nút menu luôn hiển thị trên cùng
    backgroundColor: "#001F3F",
    borderRadius: 10,
    padding: 2,
  },
  navbar: {
    paddingTop: 30,
    flex: 1.7,
    backgroundColor: "#001f3f",
  },
  navbarMobile: {
    position: "absolute",
    width: "70%", // Chiều rộng chiếm 70% màn hình điện thoại
    height: "100%", // Chiều cao toàn màn hình
    zIndex: 20, // Đè lên Main Content
    backgroundColor: "#001F3F",
  },
  mainContent: {
    flex: 8.3,
    backgroundColor: "#FFFFFF",
  },
  mainContentOverlay: {
    opacity: 0.5, // Làm mờ Main Content khi Navbar hiển thị trên mobile
  },
  content: {
    flex: 1,
    padding: 10, // Nội dung nằm dưới Header
    paddingLeft: 20,
  },
});
