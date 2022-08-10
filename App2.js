import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screens/HomeScreen";
// import AboutScreen from "./screens/AboutScreen";
import React, { useState } from "react";

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      //post
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate("CreatePost");
        }}
      />
      <Text style={{ margin: 10 }}> Post : {route.params?.post} </Text>
    </View>
  );
}

// <>  </> this is

function CreatePostScreen({navigation}) {
  const [postText, setPostText] = React.useState();

  return (
    <>
      <TextInput
        multiline
        placeholder="Input Text Here"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        onChangeText={setPostText}
        value={postText}
      />
      <Button
        title="Create"
        onPress={() => {
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#007b9b" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 50 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
