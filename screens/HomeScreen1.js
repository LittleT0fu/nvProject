import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainerRefContext } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="#008b8b" />
      <Text>โฮมสกรีน</Text>
      <Button
        title="About me"
        onPress={() =>
          navigation.navigate("About", {
            email: "ReactNative.tni.ac.th",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
