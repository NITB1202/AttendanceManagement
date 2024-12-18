import { Text, View, TextInput, ViewStyle, StyleSheet } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Colors } from "../constants/Colors";

interface InputProps{
    title: string;
    placeHolder?: string;
    style?: ViewStyle
}
export default function Input({title,placeHolder,style}: InputProps){
    const [fontsLoaded] = useFonts({Roboto_400Regular});
    if(!fontsLoaded) return null;

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.inputContainer, style]}>
                <TextInput  style={styles.input}
                            placeholder={placeHolder}
                            placeholderTextColor={Colors.hint}></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: "center",
        alignContent: "flex-start",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.gray,
        padding: 10,
        width: "100%",
    },
    container:{
        alignContent: "flex-start",
        gap: 10
    },
    title:{
        fontFamily: "Roboto_400Regular",
        fontSize: 22
    },
    input:{
        fontFamily: "Roboto_400Regular",
        fontSize: 20,
        outlineColor: "transparent"
    }
});