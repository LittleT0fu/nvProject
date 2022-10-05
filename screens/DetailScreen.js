import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const DetailScreen = ({ navigation, route }) => {
  const [id, title] = route.params

  const [detail, setDetail] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [error, setError] = useState("");

  React.useLayoutEffect(() =>{
    navigation.setOptions(
      {
        // title : "รายละเอียดสินค้า"
        title: title,
      },[navigation,title])
    });

  const getData = async (id) => {
    try {
      setLodaing(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      // console.log(res.data.data);
      setDetail(res.data.data);
      setLodaing(false);
    } catch (error) {
      setLodaing(false);
      setError(error); // set error เดิกจากอะไร
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]); //เปลี่ยนแปลงเฉพาะ id นี้

  const _onRefresh = () => {
    getData(id);
  };

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }

  if (error) {
    // return สิ่งนี้กลับไป
    return (
      <View>
        <Text>{error.message}</Text>
        <Text>เกิดข้อผิดพลาดๆๆๆๆๆๆๆๆๆๆ</Text>
      </View>
    );
  }

  const _renderItem = ({ item , index }) => {
    return (
          <View style={styles.container}>
            <View style={styles.dataContainer}>
              <Text style={styles.thumbnail}> {index+1} </Text>
              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.ch_title}</Text>
                <Text style={styles.detail} note numberOfLines={1} >{item.ch_detail}</Text>
              </View>
            </View>
          </View>

    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefresh}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: "100%",
    marginBottom: 15,
  },
});

