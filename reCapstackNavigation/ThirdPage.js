import { View, Text, StyleSheet , Button } from "react-native";
import React from "react";
import reCapStyles from "./reCapStyles";

const ThirdPage = ({ navigation }) => {
  return (
    <>
    <View style={reCapStyles.container}>
      <View style={{flex : 1,justifyContent : "center", alignItems:"center"}}>
        <Text style= {reCapStyles.textTopStyle}>This is Third page</Text>
        <Button
            title="second page"
            onPress={() => navigation.navigate("First Page",{})}
          />
          <Button
            title="Third page"
            onPress={() => navigation.navigate("Second Page",{})}
          />
      </View>
    </View>
    <View style={{ alignItems: "center" }}>
      <Text
        style={reCapStyles.textBottomStyle}
      >
         Thai-Nichi Institute of Technology
      </Text>
    </View>
  </>
  );
};

export default ThirdPage;