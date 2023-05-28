// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// // import axios from "axios";
// import RNPickerSelect from "react-native-picker-select";
// import SyllabusList from "./SyllabusList";
// import { get } from "../hooks/apiUtils";
// import DropDownPicker from "react-native-dropdown-picker";
// import axios from "axios";

// const SyllabusScreen = ({ selectedStudent }) => {
//     const [syllabusData, setSyllabusData] = useState([]);
//     // const [selectedValue, setSelectedValue] = useState(null);

//     useEffect(() => {
//         // Fetch syllabus data for the selected student
//         const getSyllabusData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://gef.edumama.co/api/syllabus/guardian/${selectedStudent.studentId}`
//                 );
//                 setSyllabusData(response.data);
//             } catch (error) {
//                 console.log("Error fetching syllabus data:", error);
//             }
//         };

//         getSyllabusData();
//     }, [selectedStudent]);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Syllabus</Text>
//             <DropDownPicker
//                 // items={[
//                 //     // Customize the dropdown items based on your data
//                 //     { label: "Student 1", value: "student1" },
//                 //     { label: "Student 2", value: "student2" },
//                 //     // Add more items as needed
//                 // ]}
//                 defaultValue={syllabusData}
//                 placeholder="Select a student"
//                 containerStyle={styles.dropdownContainer}
//                 style={styles.dropdownStyle}
//                 itemStyle={styles.dropdownItem}
//                 dropDownStyle={styles.dropdown}
//                 onChangeItem={(item) => setSyllabusData(item?.clasName)}
//             />
//             <SyllabusList syllabusData={syllabusData} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//     },
//     dropdownContainer: {
//         height: 40,
//         marginBottom: 20,
//     },
//     dropdownStyle: {
//         backgroundColor: "#fafafa",
//     },
//     dropdownItem: {
//         justifyContent: "flex-start",
//     },
//     dropdown: {
//         backgroundColor: "#fafafa",
//     },
// });

// export default SyllabusScreen

// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
// import SyllabusList from "./SyllabusList";
// import axios from "axios";

// const SyllabusScreen = ({ selectedStudent }) => {
//   const [syllabusData, setSyllabusData] = useState([]);

//   const fetchSyllabusData = async (studentId) => {
//     try {
//       const response = await axios.get(
//         `https://gef.edumama.co/api/syllabus/guardian/${studentId}`
//       );
//       setSyllabusData(response.data);
//     } catch (error) {
//       console.log("Error fetching syllabus data:", error);
//     }
//   };

//   const handleStudentChange = (studentId) => {
//     fetchSyllabusData(studentId);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Syllabus</Text>
//       <DropDownPicker
//         items={[
//           // Customize the dropdown items based on your data
//           { label: "Student 1", value: "student1" },
//           { label: "Student 2", value: "student2" },
//           // Add more items as needed
//         ]}
//         defaultValue={selectedStudent?.studentId}
//         placeholder="Select a student"
//         containerStyle={styles.dropdownContainer}
//         style={styles.dropdownStyle}
//         itemStyle={styles.dropdownItem}
//         dropDownStyle={styles.dropdown}
//         onChangeItem={(item) => handleStudentChange(item.clasName)}
//       />
//       <SyllabusList syllabusData={syllabusData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   dropdownContainer: {
//     height: 40,
//     marginBottom: 20,
//   },
//   dropdownStyle: {
//     backgroundColor: "#fafafa",
//   },
//   dropdownItem: {
//     justifyContent: "flex-start",
//   },
//   dropdown: {
//     backgroundColor: "#fafafa",
//   },
// });

// export default SyllabusScreen;

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
// import SyllabusList from "./SyllabusList";
// import axios from "axios";

// const SyllabusScreen = ({ selectedStudent }) => {
//     const [studentList, setStudentList] = useState([]);
//     const [syllabusData, setSyllabusData] = useState([]);

//     useEffect(() => {
//         fetchStudentList();
//     }, []);

//     const fetchStudentList = async () => {
//             try {
//                 const response = await axios.get("https://gef.edumama.co/api/syllabus/guardian");
//                 setStudentList(response.data);
//             } catch (error) {
//                 console.log("Error fetching student list:", error);
//             }
//         };
//         const fetchSyllabusData = async (studentId) => {
//             try {
//                 const response = await axios.get(
//                     `https://gef.edumama.co/api/syllabus/guardian/${studentId}`
//                 );
//                 setSyllabusData(response.data);
//             } catch (error) {
//                 console.log("Error fetching syllabus data:", error);
//             }
//         };

//         const handleStudentChange = (studentId) => {
//             fetchSyllabusData(studentId);
//         };

//         return (
//             <View style={styles.container}>
//                 <Text style={styles.title}>Syllabus</Text>
//                 <DropDownPicker
//                     items={studentList?.map((student) => ({
//                         label: student?.clasName,
//                         value: student?.syllabusId,
//                     }))}
//                     defaultValue={selectedStudent?.studentId}
//                     placeholder="Select a student"
//                     containerStyle={styles.dropdownContainer}
//                     style={styles.dropdownStyle}
//                     itemStyle={styles.dropdownItem}
//                     dropDownStyle={styles.dropdown}
//                     onChangeItem={(item) => handleStudentChange(item.value)}
//                 />
//                 <SyllabusList syllabusData={syllabusData} />
//             </View>
//         );
//     };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//     },
//     dropdownContainer: {
//         height: 40,
//         marginBottom: 20,
//     },
//     dropdownStyle: {
//         backgroundColor: "#fafafa",
//     },
//     dropdownItem: {
//         justifyContent: "flex-start",
//     },
//     dropdown: {
//         backgroundColor: "#fafafa",
//     },
// });

// export default SyllabusScreen

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import SyllabusList from "./SyllabusList";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "../hooks/apiUtils";

const SyllabusScreen = ({ selectedStudent }) => {
    const [syllabusData, setSyllabusData] = useState([]);

    useEffect(() => {
        fetchSyllabusData();
    }, []);

    const fetchSyllabusData = async (studentId) => {
        try {
            // const accessToken = await AsyncStorage.getItem("accessToken");
            const response = await get(`/syllabus/guardian/${studentId}`);
            setSyllabusData(response.data);
        } catch (error) {
            console.log("Error fetching syllabus data:", error);
        }
    };

    const handleStudentChange = () => {
        fetchSyllabusData(selectedStudent);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Syllabus</Text>
            <DropDownPicker
                items={syllabusData.map((student) => ({
                    label: student.clasName,
                    value: student.studentId,
                }))}
                defaultValue={selectedStudent?.studentId}
                placeholder="Select a student"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdownStyle}
                itemStyle={styles.dropdownItem}
                dropDownStyle={styles.dropdown}
                onChangeItem={(item) => handleStudentChange(item.value)}
            />
            <SyllabusList syllabusData={syllabusData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    dropdownContainer: {
        height: 40,
        marginBottom: 20,
    },
    dropdownStyle: {
        backgroundColor: "#fafafa",
    },
    dropdownItem: {
        justifyContent: "flex-start",
    },
    dropdown: {
        backgroundColor: "#fafafa",
    },
});

export default SyllabusScreen;
