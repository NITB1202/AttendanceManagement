import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SearchBarProps = {
  onSearch?: (query: string) => void; // Hàm callback khi thực hiện tìm kiếm
};

const SearchBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState<string>(""); // State cho từ khóa tìm kiếm
  const [isFocused, setIsFocused] = useState<boolean>(false); // State khi TextInput được focus

  // Hàm xử lý khi người dùng nhấn Enter
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focusedContainer, // Thêm viền đậm nếu focus
      ]}
    >
      <Ionicons name="search" size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search by..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={handleSearch}
        underlineColorAndroid="transparent" // Loại bỏ underline trên Android
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1, // Viền bên ngoài
    borderColor: "#ddd", // Màu viền nhạt
    borderRadius: 8, // Góc bo tròn
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "90%",
    backgroundColor: "#fff", // Nền trắng cho toàn bộ View
    maxWidth: "40%", // Giới hạn chiều rộng tối đa
  },
  focusedContainer: {
    borderColor: "#000", // Màu viền đậm khi focus
    borderWidth: 2,
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và TextInput
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 5, // Loại bỏ viền bên trong
    borderColor: "white", // Loại bỏ màu viền
  },
});

export default SearchBar;
