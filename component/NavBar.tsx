import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const [activeItem, setActiveItem] = useState<string | null>(null); // Không mặc định mục nào được chọn

  // Cập nhật trạng thái `activeItem` dựa trên đường dẫn hiện tại
  useEffect(() => {
    if (pathname.includes("dashboard_student")) {
      setActiveItem("Dashboard");
    } else if (pathname.includes("class_student")) {
      setActiveItem("Class");
    } else if (pathname.includes("attendance")) {
      setActiveItem("Attendance");
    } else if (pathname.includes("roll_call")) {
      setActiveItem("RollCall");
    } else {
      setActiveItem(null); // Nếu không khớp đường dẫn nào
    }
  }, [pathname]);

  const handlePress = (item: string) => {
    setActiveItem(item); // Cập nhật trạng thái activeItem

    // Điều hướng tới các đường dẫn khác nhau dựa trên item
    switch (item) {
      case "Dashboard":
        router.push("/section_student/dashboard_student");
        break;
      case "Class":
        router.push("/section_student/class_student");
        break;
      case "Attendance":
        router.push("/");
        break;
      case "RollCall":
        router.push("/");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <View style={styles.navbarContainer}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        {["Dashboard", "Class", "Attendance", "RollCall"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.menuItem,
              activeItem === item && styles.activeMenuItem, // Áp dụng màu nền nếu được chọn
            ]}
            onPress={() => handlePress(item)} // Gọi hàm handlePress
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
        ))}
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
    marginLeft: 10,
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
    backgroundColor: "transparent", // Màu nền mặc định
  },
  activeMenuItem: {
    backgroundColor: "#3A6D8C", // Màu nền khi được chọn
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
    backgroundColor: "#d9534f",
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Navbar;
