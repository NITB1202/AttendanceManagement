import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    Image,
    Alert,
} from "react-native";
import Layout from "../../component/Layout"; // Đường dẫn tới Layout component
import { PieChart } from "react-native-chart-kit";
import Table from "@/component/Table";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function DashboardTeacher() {
    const [selectedSlice, setSelectedSlice] = useState<{
        label: string;
        value: number;
    } | null>(null);

    return (
        <Layout>
            <ScrollView contentContainerStyle={styles.dashboardContent}>
                <View style={styles.container}>
                    <View style={styles.dropdownRow}>
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownLabel}>Class</Text>
                            <select
                                style={styles.dropdownInput}
                                onChange={(e) => console.log(e.target.value)}
                            >
                                <option value="SE103.022">SE103.022</option>
                                <option value="SE104.023">SE104.023</option>
                                <option value="SE105.024">SE105.024</option>
                            </select>
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownLabel}>Session</Text>
                            <select
                                style={styles.dropdownInput}
                                onChange={(e) => console.log(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoBoxSmall}>
                            <Text style={styles.infoLabel}>Respond Received</Text>
                            <Text style={styles.infoNumber}>48</Text>
                        </View>
                        <View style={styles.infoBoxLarge}>
                            <Text style={styles.infoLabel}>The efficacy of the lesson</Text>
                            <Text style={styles.infoNumber}>72%</Text>
                        </View>
                    </View>
                    <View style={styles.piechartContainer}>
                        <View style={styles.largeInfoBox}>
                            <Text style={styles.infoLabel}>Additional Information</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    dashboardContent: {
        paddingTop: 20,
        backgroundColor: "#FFFFFF",
        width: "100%",
    },
    container: {
        paddingLeft: 20,
    },
    dropdownRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
    },
    dropdownContainer: {
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        width: "20%",
        
    },
    dropdownLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginRight: 10,
        fontFamily: "Roboto",
        marginLeft: 40,
    },
    dropdownInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
        width: "100%",
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        width: '50%',
    },
    infoBoxSmall: {
        flex: 1,
        backgroundColor: '#3A6D8C',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        height: 170,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    infoBoxLarge: {
        flex: 2,
        backgroundColor: '#00B01A',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        height: 170,
    },
    piechartContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    largeInfoBox: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        marginTop: 0,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        height: 410,
        width: '96%',
    },
    infoNumber: {
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white',
    },
});