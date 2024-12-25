import React from "react";
import { Text, View, TextInput, ViewStyle, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Colors } from "../constants/Colors";

interface SearchBarProps {
  title: string;
  placeholder?: string;
  style?: ViewStyle;
  onSearch?: (query: string) => void; // Callback khi nhấn Enter
}

export default function SearchBar({
  placeholder = "Search...",
  style,
  onSearch,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [fontsLoaded] = useFonts({ Roboto_400Regular });

  if (!fontsLoaded) return null;

  const handleSearch = () => {
    if (onSearch) onSearch(searchTerm); // Gọi hàm callback khi nhấn Enter
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, style]}>
        <Ionicons
          name="search"
          size={20}
          color={Colors.gray}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.hint}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch} // Nhấn Enter để tìm kiếm
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    gap: 10,
    width: "40%",
  },
  title: {
    fontFamily: "Roboto_400Regular",
    fontSize: 22,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    outlineColor: "transparent", // Loại bỏ outline mặc định trên Web
  },
});
