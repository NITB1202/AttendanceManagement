import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface QuestionBoxProps {
    avatar: string;
    name: string;
    timestamp: string;
    content: string;
    onCancel: () => void;
    onPost: () => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ avatar, name, timestamp, content, onCancel, onPost }) => {
    return (
        <View style={styles.replyBox}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.replyContent}>
                <View style={styles.header}>
                    <Text style={styles.replyName}>{name}</Text>
                    <Text style={styles.timestamp}>{timestamp}</Text>
                </View>
                <Text style={styles.replyText}>{content}</Text>
                <View style={styles.replyButtons}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.replyButton} onPress={onPost}>
                        <Text style={styles.replyButtonText}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    replyBox: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        width: '40%',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    replyContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    replyName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
    replyText: {
        fontSize: 14,
        marginTop: 5,
    },
    replyButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    cancelButton: {
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#d32f2f',
        borderRadius: 5,
    },
    cancelButtonText: {
        color: '#ffffff',
        fontSize: 14,
    },
    replyButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#00796b',
        borderRadius: 5,
    },
    replyButtonText: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default QuestionBox;