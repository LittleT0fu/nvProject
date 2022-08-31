import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";
import reCapStyles from "./reCapStyles";

const FirstPage = ({ navigation}) => {

  return (
    <>
    <View style={reCapStyles.container}>
      <View style={{flex : 1,justifyContent : "center", alignItems:"center"}}>
        <Text style= {reCapStyles.textTopStyle}>This is First page</Text>
        <Button
            title="second page"
            onPress={() => navigation.navigate("Second Page",{})}
          />
          <Button
            title="Third page"
            onPress={() => navigation.navigate("Third Page",{})}
          />
      </View>
    </View>
    <View>
      <Text style={reCapStyles.textBottomStyle}>
        Thai-Nichi Institute of Technology
      </Text>
    </View>
  </>
  );
};

export default FirstPage;
