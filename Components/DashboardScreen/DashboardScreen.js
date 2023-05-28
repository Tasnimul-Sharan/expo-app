// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import Header from "../components/Header/Header";

// const widgetsData = [
//   { icon: 'calendar-outline', label: 'Attendance' },
//   { icon: 'megaphone-outline', label: 'School Notice' },
//   { icon: 'time-outline', label: 'Class Routine' },
//   { icon: 'cash-outline', label: 'Payment History' },
//   { icon: 'chatbubble-ellipses-outline', label: 'Feedback' },
//   { icon: 'videocam-outline', label: 'Meeting Link' },
//   { icon: 'clipboard-outline', label: 'Leave' },
//   { icon: 'globe-outline', label: 'Holidays' },
//   { icon: 'information-circle-outline', label: 'Class Notice' },
//   { icon: 'book-outline', label: 'Syllabus' },
//   { icon: 'calendar-outline', label: 'Exam Routine' },
//   { icon: 'people-outline', label: 'Counselling' },
// ];


// const DashboardScreen = () => {

//   const renderWidget = ({ item }) => (
//     <View style={styles.widget}>
//       <Ionicons name={item.icon} size={24} color="#FF7722" />
//       <Text style={styles.widgetText}>{item.label}</Text>
//     </View>
//   );

//   // const navigation = useNavigation();

//   // const handleLogout = () => {

//   //   AsyncStorage.removeItem('accessToken')
//   //     .then(() => {
//   //       // Redirect to the login screen
//   //       navigation.navigate('Home');
//   //     })
//   //     .catch(error => {
//   //       console.error('Error while logging out:', error);
//   //     });
//   // };

//   const imageSource = require('../../assets/logo.png');

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.header}>
//         {/* <Text>Das</Text> */}
//         <Image source={imageSource} resizeMode="contain"
//           style={{
//             width: '70%',
//             display: 'flex',
//             justifyContent: "center",
//             // margin: 50,
//           }}
//         />
//         {/* <Button title="Logout" onPress={handleLogout} /> */}

//       </View>
//       <View style={styles.content}>
//         <FlatList
//           data={widgetsData}
//           numColumns={4}
//           renderItem={renderWidget}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Powerd by Chimbuk It</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//   },
//   header: {
//     height: 80,
//     backgroundColor: 'white',
//     // justifyContent: 'space-between',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     backgroundColor: 'white',
//     // fontSize: 20,
//     // fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//     // gap: 5,
//     padding: 5,
//   },
//   widget: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   widgetText: {
//     fontSize: 10,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default DashboardScreen;

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import Header from "../components/Header/Header";

// const widgetsData = [
//   { icon: 'calendar-outline', label: 'Attendance' },
//   { icon: 'megaphone-outline', label: 'School Notice' },
//   { icon: 'time-outline', label: 'Class Routine' },
//   { icon: 'cash-outline', label: 'Payment History' },
//   { icon: 'chatbubble-ellipses-outline', label: 'Feedback' },
//   { icon: 'videocam-outline', label: 'Meeting Link' },
//   { icon: 'clipboard-outline', label: 'Leave' },
//   { icon: 'globe-outline', label: 'Holidays' },
//   { icon: 'information-circle-outline', label: 'Class Notice' },
//   { icon: 'book-outline', label: 'Syllabus' },
//   { icon: 'calendar-outline', label: 'Exam Routine' },
//   { icon: 'people-outline', label: 'Counselling' },
// ];

// const DashboardScreen = () => {
//   const renderWidget = ({ item }) => (
//     <View style={styles.widget}>
//       <Ionicons name={item.icon} size={24} color="#FF7722" />
//       <Text style={styles.widgetText}>{item.label}</Text>
//     </View>
//   );

//   const navigation = useNavigation();

//   const handleLogout = () => {
//     AsyncStorage.removeItem('accessToken')
//       .then(() => {
//         // Redirect to the login screen
//         navigation.navigate('Home');
//       })
//       .catch(error => {
//         console.error('Error while logging out:', error);
//       });
//   };

//   const imageSource = require('../../assets/logo.png');

