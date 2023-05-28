import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../hooks/AuthContext';
import LogoutButton from '../LogoutButton/LogoutButton';

const Header = () => {
    // const {user, isLoading, logout} = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = () => {

        // Navigate back to the SignInForm screen
        AsyncStorage.removeItem('accessToken')
            .then(() => {
                // Redirect to the login screen
                // logout();
                navigation.navigate('Home');
            })
            .catch(error => {
                console.error('Error while logging out:', error);
            });
    };


    const handleSettings = () => {
        // Handle settings functionality
        console.log("setting")
    };

    const handleReload = () => {
        // Handle reload functionality
        console.log("reload")
    };

    const handleSideNav = () => {
        // Handle side navigation functionality
        console.log("side nav")
    };

    // <Spinner visible={isLoading} />
    // <Text style={styles.welcome}>Welcome {userInfo.user.name}</Text>
    // <Button title="Logout" color="red" onPress={logout} />

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.text} >Guardan Dasboard</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.optionButton}>
                    <Ionicons name="log-out-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSettings} style={styles.optionButton}>
                <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReload} style={styles.optionButton}>
                <Ionicons name="refresh-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSideNav} style={styles.optionButton}>
                <Ionicons name="menu-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        padding: 18,

        height: 90,
        backgroundColor: '#FF7722',
    },
    text: {
        fontSize: 15,
        // justifyContent: 'flex-start',
        marginRight: 60,
        color: 'white'
    },
    optionButton: {
        marginLeft: 16,
    },
});

export default Header;
