import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Layout from "../../component/Layout"; // Import Layout component

const ClassStudent = () => {
  return (
    <Layout>
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabText}>General</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Session</Text>
          </TouchableOpacity>

          <ScrollView>
            {["14/05/2024", "21/05/2024", "28/05/2024"].map((date, index) => (
              <TouchableOpacity key={index} style={styles.dateItem}>
                <Text style={styles.dateText}>{date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Roll Caller Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Roll caller name:</Text> Jack Tarco
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Student code:</Text> SV23821749
            </Text>
          </View>

          {/* Attendance Status */}
          <View style={styles.attendanceContainer}>
            <Text style={styles.sectionTitle}>Student attendance status</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableCell, styles.headerCell]}>ORDER</Text>
                <Text style={[styles.tableCell, styles.headerCell]}>
                  STUDENT CODE
                </Text>
                <Text style={[styles.tableCell, styles.headerCell]}>
                  STUDENT NAME
                </Text>
                <Text style={[styles.tableCell, styles.headerCell]}>
                  ATTENDANCE STATUS
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1</Text>
                <Text style={styles.tableCell}>SV232348423</Text>
                <Text style={styles.tableCell}>Karma Sik</Text>
                <Text style={styles.tableCell}>On-time</Text>
              </View>
            </View>
          </View>

          {/* Discussion Section */}
          <View style={styles.discussionContainer}>
            <Text style={styles.sectionTitle}>Discussion</Text>
            <View style={styles.comment}>
              <Text style={styles.commentAuthor}>
                Anonymous <Text style={styles.commentDate}>01/01/2004</Text>
              </Text>
              <Text style={styles.commentText}>Hello!</Text>
              <TouchableOpacity style={styles.replyButton}>
                <Text style={styles.replyButtonText}>Reply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addNewContainer}>
              <TextInput
                placeholder="Write your question here..."
                style={styles.input}
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postButton}>
                  <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default ClassStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 120,
    backgroundColor: "#001F3F",
    padding: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  activeTab: {
    backgroundColor: "#3A6D8C",
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  dateItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  dateText: {
    color: "#fff",
    textAlign: "center",
  },
  mainContent: {
    flex: 1,
    padding: 10,
  },
  infoContainer: {
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  attendanceContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontSize: 14,
  },
  headerCell: {
    fontWeight: "bold",
  },
  discussionContainer: {
    marginTop: 20,
  },
  comment: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: "bold",
  },
  commentDate: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#555",
  },
  commentText: {
    fontSize: 14,
    marginVertical: 5,
  },
  replyButton: {
    backgroundColor: "#3A6D8C",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  replyButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  addNewContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