//   return (
//     <View style={styles.container}>
//       <Header/>
//       <View style={styles.header}>
//         <Image
//           source={imageSource}
//           resizeMode="contain"
//           style={{
//             width: '70%',
//             display: 'flex',
//             justifyContent: "center",
//           }}
//         />
//       </View>
// <View style={styles.tableContainer}>
//   <View style={styles.tableRow}>
//     {widgetsData.slice(0, 4).map((item, index) => (
//       <View key={index} style={styles.tableCell}>
//         <View style={styles.widget}>
//           <Ionicons name={item.icon} size={24} color="#FF7722" />
//           <Text style={styles.widgetText}>{item.label}</Text>
//         </View>
//       </View>
//     ))}
//   </View>
//   <View style={styles.tableRow}>
//     {widgetsData.slice(4, 8).map((item, index) => (
//       <View key={index} style={styles.tableCell}>
//         <View style={styles.widget}>
//           <Ionicons name={item.icon} size={24} color="#FF7722" />
//           <Text style={styles.widgetText}>{item.label}</Text>
//         </View>
//       </View>
//     ))}
//   </View>
//   <View style={styles.tableRow}>
//     {widgetsData.slice(8, 12).map((item, index) => (
//       <View key={index} style={styles.tableCell}>
//         <View style={styles.widget}>
//           <Ionicons name={item.icon} size={24} color="#FF7722" />
//           <Text style={styles.widgetText}>{item.label}</Text>
//         </View>
//       </View>
//     ))}
//   </View>
// </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Powered by Chimbuk IT</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//   },
//   header: {
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tableContainer: {
//     flex: 1,
//     padding: 5,
//     justifyContent: 'center',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tableCell: {
//     flex: 1,
//     paddingHorizontal: 5,
//   },
//   widget: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//   },
//   widgetText: {
//     fontSize: 10,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default DashboardScreen;


// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import Header from "../components/Header/Header";

// const widgetsData = [
//   { icon: 'calendar-outline', label: 'Attendance', data: 'Attendance data' },
//   { icon: 'megaphone-outline', label: 'School Notice', data: 'School Notice data' },
//   { icon: 'time-outline', label: 'Class Routine', data: 'Class Routine data' },
//   { icon: 'cash-outline', label: 'Payment History', data: 'Payment History data' },
//   { icon: 'chatbubble-ellipses-outline', label: 'Feedback', data: 'Feedback data' },
//   { icon: 'videocam-outline', label: 'Meeting Link', data: 'Meeting Link data' },
//   { icon: 'clipboard-outline', label: 'Leave', data: 'Leave data' },
//   { icon: 'globe-outline', label: 'Holidays', data: 'Holidays data' },
//   { icon: 'information-circle-outline', label: 'Class Notice', data: 'Class Notice data' },
//   { icon: 'book-outline', label: 'Syllabus', data: 'Syllabus data' },
//   { icon: 'calendar-outline', label: 'Exam Routine', data: 'Exam Routine data' },
//   { icon: 'people-outline', label: 'Counselling', data: 'Counselling data' },
// ];

// const DashboardScreen = () => {
//   const navigation = useNavigation();

//   const handleWidgetPress = (data) => {
//     // Perform actions when a widget is clicked, e.g., navigate to a new screen
//     console.log('Widget data:', data);
//   };

//   const renderWidget = ({ item }) => (
//     <TouchableOpacity onPress={() => handleWidgetPress(item.data)}>
//       <View style={styles.widget}>
//         <Ionicons name={item.icon} size={24} color="#FF7722" />
//         <Text style={styles.widgetText}>{item.label}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleLogout = () => {
//     AsyncStorage.removeItem('accessToken')
//       .then(() => {
//         // Redirect to the login screen
//         navigation.navigate('Home');
//       })
//       .catch(error => {
//         console.error('Error while logging out:', error);
//       });
//   };

//   const imageSource = require('../../assets/logo.png');

//   return (
//     <View style={styles.container}>
//       <Header/>
//       <View style={styles.header}>
//         <Image
//           source={imageSource}
//           resizeMode="contain"
//           style={{
//             width: '70%',
//             display: 'flex',
//             justifyContent: "center",
//           }}
//         />
//       </View>
//       <View style={styles.content}>
//         <FlatList
//           data={widgetsData}
//           numColumns={4}
//           renderItem={renderWidget}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Powered by Chimbuk IT</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//   },
//   header: {
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     flex: 1,
//     padding: 5,
//   },
//   widget: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   widgetText: {
//     fontSize: 10,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default DashboardScreen;



// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import Header from "../components/Header/Header";
// import TableComponent from "../components/TableComponent/TableComponent";
// // Import the table component

// const widgetsData = [
//   { icon: 'calendar-outline', label: 'Attendance' },
//   { icon: 'megaphone-outline', label: 'School Notice' },
//   { icon: 'time-outline', label: 'Class Routine' },
//   { icon: 'cash-outline', label: 'Payment History' },
//   { icon: 'chatbubble-ellipses-outline', label: 'Feedback' },
//   { icon: 'videocam-outline', label: 'Meeting Link' },
//   { icon: 'clipboard-outline', label: 'Leave' },
//   { icon: 'globe-outline', label: 'Holidays' },
//   { icon: 'information-circle-outline', label: 'Class Notice' },
//   { icon: 'book-outline', label: 'Syllabus' },
//   { icon: 'calendar-outline', label: 'Exam Routine' },
//   { icon: 'people-outline', label: 'Counselling' },
// ];

// const DashboardScreen = () => {


//   const handleWidgetPress = (label) => {
//     // Perform actions when a widget is clicked, e.g., navigate to a new screen
//     console.log('Widget label:', label);
//   };

//   const renderWidget = ({ item }) => (
//     <TouchableOpacity
//       style={styles.widget}
//       onPress={() => handleWidgetPress(item.label)}
//     >
//       <View style={styles.widgetContent}>
//         <Ionicons name={item.icon} size={24} color="#FF7722" />
//         <Text style={styles.widgetText}>{item.label}</Text>
//       </View>
//     </TouchableOpacity>
//   );


//   const imageSource = require('../../assets/logo.png');

//   return (
//     <View style={styles.container}>
//       <Header/>
//       <View style={styles.header}>
//         <Image
//           source={imageSource}
//           resizeMode="contain"
//           style={{
//             width: '70%',
//             display: 'flex',
//             justifyContent: "center",
//           }}
//         />
//       </View>
//       <View style={styles.content}>
//         <FlatList
//           data={widgetsData}
//           numColumns={4}
//           renderItem={renderWidget}
//           keyExtractor={(item, index) => index.toString()}
//         />
//         <TableComponent></TableComponent>
//         {/* // Render the table component below the widgets */}
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Powered by Chimbuk IT</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//   },
//   header: {
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     flex: 1,
//     padding: 5,
//   },
//   widget: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   widgetText: {
//     fontSize: 10,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   widgetContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default DashboardScreen;
 