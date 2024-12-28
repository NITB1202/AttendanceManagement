import { useState } from "react";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch
} from "react-native";
import Layout from "../../component/Layout";
import CommentBox from "../../component/CommentBox";
import ReplyBox from "@/component/ReplyBox";
import QuestionBox from "@/component/QuestionBox";
import Table from "@/component/Table";

const ClassManagerDetail = () => {
    const [activeTab, setActiveTab] = useState('General');
    const [replyContent, setReplyContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const tableHeaderStudent = [
        "ORDER",
        "STUDENT CODE",
        "STUDENT NAME",
        "USERNAME",
    ];

    const tableDataStudent = [
        [
            "M120.P22",
            "MATH BASIC",
            "01/06/2024",
            "CAMLCUTE104",
        ],
    ];

    const tableHeaderAttendance = [
        "ORDER",
        "STUDENT CODE",
        "STUDENT NAME",
        "ATTENDANCE STATUS",
    ];

    const tableDataAttendance = [
        [
            "M120.P22",
            "MATH BASIC",
            "01/06/2024",
            "CAMLCUTE104",
        ],
    ];

    const tableHeaderDate = [
        "NO",
        "DATE",
    ];

    const tableDataDate = [
        [
            "1",
            "01/01/2025",
        ],
    ];

    const messages = [
        { id: 1, avatar: 'https://via.placeholder.com/50', name: 'Anonymous', content: 'Hello!', timestamp: '2023-01-01 10:00 AM' },
    ];

    return (
        <Layout>
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'General' && styles.activeTab]}
                        onPress={() => setActiveTab('General')}
                    >
                        <Text style={[styles.tabText, activeTab === 'General' && styles.activeTabText]}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Session' && styles.activeTab]}
                        onPress={() => setActiveTab('Session')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Session' && styles.activeTabText]}>Session</Text>
                    </TouchableOpacity>
                </View>
                {activeTab === 'General' ? (
                    <>
                        <Text style={styles.header1}>Class Information</Text>
                        <View style={styles.infoContainer}>
                            <View style={styles.column}>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Class Name:</Text>
                                    <Text style={styles.value1}>M501.P22</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Course Name:</Text>
                                    <Text style={styles.value1}>Math</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Teacher Name:</Text>
                                    <Text style={styles.value1}>Brion Anna</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Teacher Code:</Text>
                                    <Text style={styles.value1}>T2102</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Class's Monitor Name:</Text>
                                    <Text style={styles.value1}>Martin Cobe</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Student Code:</Text>
                                    <Text style={styles.value1}>SV4921412</Text>
                                </View>
                            </View>
                            <View style={styles.column}>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Start Date:</Text>
                                    <Text style={styles.value1}>01/01/2023</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>End Date:</Text>
                                    <Text style={styles.value1}>31/12/2023</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>Start Time:</Text>
                                    <Text style={styles.value1}>08:00 AM</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label1}>End Time:</Text>
                                    <Text style={styles.value1}>05:00 PM</Text>
                                </View>
                            </View>
                            <View style={[styles.column, styles.wideColumn]}>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label2}>Maximum allowable late occurrences:</Text>
                                    <Text style={styles.value2}>3</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label2}>Maximum allowable absence occurrences:</Text>
                                    <Text style={styles.value2}>5</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.label2}>Allowed late time:</Text>
                                    <Text style={styles.value2}>05:00</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.header2}>Student List</Text>
                        <View style={styles.tableContainer}>
                            <Table tableHeader={tableHeaderStudent} tableData={tableDataStudent} />
                        </View>
                    </>
                ) : (
                    <View style={styles.sessionContainer}>
                        <View style={styles.sessionContent}>
                            <View style={styles.tableTimeContainer}>
                                <View style={styles.tableContainer}>
                                    <Table tableHeader={tableHeaderDate} tableData={tableDataDate} />
                                </View>
                            </View>
                            <View style={styles.attendanceStatusContainer}>
                                <Text style={styles.label1}>Roll Caller Name:   Jack 97</Text>
                                <Text style={styles.label1}>Student Code:       SV23821749</Text>
                                <Text style={styles.attendanceStatusHeader}>Student Attendance Status</Text>
                                <View style={styles.tableContainerAttendance}>
                                    <View style={styles.tableContainer}>
                                        <Table tableHeader={tableHeaderAttendance} tableData={tableDataAttendance} />
                                    </View>
                                </View>
                                <Text style={styles.discussionHeader}>Discussion</Text>
                                <ScrollView style={styles.messageContainer}>
                                    <View style={styles.messageInnerContainer}>
                                        {messages.map((message) => (
                                            <CommentBox
                                                key={message.id}
                                                avatar={message.avatar}
                                                name={message.name}
                                                content={message.content}
                                                timestamp={message.timestamp}
                                                onReply={() => {/* Handle reply action */ }}
                                            />
                                        ))}
                                        {messages.map((message) => (
                                            <ReplyBox
                                                key={message.id}
                                                avatar={message.avatar}
                                                name={message.name}
                                                content={message.content}
                                                timestamp={message.timestamp}
                                                onReply={() => {/* Handle reply action */ }}
                                                onCancel={() => {/* Handle cancel action */ }}
                                            />
                                        ))}
                                    </View>
                                </ScrollView>
                                <View style={styles.addNewContainer}>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>Add New</Text>
                                    </TouchableOpacity>
                                    <QuestionBox
                                        avatar='https://via.placeholder.com/50'
                                        name='Your Name'
                                        content='Write your question here'
                                        timestamp='Just now'
                                        onCancel={() => {/* Handle cancel action */ }}
                                        onPost={() => {/* Handle post action */ }}
                                    />
                                    <View style={styles.anonymousToggleContainer}>
                                        <Text style={styles.anonymousLabel}>Anonymous</Text>
                                        <Switch
                                            value={isAnonymous}
                                            onValueChange={(value) => setIsAnonymous(value)}
                                            thumbColor={isAnonymous ? "#00796b" : "#f4f3f4"}
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginTop: -75,
        backgroundColor: '#001F3F',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 963,

    },
    tab: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 7,
    },
    activeTab: {
        backgroundColor: 'green',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    activeTabText: {
        color: '#FFFFFF',
    },
    header1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    header2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    infoContainer: {
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        marginRight: 20,
    },
    wideColumn: {
        flex: 2,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    label1: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    value1: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        textAlign: 'left',
    },
    label2: {
        fontSize: 16,
        color: '#333',
        flex: 2,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    value2: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        textAlign: 'left',
    },
    tableContainer: {
        marginTop: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
    },
    sessionContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    sessionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableTimeContainer: {
        width: '15%',
        alignSelf: 'flex-start',
        marginLeft: -20,
        marginTop: -30,
    },
    tableContainerSession: {
        marginTop: -20,
        width: '15%',
        alignSelf: 'flex-start',
        marginLeft: -20,

    },
    tableHeaderSession: {
        flexDirection: 'row',
        backgroundColor: "#3A6D8C",
        padding: 5,
    },
    tableHeaderTextSession: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#ffffff',
    },
    tableRowSession: {
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#3A6D8C",
    },
    tableCellSession: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        color: "#3A6D8C",
    },
    attendanceStatusContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 0,
        marginTop: -30,

    },
    attendanceStatusHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: -20,
        textAlign: 'left',
        marginTop: 10,
    },
    tableContainerAttendance: {
        marginTop: 10,
        width: '100%',
    },
    discussionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 15,
        textAlign: 'left',
    },
    messageContainer: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f0f0f0',
    },
    messageInnerContainer: {
        padding: 10,
    },
    addButtonContainer: {
        width: '10%',
        flex: 1,
    },
    addNewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    addButton: {
        marginTop: -75,
        paddingVertical: 5, // Giảm padding chiều dọc
        paddingHorizontal: 5, // Giảm padding chiều ngang
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 40,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    questionBox: {
        flex: 2,
        marginHorizontal: 10,
    },
    anonymousToggleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 80,
    },
    anonymousLabel: {
        fontSize: 14,
        marginRight: 10,
    },
});

export default ClassManagerDetail;