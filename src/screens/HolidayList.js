import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HolidayList = ({ data }) => {
    const renderHoliday = ({ item }) => {
 
        const formattedDate = new Date(item?.tillDate).toLocaleDateString([], {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
       
        return (
            <View style={styles.holidayItem}>
                <Text style={styles.holidayName}>{item?.holidayName}</Text>
                <Text style={styles.holidayDate}>{formattedDate}</Text>

            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Holidays</Text>
            <FlatList
                data={data}
                renderItem={renderHoliday}
                keyExtractor={(item) => item.holidayId.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listContainer: {
        flexGrow: 1,
    },
    holidayItem: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 5,
    },
    holidayDate: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    holidayName: {
        fontSize: 14,
    },
});

export default HolidayList;
