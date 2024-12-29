import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedButton from "@/component/RoundedButton";
import { router } from "expo-router";
import NumberInput from "@/component/NumberInput";
import authAPI from "@/apis/authAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorMessage from "@/component/ErrorMessage";
import SuccessfulMessage from "@/component/SuccessfulMessage";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("error");
  const [content, setContent] = useState<{ title: string; description: string }>({
      title: '',
      description: '',
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          if (interval) clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleResend = async () => {
    const email = await AsyncStorage.getItem("email");
    if(email === null)
    {
      setShowPopup(true);
      setPopupType("error");
      setContent({
        title: "Error",
        description: "Unable to locate recovered email."
      });
    }
    else {
      try
      {
        await authAPI.sendCode(email);
        setShowPopup(true);
        setPopupType("success");
        setContent({
          title: "Send successfully",
          description: "The verification code has been resent to your email address."
        });
        setTimer(120);
      }
      catch(error)
      {
        setShowPopup(true);
        setPopupType("error");
        setContent({
          title: "Error",
          description: "An unexpected error has occurred."
        });
      }
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleConfirm = async () => {
    const email = await AsyncStorage.getItem("email");
    if(email === null)
    {
      setShowPopup(true);
      setPopupType("error")
      setContent({
        title: "Error",
        description: "Unable to locate recovered email."
      });
    }
    else
    {
      try{
        const response = await authAPI.verify(email, code.join(""));
        console.log(response);
        router.push("/authentication/resetpassword");
      }
      catch(error)
      {
        console.log(error);
        setShowPopup(true);
        setPopupType("error");
        setContent({
          title: "Verification failed",
          description: "Incorrect verification code. Please try again."
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.partContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>VERIFICATION</Text>
          <Text style={styles.notice}>
            Enter 4-digit code that you receive on your email.
          </Text>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <NumberInput
                key={"numInput-"+index}
                index={index}
                value= {digit}
                onChangeText={handleChange}>
              </NumberInput>
            ))}
          </View>
          <Text style={styles.timerText}> {formatTime(timer)}</Text>
          <RoundedButton
            title="CONFIRM"
            onPress={handleConfirm}
            style={styles.input}
          />
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive a code? </Text>
            <Pressable onPress={handleResend}>
              <Text style={styles.resendLink}>Resend</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {
        showPopup && popupType === "error" &&
            <ErrorMessage
              title={content.title}
              description={content.description}
              setOpen={setShowPopup}>
            </ErrorMessage>
      }
      {
        showPopup && popupType === "success" &&
            <SuccessfulMessage
              title={content.title}
              description={content.description}
              setOpen={setShowPopup}>
            </SuccessfulMessage>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  partContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    marginBottom: 40,
  },
  notice: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    gap: 30
  },
  codeInput: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: "#3A6D8C",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  timerText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    color: "black",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  resendText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 22,
    color: "black",
    marginBottom: 20,
  },
  resendLink: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    color: "#3A6D8C",
    marginBottom: 20,
  },
});
