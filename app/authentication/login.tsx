import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../component/Input";
import PasswordInput from "../../component/PasswordInput";
import RoundedButton from "../../component/RoundedButton";
import CheckBox from "../../component/CheckBox";
import { useAuth } from "../../context/AuthContext";
import { Role } from '@/enum/RoleEnum';
import ErrorMessage from "@/component/ErrorMessage";
import validateEmail from "@/util/validEmail";

export default function Login() {
  const {onLogin} = useAuth();
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });


  if (!fontsLoaded) return null;  

  const handleLogin = async () => {
    if(email === "")
    {
      setShowError(true);
      setError({title: "Invalid username", description: "Email is empty."});
      return;
    }

    if(password === "")
    {
      setShowError(true);
      setError({title: "Invalid password", description: "Password is empty."});
      return;
    }

    if(!validateEmail(email))
    {
      setShowError(true);
      setError({title: "Invalid email", description: "Invalid email format"});
      return;
    }

    const authState = await onLogin(email, password, remember);

    if (authState.authenticated) {
      if (authState.role === Role.MANAGER) {
        router.push("/section_manager/dashboard_manager");
      } else if (authState.role === Role.TEACHER) {
        router.push("/section_teacher/dashboard_teacher");
      } else if (authState.role === Role.STUDENT) {
        router.push("/section_student/dashboard_student");
      } else {
        console.error("Unknown role detected.");
      }
    } else {
      setShowError(true);
      setError({title: "Unrecognized account", description: "Email or password is incorrect."})
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>SIGN IN</Text>
          <View style={styles.inputContainer}>
            <Input 
              title="Email" 
              placeHolder="Enter your email..."  
              onChangeText={setEmail}/>
            <PasswordInput
              title="Password"
              placeHolder="Enter your password..."
              onChangeText={setPassword}/>
            <View style={styles.bottom}>
              <View style={styles.checkBoxContainer}>
                <CheckBox onPress={() => {setRemember(!remember)}}></CheckBox>
                <Text style={styles.text}>Remember me</Text>
              </View>
              <Pressable
                onPress={() => {
                  router.push("/authentication/forgotpassword");
                }}
              >
                <Text style={styles.highlight}>Forgot password?</Text>
              </Pressable>
            </View>
          </View>
          <RoundedButton
            title="SIGN IN"
            onPress={handleLogin}
          />
        </View>
      </View>
      <View style={styles.partContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.formatImage}
            source={require("../../assets/images/Login.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      {
        showError &&
        <ErrorMessage
          title={error.title}
          description={error.description}
          setOpen={setShowError}>
        </ErrorMessage>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    textAlign: "center",
  },
  inputContainer: {
    gap: 15,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
  },
  formContainer: {
    gap: 40,
    width: "80%",
    maxWidth: 400,
    paddingBottom: 100,
  },
  highlight: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: Colors.primary,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formatImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
  },
});
