import { View, Text, StyleSheet , Button } from "react-native";
import React from "react";

const ThirdPage = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
      <View style={{flex : 1,justifyContent : "center"}}>
        <Text style= {styles.textTopStyle}>This is Third page</Text>
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
        style={styles.textBottomStyle}
      >
         Thai-Nichi Institute of Technology
      </Text>
    </View>
  </>
  );
};

export default ThirdPage;

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