import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface CommentBoxProps {
    avatar: string;
    name: string;
    content: string;
    timestamp: string;
    onReply: () => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ avatar, name, content, timestamp, onReply }) => {
    return (
        <View style={styles.commentBox}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.commentContent}>
                <View style={styles.header}>
                    <Text style={styles.commentName}>{name}</Text>
                    <Text style={styles.timestamp}>{timestamp}</Text>
                </View>
                <Text style={styles.commentText}>{content}</Text>
                <TouchableOpacity style={styles.replyButton} onPress={onReply}>
                    <Text style={styles.replyButtonText}>Reply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentBox: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        width: '40%',
        alignSelf: 'flex-start',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    commentContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
    commentText: {
        fontSize: 14,
        marginTop: 5,
    },
    replyButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
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

export default CommentBox;