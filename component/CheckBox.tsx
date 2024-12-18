import { TouchableHighlight, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";

interface CheckBoxProps{
    onPress: (isChecked : boolean) => void
}

export default function CheckBox({ onPress }: CheckBoxProps){
    const [state,setState] = useState(false);

    return (
        <TouchableHighlight style={styles.box}
                            underlayColor="transparent"
                            onPress={()=> {
                                setState(!state);
                                onPress(state);
                            }}>
            {state ?    <View style={styles.check}></View> :
                        <View style={[styles.check, {backgroundColor: "transparent"}]}></View>}
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    box:{
        borderColor: Colors.darkBlue,
        borderWidth: 2,
        borderRadius: 5,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    check:{
        backgroundColor: Colors.primary,
        borderRadius: 2,
        width: 14,
        height: 14
    }
});