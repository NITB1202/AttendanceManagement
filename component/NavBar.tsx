import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import { useAuth } from "@/context/AuthContext"; // Để lấy role từ AuthContext

// Định nghĩa các icon hợp lệ
type IoniconName =
  | "home-outline"
  | "book-outline"
  | "calendar-outline"
  | "clipboard-outline"
  | "person-outline"
  | "grid-outline"
  | "document-outline";

// Định nghĩa kiểu menu item
type MenuItem = { label: string; icon: IoniconName; path: string };

// Định nghĩa menu dựa trên role
const menuItemsByRole: Record<string, MenuItem[]> = {
  student: [
    {
      label: "Dashboard",
      icon: "home-outline",
      path: "/section_student/dashboard_student",
    },
    {
      label: "Class",
      icon: "book-outline",
      path: "/section_student/class_student",
    },
    { label: "Attendance", icon: "calendar-outline", path: "/" },
    {
      label: "RollCall",
      icon: "clipboard-outline",
      path: "/section_student/rollcall_student",
    },
  ],
  teacher: [
    {
      label: "Dashboard",
      icon: "home-outline",
      path: "/section_teacher/dashboard_teacher",
    },
    {
      label: "Class",
      icon: "book-outline",
      path: "/",
    },
    {
      label: "Attendance",
      icon: "calendar-outline",
      path: "/section_teacher/class_teacher",
    },
  ],
  manager: [
    {
      label: "Dashboard",
      icon: "home-outline",
      path: "/section_manager/dashboard_manager",
    },
    {
      label: "Account",
      icon: "person-outline",
      path: "/section_manager/account_manager",
    },
    {
      label: "Course",
      icon: "grid-outline",
      path: "/section_manager/course_manager",
    },
    {
      label: "Class",
      icon: "book-outline",
      path: "/section_manager/class_manager",
    },
    { label: "Attendance", icon: "calendar-outline", path: "/" },
    {
      label: "Report",
      icon: "document-outline",
      path: "/section_manager/report_manager",
    },
  ],
};

function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const { authState } = useAuth(); // Lấy thông tin role từ AuthContext
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Lấy menu dựa trên role của người dùng
  const role = authState.role || "student"; // Mặc định là student nếu không có role
  const currentMenuItems = menuItemsByRole[role];

  // Cập nhật trạng thái `activeItem` dựa trên đường dẫn hiện tại
  useEffect(() => {
    const active = currentMenuItems.find((item) =>
      pathname.includes(item.path)
    );
    setActiveItem(active ? active.label : null);
  }, [pathname, currentMenuItems]);
  const handlePress = (path: string) => {
    router.push(
      path as
        | `/section_student/dashboard_student`
        | `/section_student/class_student`
        | `/section_student/rollcall_student`
        | `/section_teacher/dashboard_teacher`
        | `/section_manager/dashboard_manager`
        | "/"
    );
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
        {currentMenuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={[
              styles.menuItem,
              activeItem === item.label && styles.activeMenuItem, // Áp dụng màu nền nếu được chọn
            ]}
            onPress={() => handlePress(item.path)} // Gọi hàm handlePress
          >
            <Ionicons name={item.icon} size={20} color="#ffffff" />
            <Text style={styles.menuText}>{item.label}</Text>
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
