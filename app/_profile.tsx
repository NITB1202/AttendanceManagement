import Layout from "@/component/Layout";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";

const ProfileScreen = () => {
  const [username, setUsername] = useState("Anna Maderlaise");
  const [fullName, setFullName] = useState("Anna Maderlaise");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs>(dayjs("1998-07-12")); // Sử dụng kiểu Dayjs
  const [phone, setPhone] = useState("0934567823");
  const [roleCode, setRoleCode] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s",
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../assets/images/icon/Avatar.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        {/* Form */}
        <Text style={styles.label}>User name</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter user name"
          placeholderTextColor={styles.placeholder.color}
        />

        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter full name"
          placeholderTextColor={styles.placeholder.color}
        />

        <View style={styles.row}>
          <View style={[styles.column, { marginRight: 10 }]}>
            <Text style={styles.label}>Date of birth</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={dateOfBirth.format("DD/MM/YYYY")} // Hiển thị ngày dạng chuỗi
                editable={false} // Không cho phép nhập
                placeholder="DD/MM/YYYY"
                placeholderTextColor={styles.placeholder.color}
              />
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Image
                  source={require("../assets/images/icon/Icon button.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            {showPicker && (
              <DateTimePicker
                mode="single"
                date={dateOfBirth.toDate()} // Chuyển đổi sang kiểu Date
                onChange={(params) => {
                  if (params.date) {
                    setDateOfBirth(dayjs(params.date)); // Cập nhật trạng thái
                    setShowPicker(false); // Đóng picker
                  }
                }}
              />
            )}
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              placeholderTextColor={styles.placeholder.color}
            />
          </View>
        </View>

        <Text style={styles.label}>Role code</Text>
        <TextInput
          style={styles.input}
          value={roleCode}
          onChangeText={setRoleCode}
          placeholder="Enter role code"
          placeholderTextColor={styles.placeholder.color}
        />

        <TouchableOpacity>
          <Text style={styles.resetPassword}>Reset password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 459,
    justifyContent: "center",
    alignSelf: "center",
  },
  avatarContainer: {
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  iconContainer: {
    bottom: 30,
    left: 40,
    borderRadius: 28,
    padding: 2,
    borderWidth: 0,
  },
  iconImage: {
    width: 38,
    height: 38,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  datePicker: {
    width: "100%", // Điều chỉnh kích thước cho phù hợp
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  placeholder: {
    color: "rgba(0, 0, 0, 0.3)",
  },
  resetPassword: {
    color: "#0900FF",
    textAlign: "left",
    marginBottom: 20,
    fontSize: 20,
    textDecorationLine: "underline",
  },
  saveButton: {
    backgroundColor: "#3A6D8C",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",

    gap: 30,
  },
  column: {
    flex: 1,
  },
  datePickerContainer: {
    width: "100%", // Áp dụng style ở đây
  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginBottom: 19,
  },
});

export default ProfileScreen;
