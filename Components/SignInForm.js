import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, Alert, TouchableOpacity, Dimensions } from "react-native";
import { Button } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./Loading/Loading";
import { ActivityIndicator } from "react-native";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);


  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the data to be sent
    setLoading(true);
    const data = {
      username: username,
      password: password,
    };

    fetch("https://gef.edumama.co/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${AsyncStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.isSuccess) {
          navigation.navigate(result.role === "Guardian"
            ? "Dashboard"
            : "Home");
          console.log(result);
          setLoading(false);
          Alert.alert('Success', 'Logged in successfully');
        }
      })
      .catch((error) => {
        Alert.alert("Error", "An error occurred while signing in.");
        console.error("Error:", error);
        setLoading(false);
      });
  };


  const imageSource = require('../assets/logo.png');

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
      {/* <Spinner visible={Loading} /> */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button style={styles.loginBtn} onPress={handleSubmit}>Log In</Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
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
  Text: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
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
    width: "100%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF7722",
    fontSize: 20,
  },
});

export default SignInForm;
