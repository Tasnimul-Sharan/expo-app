import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../hooks/AuthContext';
import HolidaysScreen from '../screens/holidaysScreen';
import SyllabusScreen from '../screens/SyllabusScreen';
// import HolidaysScreen from '../screens/HolidaysScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  // const { userInfo, setIsLoading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Holidays" component={HolidaysScreen} />
        <Stack.Screen name="Syllabus" component={SyllabusScreen} />
      </Stack.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    //   <Stack.Navigator>

    //     {splashLoading ? (
    //       <Stack.Screen
    //         name="SplashScreen"
    //         component={SplashScreen}
    //         options={{ headerShown: false }}
    //       />
    //     ) : userInfo?.accessToken ? (
    //       <Stack.Screen name="Dashboard"
    //         component={DashboardScreen}
    //         options={{ headerShown: false }} />
    //     ) : (
    //       <>
    //         <Stack.Screen
    //           name="Home"
    //           component={HomeScreen}
    //           options={{ headerShown: false }}
    //         />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigation;
