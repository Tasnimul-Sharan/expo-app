import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HolidayList from "./HolidayList";
import axios from "axios";

const HolidaysScreen = () => {
    const [holidaysData, setHolidaysData] = useState([]);

    useEffect(() => {
        fetchHolidaysData();
    }, []);

    // const fetchHolidaysData = async () => {
    //     try {
    //         // Fetch the holidays data from an API or other data source
    //         const response = await fetch("https://gef.edumama.co/api/holidays/list");
    //         const data = await response.json();
    //         setHolidaysData(data);
    //         console.log(data)
    //     } catch (error) {
    //         console.log("Error fetching holidays data:", error);
    //     }
    // };

      const fetchHolidaysData = async () => {
        try {
          const response = await axios.get("https://gef.edumama.co/api/holidays/list");
          const data = response.data;
          setHolidaysData(data);
        } catch (error) {
          console.log("Error fetching holidays data:", error);
        }
      };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <HolidayList data={holidaysData} />
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
        backgroundColor: "#f1f1f1",
    },
    content: {
        flex: 1,
        padding: 10,
    },
    footer: {
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        color: "black",
        fontSize: 16,
    },
});

export default HolidaysScreen;
