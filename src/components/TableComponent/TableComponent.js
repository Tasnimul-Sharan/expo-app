// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";

// const TableComponent = () => {
//     const [tableData, setTableData] = useState([]);

//     // Simulated data loading
//     useEffect(() => {
//         // Fetch the table data from an API or AsyncStorage
//         // Example: Fetch data from an API endpoint
//         fetchTableData()
//             .then(data => setTableData(data))
//             .catch(error => console.error('Error fetching table data:', error));
//     }, []);

//     const fetchTableData = async () => {
//         // Simulated API call or data retrieval
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const data = [
//                     { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
//                     { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
//                     // Add more data rows as needed
//                 ];
//                 resolve(data);
//             }, 2000); // Simulated delay for demonstration purposes
//         });
//     };

//     return (
//         <View style={styles.tableContainer}>
//             <Text style={styles.tableHeading}>Table</Text>
//             <View style={styles.tableHeaderRow}>
//                 <Text style={styles.tableHeaderCell}>ID</Text>
//                 <Text style={styles.tableHeaderCell}>Name</Text>
//                 <Text style={styles.tableHeaderCell}>Age</Text>
//                 <Text style={styles.tableHeaderCell}>Email</Text>
//             </View>
//             {tableData.map(row => (
//                 <View key={row.id} style={styles.tableDataRow}>
//                     <Text style={styles.tableDataCell}>{row.id}</Text>
//                     <Text style={styles.tableDataCell}>{row.name}</Text>
//                     <Text style={styles.tableDataCell}>{row.age}</Text>
//                     <Text style={styles.tableDataCell}>{row.email}</Text>
//                 </View>
//             ))}
//             {tableData.length === 0 && <Text>No data available</Text>}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     tableContainer: {
//         marginTop: 10,
//         backgroundColor: '#fff',
//         padding: 10,
//         borderRadius: 10,
//         elevation: 5,
//     },
//     tableHeading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     tableHeaderRow: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         paddingBottom: 5,
//     },
//     tableHeaderCell: {
//         flex: 1,
//         fontWeight: 'bold',
//     },
//     tableDataRow: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         paddingBottom: 5,
//         paddingTop: 5,
//     },
//     tableDataCell: {
//         flex: 1,
//     },
// });

// export default TableComponent;

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";

// const TableComponent = () => {
//     const [tableData, setTableData] = useState([]);

//     useEffect(() => {
//         fetchTableData()
//             .then(data => setTableData(data))
//             .catch(error => console.error('Error fetching table data:', error));
//     }, []);

//     const fetchTableData = async () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const data = [
//                     { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
//                     { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
//                     // Add more data rows as needed
//                 ];
//                 resolve(data);
//             }, 2000);
//         });
//     };

//     return (
//         <View style={styles.tableContainer}>
//             <Text style={styles.tableHeading}>Table</Text>
//             <View style={styles.tableHeaderRow}>
//                 <Text style={styles.tableHeaderCell}>ID</Text>
//                 <Text style={styles.tableHeaderCell}>Name</Text>
//                 <Text style={styles.tableHeaderCell}>Age</Text>
//                 <Text style={styles.tableHeaderCell}>Email</Text>
//             </View>
//             {tableData.map(row => (
//                 <View key={row.id} style={styles.tableDataRow}>
//                     <Text style={styles.tableDataCell}>{row.id}</Text>
//                     <Text style={styles.tableDataCell}>{row.name}</Text>
//                     <Text style={styles.tableDataCell}>{row.age}</Text>
//                     <Text style={styles.tableDataCell}>{row.email}</Text>
//                 </View>
//             ))}
//             {tableData.length === 0 && <Text>No data available</Text>}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     tableContainer: {
//         marginTop: 10,
//         backgroundColor: '#fff',
//         padding: 10,
//         borderRadius: 10,
//         elevation: 5,
//     },
//     tableHeading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     tableHeaderRow: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         paddingBottom: 5,
//     },
//     tableHeaderCell: {
//         flex: 1,
//         fontWeight: 'bold',
//     },
//     tableDataRow: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         paddingBottom: 5,
//         paddingTop: 5,
//     },
//     tableDataCell: {
//         flex: 1,
//     },
// });

// export default TableComponent;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const TableComponent = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchTableData()
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching table data:', error));
    }, []);

    const fetchTableData = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = [
                    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
                    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
                    // Add more data rows as needed
                ];
                resolve(data);
            }, 2000);
        });
    };

    return (
        <View style={styles.tableContainer}>
            <Text style={styles.tableHeading}>Table</Text>
            <View style={styles.tableHeaderRow}>
                <Text style={styles.tableHeaderCell}>ID</Text>
                <Text style={styles.tableHeaderCell}>Name</Text>
                <Text style={styles.tableHeaderCell}>Age</Text>
                <Text style={styles.tableHeaderCell}>Email</Text>
            </View>
            {tableData.map(row => (
                <View key={row.id} style={styles.tableDataRow}>
                    <Text style={styles.tableDataCell}>{row.id}</Text>
                    <Text style={styles.tableDataCell}>{row.name}</Text>
                    <Text style={styles.tableDataCell}>{row.age}</Text>
                    <Text style={styles.tableDataCell}>{row.email}</Text>
                </View>
            ))}
            {tableData.length === 0 && <Text>No data available</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    tableHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tableHeaderRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    tableHeaderCell: {
        flex: 1,
        fontWeight: 'bold',
    },
    tableDataRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
        paddingTop: 5,
    },
    tableDataCell: {
        flex: 1,
    },
});

export default TableComponent;
