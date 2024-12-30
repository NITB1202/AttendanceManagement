import { useState } from "react";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch,
    Modal,
} from "react-native";
import Layout from "../../component/Layout";
import CommentBox from "../../component/CommentBox";
import Table from "@/component/Table";
import RoundedButton from "@/component/RoundedButton";

const ClassManagerDetail = () => {
    const [activeTab, setActiveTab] = useState('General');
    const [modalVisible, setModalVisible] = useState(false);
    const [newClassName, setNewClassName] = useState('');


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
        setModalVisible(true);
    };

    const handleSave = () => {
        console.log('New Class Name:', newClassName);
        setModalVisible(false);
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
                                    <View style={styles.textBox}>
                                        <Text style={styles.text}>T2102</Text>
                                    </View>
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
                                    <View style={styles.textBox}>
                                        <Text style={styles.text}>SV3340112</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.infoBox3}>
                                    <View style={styles.columnClassName}>
                                        <Text style={styles.labelClassName}>Start Date</Text>
                                    <View style={styles.textBoxDate}>
                                        <Text style={styles.text}>T2102</Text>
                                    </View>
                                    </View>
                                    <View style={styles.columnCourseName}>
                                        <Text style={styles.labelCourseName}>End Date</Text>
                                    <View style={styles.textBoxDate}>
                                        <Text style={styles.text}>T2102</Text>
                                    </View>
                                    </View>
                                <View style={styles.columnStartTime}>
                                    <Text style={styles.labelClassName}>Start Time</Text>
                                    <View style={styles.row}>
                                        <View style={styles.textBoxTime}>
                                            <Text style={styles.text}>T2102</Text>
                                        </View>
                                        <select style={styles.dropdownTime}>
                                            <option value="class1">AM</option>
                                            <option value="class2">PM</option>
                                        </select>
                                    </View>
                                </View>
                                <View style={styles.columnEndTime}>
                                    <Text style={styles.labelCourseName}>End Time</Text>
                                    <View style={styles.row}>
                                        <View style={styles.textBoxTime}>
                                            <Text style={styles.text}>T2102</Text>
                                        </View>
                                        <select style={styles.dropdownTime}>
                                            <option value="class1">AM</option>
                                            <option value="class2">PM</option>
                                        </select>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={styles.infoBox4}>
                                    <View style={styles.columnClassName}>
                                        <Text style={styles.labelClassName}>Maximun allowable late occurrences</Text>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>6</Text>
                                        </View>
                                    </View>
                                    <View style={styles.columnCourseName}>
                                        <Text style={styles.labelCourseName}>Maximun allowable absence occurrences</Text>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>4</Text>
                                        </View>
                                    </View>
                                    <View style={styles.columnCourseName}>
                                        <Text style={styles.labelCourseName}>Allowed Late Time (minute)</Text>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>05:00</Text>
                                        </View>
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
                            {/* Modal */}
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalView}>
                                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                            <Text style={styles.closeButtonText}>✕</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.modalText}>Select a student</Text>
                                        <Text style={styles.label}>Student Name</Text>
                                        <select style={styles.dropdownModal}>
                                            <option value="class1">Martin Blue</option>
                                            <option value="class2">Martin Gray</option>
                                        </select>
                                        <Text style={styles.label}>Student Code</Text>
                                        <View style={styles.textBoxCode}>
                                            <Text style={styles.text}></Text>
                                        </View>
                                        <RoundedButton
                                            title="CONFIRM"
                                            onPress={() => { }}
                                            style={styles.roundedButton}
                                            textStyle={styles.roundedButtonText}
                                        />
                                        
                                    </View>
                                </View>
                            </Modal>
                                
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
                                        <TouchableOpacity style={styles.moreRepliesButton}>
                                            <Text style={styles.moreRepliesText}>4 more replies</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    columnStartTime: {
        flex: 1,
        marginBottom: 10,
    },
    columnEndTime: {
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
        height: 40,
    },
    dropdownModal: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
    },
    dropdownTime: {
        width: '40%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        marginRight: 30,
    },
    textBox: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        height: 40,
    },
    textBoxDate: { 
        width: '65%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        height: 40,
    },
    textBoxTime: {
        width: '40%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        height: 40,
    },
    text: {
        fontSize: 16,
        flexDirection: 'row',
        flex: 1,
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
        width: '80%',
        padding: 10,
        marginHorizontal: -18,
        marginTop: -30,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    infoBox4: {
        width: '50%',
        padding: 10,
        marginHorizontal: -18,
        marginTop: -30,
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
        height: 400,
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
        paddingVertical: 5, 
        paddingHorizontal: 5, 
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 297,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        borderRadius: 15,
    },
    closeButtonText: {
        color: 'black',
        fontSize: 24,
    },
    roundedButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    roundedButton: {
        marginTop: 25,
        width: '100%',
        height: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    textBoxCode: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        height: 40,
    },
});

export default ClassManagerDetail;