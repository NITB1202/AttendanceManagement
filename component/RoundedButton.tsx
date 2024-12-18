import { TouchableHighlight, Text, GestureResponderEvent, StyleSheet, TextStyle, ViewStyle } from "react-native" 
import { Colors } from "../constants/Colors";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

interface RoundedButtonProps{
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function RoundedButton({title, onPress, style, textStyle} : RoundedButtonProps){
    const [fontsLoaded] = useFonts({Roboto_700Bold});
    if(!fontsLoaded) return null;
    
    return (
        <TouchableHighlight style={[styles.button, style]}
                            underlayColor={Colors.darkBlue} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding:10,
    },
    text:{
        fontFamily: "Roboto_700Bold",
        fontSize: 24,
        color: "white"
    }
});