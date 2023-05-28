
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Header from "../components/Header/Header";
import TableComponent from "../components/TableComponent/TableComponent";


const widgetsData = [
  { icon: 'calendar-outline', label: 'Attendance' },
  { icon: 'megaphone-outline', label: 'School Notice' },
  { icon: 'time-outline', label: 'Class Routine' },
  { icon: 'cash-outline', label: 'Payment History' },
  { icon: 'chatbubble-ellipses-outline', label: 'Feedback' },
  { icon: 'videocam-outline', label: 'Meeting Link', url: 'https://meet.google.com/your-meeting-link' },
  { icon: 'clipboard-outline', label: 'Leave' },
  { icon: 'globe-outline', label: 'Holidays' },
  { icon: 'information-circle-outline', label: 'Class Notice' },
  { icon: 'book-outline', label: 'Syllabus' },
  { icon: 'calendar-outline', label: 'Exam Routine' },
  { icon: 'people-outline', label: 'Counselling' },
];

const DashboardScreen = () => {
  // const [holidaysData, setHolidaysData] = useState([]);
  const navigation = useNavigation();

  const handleWidgetPress = (label, url) => {
    if (url) {
      Linking.openURL(url); // Open the provided URL
    }
    else if (label === "Holidays") {
      navigation.navigate("Holidays");
    }
    else {
      console.log('Widget label:', label);
    }
  };

  const renderWidget = ({ item }) => (
    <TouchableOpacity
      style={styles.widget}
      onPress={() => handleWidgetPress(item.label, item.url)}
    >
      <View style={styles.widgetContent}>
        <Ionicons name={item.icon} size={24} color="#FF7722" />
        <Text style={styles.widgetText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  const imageSource = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Image
          source={imageSource}
          resizeMode="contain"
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: "center",
          }}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={widgetsData}
          numColumns={4}
          renderItem={renderWidget}
          keyExtractor={(item, index) => index.toString()}
        />
        <TableComponent />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Chimbuk IT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 5,
  },
  widget: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widgetText: {
    fontSize: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  widgetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 16,
  },
});

export default DashboardScreen;
