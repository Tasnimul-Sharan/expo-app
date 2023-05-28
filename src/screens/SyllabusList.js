import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SyllabusList = ({ syllabusData }) => {
    return (
        <View style={styles.container}>
            {syllabusData?.map((subject) => (
                <View key={subject?.syllabusId} subject={subject}>
                    <Text>{subject.clasName} </Text>
                    <Text>{subject.title} </Text>
                    <Text>
                        <Link to={subject.attachment}>{subject.attachment}</Link>
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default SyllabusList;
