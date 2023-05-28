import React, { useContext, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Button, Image } from 'react-native';
// import {CheckBox} from "react-native-community";
import { post } from '../hooks/apiUtils';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../hooks/AuthContext';
import Checkbox from '../components/Checkbox/Checkbox';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const {isLoading} = useContext(AuthContext);
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };


  const handleLogin = () => {
    // Validate the input fields
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    // Make the API request to authenticate the user
    const data = {
      username: username,
      password: password,
    };
    // isLoading(true)
    post('/Auth/Login', data)
      .then((result) => {
        // Handle the API response

        if (result.isSuccess) {
          // Login successful
          Alert.alert('Success', 'Logged in successfully');
          navigation.navigate(result.role === "Guardian"
            ? "Dashboard"
            : "Home");
          console.log(result)
        }
        else {
          // Login failed
          Alert.alert('Error', response.message);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Login Error:', error);
        Alert.alert('Error', 'An error occurred during login. Please try again.');
      });
  };

  const imageSource = require('../../assets/logo.png');

  return (
    <View style={styles.container}>
      <Image source={imageSource} resizeMode="contain"
        style={{
          width: '70%',
          display: 'flex',
          justifyContent: "center",
          margin: 50,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
      </Checkbox>
      {/* <View style={styles.loginBtn}> */}

      <Button style={styles.loginBtn} color="#FF7722" title="Log in" onPress={handleLogin} />
      {/* <Text style={styles.loginText} onPress={handleLogin} >Log In </Text> */}
      {/* </View> */} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 8,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    // padding: 16,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    // color: "white",
  },
  checkboxText:{
color: 'black'
  },
  Text: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
    color: 'white'
  },
  logo: {
    // height: 50,
    // width: '150%',
    // margin: 30,
    // flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    // paddingHorizontal: 16,
    // backgroundColor: '#FFFFFF'
  },
  loginBtn: {
    width: "50%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF7722",
    fontSize: 20,
    padding: 20,
  },
});

export default SignInScreen;