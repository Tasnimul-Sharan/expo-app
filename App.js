import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import SignInForm from "./Components/SignInForm";
import HomeScreen from "./src/screens/HomeScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import { AuthProvider } from "./src/hooks/AuthContext";
import Navigation from "./src/components/Navigation";
// import DashboardScreen from "./Components/DashboardScreen/DashboardScreen";
// import HomeScreen from "./src/screens/HomeScreen";
// import HomeScreen from "./src/components/screens/screen/HomeScreen";
// import HomeScreen from "./Components/HomeScreen/HomeScreen";

// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Dashboard"
    //       component={DashboardScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <AuthProvider>
      {/* <StatusBar backgroundColor="#06bcee" /> */}
      <Navigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
