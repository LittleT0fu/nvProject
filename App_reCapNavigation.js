import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screens/HomeScreen";
// import AboutScreen from "./screens/AboutScreen";
import React, { useState } from "react";


import FirstPage from "./reCapstackNavigation/FirstPage";
import SecondPage from "./reCapstackNavigation/SecondPage"
import ThirdPage from "./reCapstackNavigation/ThirdPage";



// <>  </> this is fragment


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#007b9b" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 40 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
