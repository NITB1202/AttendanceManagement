import {View, Text, Image} from "react-native";
import RoundedButton from "./RoundedButton";
import { useState } from "react";

interface ErrorMesageProps{
    title: string;
    description: string;
    setClose: (close:boolean) => void;
}

export default function ErrorMessage({title, description, setClose}: ErrorMesageProps){
    return (
        <View>
            <Image 
                source={require("../assets/images/icon/close.png")}>
            </Image>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <RoundedButton
                title="OK"
                onPress={()=> setClose(true)}>
            </RoundedButton>
        </View>
    );
}