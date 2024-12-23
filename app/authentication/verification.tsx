import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundedButton from '@/component/RoundedButton';

interface VerificationProps {
    onBack: () => void;
}

export default function Verification({ onBack }: VerificationProps) {
    const [code, setCode] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(120);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleResend = () => {
        // Logic để gửi lại mã xác thực
        console.log("Resend code");
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.header}>Verification</Text>
                    <Text style={styles.notice}>Please enter the 4-digit code that you receive on your email.</Text>
                    <View style={styles.codeContainer}>
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.codeInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                            />
                        ))}
                    </View>
                    <Text style={styles.timerText}>Time remaining: {formatTime(timer)}</Text>
                    <RoundedButton title="CONFIRM" onPress={() => { }} style={styles.input}></RoundedButton>
                    <View style={styles.resendContainer}>
                        <Text style={styles.resendText}>Didn't receive a code? </Text>
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendLink}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title="Back" onPress={onBack} />
                </View>
            </View>
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
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    notice: {
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#959595",
        textAlign: 'center',
        marginBottom: 10,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 5,
    },
    timerText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    resendText: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20,
        color: 'black',
    },
    resendLink: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});