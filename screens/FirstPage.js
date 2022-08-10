import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";

const FirstPage = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState();

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
          <Text style={styles.textStyle}>
            Please insert your name to pass it to second screen
          </Text>
          <TextInput
            multiline
            placeholder="Input Text Here"
            style={{
              width: 300,
              padding: 10,
              backgroundColor: "white",
              marginBottom: 10,
            }}
            onChangeText={setPostText}
            value={postText}
          />
          <Button
            title="Go next"
            onPress={() => {
              navigation.navigate("Second Page", { post: postText });
            }}
          />
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

export default FirstPage;

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
