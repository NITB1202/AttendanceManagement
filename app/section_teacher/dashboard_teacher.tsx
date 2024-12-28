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

    const pieData1 = [
        {
            name: "Well",
            population: 3,
            color: "#EF1F1F",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
        {
            name: "Normal",
            population: 2,
            color: "#FFC038",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
        {
            name: "Not well",
            population: 2,
            color: "#6A9AB0",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
        {
            name: "Bad",
            population: 3,
            color: "#00B01A",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
    ];

    const pieData2 = [
        {
            name: "On-time",
            population: 5,
            color: "#EF1F1F",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
        {
            name: "Absence",
            population: 3,
            color: "#FFC038",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
        {
            name: "Late",
            population: 1,
            color: "#6A9AB0",
            legendFontColor: "#000",
            legendFontSize: 12,
        },
    ];

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
                            <View style={styles.infoContent}>
                                <Image
                                    source={require('../../assets/images/shape.png')}
                                    style={styles.infoImage}
                                />
                                <Text style={styles.infoNumber}>48</Text>
                            </View>
                        </View>
                        <View style={styles.infoBoxLarge}>
                            <Text style={styles.infoLabel}>The efficacy of the lesson</Text>
                            <View style={styles.infoContentLarge}></View>
                                <Image
                                    source={require('../../assets/images/trending-up.png')}
                                    style={styles.trendingUpImage}
                                />
                                <Text style={styles.trendingUpNumber}>72%</Text>
                        </View>
                    </View>
                    <View style={styles.pieChartContainer}>
                        <View style={styles.largeInfoBox}>
                            <View style={styles.halfBox}>
                                <Text style={styles.infoLabel}>Student's understanding level</Text>
                                <View style={styles.right}>
                                            <PieChart
                                              data={pieData1}
                                              width={screenWidth * 0.45} 
                                              height={220}
                                              chartConfig={{
                                                backgroundColor: "#fff",
                                                backgroundGradientFrom: "#fff",
                                                backgroundGradientTo: "#fff",
                                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                              }}
                                              accessor="population"
                                              backgroundColor="transparent"
                                              paddingLeft="15"
                                              absolute
                                            />
                                            {selectedSlice && (
                                              <View style={styles.tooltip}>
                                                <Text
                                                  style={{
                                                    color: pieData1.find((p) => p.name === selectedSlice.label)
                                                      ?.color,
                                                  }}
                                                >
                                                  {`${selectedSlice.label}: ${selectedSlice.value}`}
                                                </Text>
                                              </View>
                                            )}
                                          </View>
                            </View>
                            <View style={styles.halfBox}>
                                <Text style={styles.infoLabel}>Presence Rate</Text>
                                <PieChart
                                    data={pieData2}
                                    width={screenWidth * 0.45}
                                    height={220}
                                    chartConfig={{
                                        backgroundColor: "#fff",
                                        backgroundGradientFrom: "#fff",
                                        backgroundGradientTo: "#fff",
                                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    }}
                                    accessor="population"
                                    backgroundColor="transparent"
                                    paddingLeft="15"
                                    absolute
                                />
                            </View>
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
        alignItems: "center",
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
    infoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContentLarge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoImage: {
        width: 60,
        height: 60,
        marginRight: 10,
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
    trendingUpImage: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    trendingUpNumber: {
        fontSize: 72,
        fontWeight: 'bold',
        color: 'white',
    },
    pieChartContainer: {
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
        alignItems: 'center',
        height: 410,
        width: '96%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 100,
    },
    infoNumber: {
        fontSize: 64,
        fontWeight: 'bold',
        color: 'white',
    },
    right: {
        flex: 4,
        width: "100%",
        alignItems: "center", 
    },
    tooltip: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
});