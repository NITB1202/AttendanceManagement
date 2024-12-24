import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundedButton from '@/component/RoundedButton';
import PasswordInput from '@/component/PasswordInput';

interface ResetPasswordProps {
    onBack: () => void;
    onPasswordUpdated: () => void;
}

export default function ResetPassword({ onBack, onPasswordUpdated }: ResetPasswordProps) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        console.log("Password reset");
        onPasswordUpdated();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partContainer}>
                <Text style={styles.header}>Reset Password</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.notice}>Create a new password for your account</Text>
                    <PasswordInput title="New password" placeHolder="Enter your new password..."></PasswordInput>
                    <PasswordInput title="Confirm new password" placeHolder="Enter your new password..."></PasswordInput>
                    <RoundedButton title="CONFIRM" onPress={handleResetPassword} ></RoundedButton>
                </View>
                <Button title="Back" onPress={onBack} />
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
        gap: 15,
        width: 400,
        paddingBottom: 100
    },
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
        textAlign: 'center',
    },
    notice: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'left',
        marginBottom: 0,
    },
});