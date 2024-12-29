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

const ClassTeacherDetail = () => {
    const [activeTab, setActiveTab] = useState('General');
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

    const handleUploadExcel = () => {
        console.log('Upload Excel File button clicked');
    };

    const handleAddNew = () => {
        console.log('Add New button clicked');
    };

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
                            <View style={styles.infoBox1}>
                                <View style={styles.columnClassName}>
                                    <Text style={styles.labelClassName}>Class Name</Text>
                                    <select style={styles.dropdown}>
                                        <option value="class1">Class 1</option>
                                        <option value="class2">Class 2</option>
                                        <option value="class3">Class 3</option>
                                    </select>
                                </View>
                                <View style={styles.columnCourseName}>
                                    <Text style={styles.labelCourseName}>Course Name</Text>
                                    <select style={styles.dropdown}>
                                        <option value="course1">Math</option>
                                        <option value="course2">Physics</option>
                                        <option value="course3">Chemistry</option>
                                    </select>
                                </View>
                            </View>
                            <View style={styles.infoBox2}>
                                <View style={styles.columnClassName}>
                                    <Text style={styles.labelClassName}>Teacher Name</Text>
                                    <select style={styles.dropdown}>
                                        <option value="class1">Brion Anna</option>
                                        <option value="class2">Lionel Messi</option>
                                        <option value="class3">Luis Suarez</option>
                                    </select>
                                </View>
                                <View style={styles.columnCourseName}>
                                    <Text style={styles.labelCourseName}>Teacher Code</Text>
                                    <select style={styles.dropdown}>

                                    </select>
                                </View>
                                <View style={styles.columnClassName}>
                                    <Text style={styles.labelClassName}>Class Monitor's Name</Text>
                                    <select style={styles.dropdown}>
                                        <option value="class1">Class 1</option>
                                        <option value="class2">Class 2</option>
                                        <option value="class3">Class 3</option>
                                    </select>
                                </View>
                                <View style={styles.columnCourseName}>
                                    <Text style={styles.labelCourseName}>Student Code</Text>
                                    <select style={styles.dropdown}>

                                    </select>
                                </View>
                            </View>
                            <View style={styles.infoBox3}>
                                <View style={styles.infoBox1}>
                                    <View style={styles.columnClassName}>
                                        <Text style={styles.labelClassName}>Class Name</Text>
                                        <select style={styles.dropdown}>
                                            <option value="class1">Class 1</option>
                                            <option value="class2">Class 2</option>
                                            <option value="class3">Class 3</option>
                                        </select>
                                    </View>
                                    <View style={styles.columnCourseName}>
                                        <Text style={styles.labelCourseName}>Course Name</Text>
                                        <select style={styles.dropdown}>
                                            <option value="course1">Math</option>
                                            <option value="course2">Physics</option>
                                            <option value="course3">Chemistry</option>
                                        </select>
                                    </View>
                                    <View style={styles.columnClassName}>
                                        <Text style={styles.labelClassName}>Class Name</Text>
                                        <select style={styles.dropdown}>
                                            <option value="class1">Class 1</option>
                                            <option value="class2">Class 2</option>
                                            <option value="class3">Class 3</option>
                                        </select>
                                    </View>
                                    <View style={styles.columnCourseName}>
                                        <Text style={styles.labelCourseName}>Course Name</Text>
                                        <select style={styles.dropdown}>
                                            <option value="course1">Math</option>
                                            <option value="course2">Physics</option>
                                            <option value="course3">Chemistry</option>
                                        </select>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.infoBox4}>
                                <View style={styles.columnClassName}>
                                    <Text style={styles.labelClassName}>Maximun allowable late occurrences</Text>
                                    <select style={styles.dropdown}>
                                        <option value="class1">Class 1</option>
                                        <option value="class2">Class 2</option>
                                        <option value="class3">Class 3</option>
                                    </select>
                                </View>
                                <View style={styles.columnCourseName}>
                                    <Text style={styles.labelCourseName}>Maximun allowable absence occurrences</Text>
                                    <select style={styles.dropdown}>
                                        <option value="course1">Math</option>
                                        <option value="course2">Physics</option>
                                        <option value="course3">Chemistry</option>
                                    </select>
                                </View>
                                <View style={styles.columnCourseName}>
                                    <Text style={styles.labelCourseName}>Maximun allowable absence occurrences</Text>
                                    <select style={styles.dropdown}>
                                        <option value="course1">Math</option>
                                        <option value="course2">Physics</option>
                                        <option value="course3">Chemistry</option>
                                    </select>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.header2}>Student List</Text>
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity style={styles.button1} onPress={handleUploadExcel}>
                                <Text style={styles.buttonText}>Upload Excel File</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2} onPress={handleAddNew}>
                                <Text style={styles.buttonText}>Add New</Text>
                            </TouchableOpacity>
                        </View>
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
                                        <TouchableOpacity style={styles.moreRepliesButton}>
                                            <Text style={styles.moreRepliesText}>4 more replies</Text>
                                        </TouchableOpacity>
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
        padding: 20,
    },
    infoBox1: {
        width: '60%',
        padding: 10,
        marginHorizontal: -18,
        marginTop: -20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    columnClassName: {
        flex: 1,
        marginBottom: 10,
    },
    labelClassName: {
        fontSize: 16,
        marginBottom: 5,
    },
    labelCourseName: {
        fontSize: 16,
        marginBottom: 5,
    },
    columnCourseName: {
        flex: 1,
        marginBottom: 10,
    },
    dropdown: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    infoBox2: {
        width: '100%',
        padding: 10,
        marginHorizontal: -18,
        marginTop: -30,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    infoBox3: {
        width: '140%',
        padding: 10,
        marginHorizontal: -10,
        marginTop: -20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    infoBox4: {
        width: '50%',
        padding: 10,
        marginHorizontal: -18,
        marginTop: -40,
        justifyContent: 'flex-start',
        flexDirection: 'row',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: -30,
    },
    infoContainer: {
        padding: 10,
        flexDirection: 'column',

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
        marginTop: 65,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    messageContainer: {
        marginTop: 10,
        height: 300,
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
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    button1: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 10,
    },
    button2: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    moreRepliesButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#6A9AB0',
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    moreRepliesText: {
        fontSize: 14,
        color: '#3a6d8c',
    },
});

export default ClassTeacherDetail;