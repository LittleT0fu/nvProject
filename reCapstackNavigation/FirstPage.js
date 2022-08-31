import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";

const FirstPage = ({ navigation}) => {

  return (
    <>
    <View style={styles.container}>
      <View style={{flex : 1,justifyContent : "center"}}>
        <Text style= {styles.textTopStyle}>This is First page</Text>
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
      <Text style={styles.textBottomStyle}>
        Thai-Nichi Institute of Technology
      </Text>
    </View>
  </>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textTopStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
  textBottomStyle: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
});
