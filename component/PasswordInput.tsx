import { Text, View, TextInput, ViewStyle, StyleSheet, TouchableHighlight } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import { Colors } from "../constants/Colors";

interface PasswordInputProps{
    title: string;
    placeHolder?: string;
}

export default function PasswordInput({title, placeHolder} : PasswordInputProps){
    const [fontsLoaded] = useFonts({Roboto_400Regular});
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput  style={styles.input}
                            placeholder={placeHolder}
                            secureTextEntry={!isPasswordVisible}
                            placeholderTextColor={Colors.hint}>
                </TextInput>
                <TouchableHighlight underlayColor="transparent"
                                    onPress={()=> setPasswordVisible(!isPasswordVisible)}>
                    {isPasswordVisible? <FontAwesome name="eye-slash" size={24} color={Colors.primary}></FontAwesome> :
                                        <FontAwesome name="eye" size={24} color={Colors.primary}></FontAwesome>}
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontFamily: "Roboto_400Regular",
        fontSize: 22
    },
    input:{
        fontFamily: "Roboto_400Regular",
        fontSize: 20,
        outlineColor: "transparent",
        width: "100%"
    },
    container:{
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        gap: 10
    }
});