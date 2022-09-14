import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMoive = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <View style={{ felx: 1, padding: 20 , alignItems:"center" }}>
      {isLoading ? <ActivityIndicator /> : (
      <FlatList 
       data={data}
       keyExtractor={({id},index)=> id}
       renderItem={({item})=>(
        <Text>{item.title} , {item.releaseYear}</Text>

       )}
      
      />
      )
    }
    </View>
  );
};

export default App;
