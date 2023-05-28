import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../Header/Header';
import SignInForm from '../SignInForm';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <SignInForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // paddingHorizontal: 16,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
});


// const styles = {
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     welcomeText: {
//         fontSize: 20,
//         marginBottom: 20,
//     },
// };

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 16,
// },
// });

export default HomeScreen;