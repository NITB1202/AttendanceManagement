import React, { useState } from 'react';
import Input from "../../component/Input";
import RoundedButton from '@/component/RoundedButton';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Verification from './verification';

interface ForgotPasswordProps {
    onBack: () => void;
}

export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
    const [showVerification, setShowVerification] = useState(false);

    const { width } = Dimensions.get('window');
    const isMobileView = width < 480;
    const containerStyle = isMobileView? [styles.partContainer, { flex: 1 }] : styles.partContainer;

    if (showVerification) {
        return <Verification onBack={() => setShowVerification(false)} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.header}>Forgot Password</Text>
                    <Text style={styles.notice}>Please enter your email address. You will receive</Text>
                    <Text style={styles.notice}>4 digits code via email to reset your password</Text>
                    <View style={styles.inputContainer}>
                        <Input title="Email" placeHolder="Enter your email..." style={styles.input}></Input>
                    </View>
                    <RoundedButton title="CONTINUE" onPress={() => setShowVerification(true)} style={styles.input}></RoundedButton>
                    <Button title="Back" onPress={onBack} />
                </View>
            </View>
            { !isMobileView && 
                    <View style={styles.partContainer}>
                      <View style={styles.imageContainer}>
                        <Image style={styles.formatImage} source={require('../../assets/images/ForgotPassword.png')} resizeMode="contain"></Image>
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
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    notice: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%', 
        paddingHorizontal: 0, 
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
        width: 400,
        height: 400,
    },
});