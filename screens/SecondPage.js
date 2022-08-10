import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SecondPage = ({ route }) => {
  return (
    <>
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={{ margin: 10 }}>
          {" "}
          Values pass from First page: {route.params?.post}{" "}
        </Text>
      </View>
    </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "gray",
          }}
        >
          www.tni.ac.th
        </Text>
      </View>
    </>
  );
};

export default SecondPage;

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
