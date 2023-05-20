import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashboardScreen = () => {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.header}>
  //         <Text style={styles.headerText}>Dashboard</Text>
  //       </View>
  //       <View style={styles.content}>
  //         <View style={styles.statsContainer}>
  //           <View style={styles.statItem}>
  //             <Text style={styles.statValue}>2,345</Text>
  //             <Text style={styles.statLabel}>Total Orders</Text>
  //           </View>
  //           <View style={styles.statItem}>
  //             <Text style={styles.statValue}>1,234</Text>
  //             <Text style={styles.statLabel}>Revenue</Text>
  //           </View>
  //         </View>
  //         <View style={styles.chartContainer}>
  //           {/* Your chart component or visualization */}
  //           <Text style={styles.chartPlaceholder}>Chart goes here</Text>
  //         </View>
  //         <View style={styles.activityContainer}>
  //           <Text style={styles.activityTitle}>Recent Activity</Text>
  //           <View style={styles.activityItem}>
  //             <Text style={styles.activityText}>New Order: Order #123</Text>
  //             <Text style={styles.activityTime}>2 hours ago</Text>
  //           </View>
  //           <View style={styles.activityItem}>
  //             <Text style={styles.activityText}>New User: John Doe</Text>
  //             <Text style={styles.activityTime}>1 day ago</Text>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={styles.footer}>
  //         <Text style={styles.footerText}>Powered by Awesome App</Text>
  //       </View>
  //     </View>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#F4F4F4",
  //   },
  //   header: {
  //     backgroundColor: "#2980B9",
  //     paddingVertical: 20,
  //     paddingHorizontal: 24,
  //     marginBottom: 24,
  //   },
  //   headerText: {
  //     fontSize: 24,
  //     fontWeight: "bold",
  //     color: "#FFFFFF",
  //   },
  //   content: {
  //     flex: 1,
  //     paddingHorizontal: 24,
  //   },
  //   statsContainer: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginBottom: 24,
  //   },
  //   statItem: {
  //     flex: 1,
  //     backgroundColor: "#FFFFFF",
  //     borderRadius: 8,
  //     padding: 16,
  //     marginRight: 16,
  //     shadowColor: "#000000",
  //     shadowOpacity: 0.1,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowRadius: 4,
  //     elevation: 2,
  //   },
  //   statValue: {
  //     fontSize: 24,
  //     fontWeight: "bold",
  //     marginBottom: 8,
  //     color: "#2980B9",
  //   },
  //   statLabel: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //     color: "#888888",
  //   },
  //   chartContainer: {
  //     backgroundColor: "#FFFFFF",
  //     borderRadius: 8,
  //     padding: 16,
  //     marginBottom: 24,
  //     shadowColor: "#000000",
  //     shadowOpacity: 0.1,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowRadius: 4,
  //     elevation: 2,
  //     alignItems: "center",
  //   },
  //   chartPlaceholder: {
  //     fontSize: 18,
  //     color: "#888888",
  //   },
  //   activityContainer: {
  //     backgroundColor: "#FFFFFF",
  //     borderRadius: 8,
  //     padding: 16,
  //     marginBottom: 24,
  //     shadowColor: "#000000",
  //     shadowOpacity: 0.1,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowRadius: 4,
  //     elevation: 2,
  //   },
  //   activityTitle: {
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     marginBottom: 16,
  //   },
  //   activityItem: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginBottom: 8,
  //   },
  //   activityText: {
  //     fontSize: 16,
  //   },
  //   activityTime: {
  //     fontSize: 12,
  //     color: "#888888",
  //   },
  //   footer: {
  //     backgroundColor: "#EAEAEA",
  //     paddingVertical: 12,
  //     paddingHorizontal: 24,
  //     marginTop: 24,
  //   },
  //   footerText: {
  //     fontSize: 12,
  //     color: "#888888",
  //   },
  // });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Users</Text>
          <Text style={styles.cardValue}>1,234</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales</Text>
          <Text style={styles.cardValue}>$12,345</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Conversion Rate</Text>
          <Text style={styles.cardValue}>25%</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Awesome App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    backgroundColor: "#2980B9",
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2980B9",
  },
  footer: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  footerText: {
    fontSize: 12,
    color: "#888888",
  },
});

export default DashboardScreen;
