import { TouchableHighlight, Text, GestureResponderEvent, StyleSheet, TextStyle, ViewStyle, View } from "react-native" 
import { Colors } from "../constants/Colors";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

interface RoundedButtonProps{
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    focusColor?: string;
    icon?: React.ReactNode;
}

export default function RoundedButton({title, onPress, style, textStyle, icon, focusColor = Colors.darkBlue} : RoundedButtonProps){
    const [fontsLoaded] = useFonts({Roboto_700Bold});
    if(!fontsLoaded) return null;
    
    return (
        <TouchableHighlight style={[styles.button, style]}
                            underlayColor={focusColor} onPress={onPress}>
        <View style={styles.infoContainer}>
            {icon}
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    text:{
        fontFamily: "Roboto_700Bold",
        fontSize: 24,
        color: "white"
    },
    infoContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 5,
    }
});