import React, { useState } from 'react';
import { Button, View, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for token storage
import { post } from '../../hooks/apiUtils';

const LogoutButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const handleLogout = async () => {
        setIsLoading(true);

        try {
            // Perform logout logic and clear the authentication state
            // For example, clear any stored tokens or user data

            // Make an API request to invalidate the user's tokens or perform any necessary cleanup
            await api.logout(); // Replace "api.logout()" with the actual logout API call

            // Clear any stored tokens or user data
            await AsyncStorage.removeItem('accessToken'); // Clearing token from AsyncStorage
            Alert.alert('Logout Success', 'You are successfully Log Out');
            // Update the authentication state or navigate to the login screen
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
            Alert.alert('Logout Failed', 'An error occurred while logging out. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View>
            <Button title="Logout" onPress={handleLogout} disabled={isLoading} />

            {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
    );
};

export default LogoutButton;
