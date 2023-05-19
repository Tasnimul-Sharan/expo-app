import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    // Create an object representing the data to be sent
    const data = {
      username: username,
      password: password,
    };

    // Make the POST request to the backend API
    fetch("https://gef.edumama.co/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the API response here
        navigation.navigate("Dashboard");
        console.log(result);
        // You can add your own logic here to navigate or perform additional actions based on the response
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
        Alert.alert("Error", "An error occurred while signing in.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Sign In</Text>
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
      <Button title="Sign In" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  Text: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default SignInForm;
