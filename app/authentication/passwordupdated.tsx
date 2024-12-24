import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundedButton from '@/component/RoundedButton';

interface PasswordUpdatedProps {
    onBackToLogin: () => void;
}

export default function PasswordUpdated({ onBackToLogin }: PasswordUpdatedProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partContainer}>
                <View style={styles.formContainer}>
                    <Image
                        source={require('../../assets/images/SuccessfulIcon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.header}>Password Updated</Text>
                    <Text style={styles.notice}>Your password has been changed successfully.</Text>
                    <Text style={styles.notice}>Use your new password to log in.</Text>
                    <RoundedButton title="RETURN" onPress={onBackToLogin} style={styles.button}></RoundedButton>
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
        gap: 10,
        width: 450,
        paddingBottom: 100,
        alignItems: 'center',
    },
    header: {
        fontFamily: "Roboto_700Bold",
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    notice: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 0,
    },
    button: {
        width: '100%',
        marginTop: 30,
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});