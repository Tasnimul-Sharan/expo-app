import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={styles.logoContainer}
            >
                <Image source={require('../../assets/logo.png')} style={styles.logo} />

            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 8,
    },
    logo: {
        height: 50,
        width: 250,
    },
};

export default Header;