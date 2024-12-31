import {View, Text, Image, Pressable, StyleSheet, Modal} from "react-native";
import RoundedButton from "./RoundedButton";
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";

interface ErrorMesageProps{
    title: string;
    description: string;
    setOpen: (open:boolean) => void;
}

export default function ErrorMessage({title, description, setOpen}: ErrorMesageProps){
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular
    });

    if(!fontsLoaded) return null;

    return (
         <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={()=>setOpen(false)}>
            <View style={styles.shadow}>
                <View style={styles.messageContainer}>
                    <Pressable onPress={()=> setOpen(false)}>
                        <Image source={require("../assets/images/icon/close.png")}/>
                    </Pressable>
                    <View style={styles.titleContainer}>
                        <Image source={require("../assets/images/icon/error-icon.png")}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                    <RoundedButton
                        title="OK"
                        style={styles.button}
                        focusColor="#9E1111"
                        onPress={()=> setOpen(false)}>
                    </RoundedButton>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    shadow:{
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    messageContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 10,
        transform: [{ translateX: -75 }, { translateY: -75 }],
        backgroundColor: "white",
        borderRadius: 10,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        padding: 10,
        gap: 10,
        width: 375,
        display: "flex",
        alignItems: "flex-end",
    },
    titleContainer:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        width: "100%",
    },
    title:{
        fontFamily: "Roboto_700Bold",
        fontSize: 22,
    },
    description:{
        fontFamily: "Roboto_400Regular",
        fontSize: 14,
        width: "100%",
        paddingBottom: 10
    },
    button:{
        width: "100%",
        height: 34,
        backgroundColor: "#C71313",
    }
});