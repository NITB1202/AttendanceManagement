import React, { useState } from 'react';
import Input from "../../component/Input";
import RoundedButton from '@/component/RoundedButton';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ForgotPasswordProps {
    onBack: () => void;
    onVerification: () => void;
}

export default function ForgotPassword({ onBack, onVerification }: ForgotPasswordProps) {
    const [email, setEmail] = useState('');
    const { width } = Dimensions.get('window');
    const isMobileView = width < 480;
    const containerStyle = isMobileView ? [styles.partContainer, { flex: 1 }] : styles.partContainer;

    const handleContinue = async () => {
        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            const response = await fetch('https://your-api-endpoint.com/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            if (response.ok) {
                console.log("OTP sent successfully");
                onVerification();
            } else {
                console.log("Failed to send OTP");
                alert("Failed to send OTP");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.header}>Forgot Password</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.notice}>Please enter your email address. You will receive</Text>
                        <Text style={styles.notice}>4 digits code via email to reset your password</Text>
                        <Input title="Email" placeHolder="Enter your email..." value={email} onChangeText={setEmail} style={styles.input}></Input>
                        <RoundedButton title="CONTINUE" onPress={handleContinue} style={styles.input}></RoundedButton>
                    </View>                  
                </View>
            </View>
            {!isMobileView &&
                <View style={styles.partContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.formatImage} source={require('../../assets/images/ForgotPassword.png')} resizeMode="contain" />
                    </View>
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    partContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: "Roboto_700Bold",
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    notice: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20,
        color: "#959595",
        textAlign: 'left',
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    imageContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formatImage: {
        width: 480,
        height: 377,
    },
});