import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Sử dụng Ionicons cho biểu tượng

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Cụm góc phải */}
      <View style={styles.rightSection}>
        {/* Icon */}
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications-outline" size={24} color="#ffffff" />
        </TouchableOpacity>

        {/* Thông tin người dùng */}
        <View style={styles.userInfo}>
          <Text style={styles.userRole}>STUDENT</Text>
          <Text style={styles.userName}>Jame123</Text>
        </View>

        {/* Ảnh đại diện */}
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg", // Thay bằng ảnh đại diện thật
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", // Bố trí theo hàng ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    backgroundColor: "#FFFFFF", // Màu nền
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "flex-end", // Đẩy cụm sang bên phải
  },
  rightSection: {
    flexDirection: "row", // Đặt các thành phần trên cùng một hàng
    alignItems: "center", // Căn giữa theo chiều dọc
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và thông tin người dùng
    backgroundColor: "#6A9AB0", // Màu nền của hình tròn
    width: 40, // Kích thước hình tròn
    height: 40, // Kích thước hình tròn
    borderRadius: 20, // Bo tròn hoàn toàn (nửa chiều rộng/chiều cao)
    justifyContent: "center", // Căn giữa icon theo chiều dọc
    alignItems: "center", // Căn giữa icon theo chiều ngang
  },

  userInfo: {
    marginRight: 10, // Khoảng cách giữa thông tin người dùng và avatar
  },
  userRole: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.45)", // Màu đen với độ trong suốt 45%
    textAlign: "right",
  },

  userName: {
    fontSize: 16,
    color: "#000000",
    textAlign: "right",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // Hình tròn
  },
});

export default Header;
