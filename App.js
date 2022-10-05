import { View, Text, button, TextInput, StyleSheet , Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer, DefaultTheme, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Button, SafeAreaView } from "react-native-web";

// import page
import HomeScreen from "./screens/HomeScreen_Drawer";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,4,85)",
  },
};

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView  style={{flex : 1}}>
      <DrawerContentScrollView {...props}>
        <Image
          source={require("./assets/react_logo.png")}
          style={styles.sideMenuProfileIcon}
        />

        <DrawerItemList {...props} />
        <DrawerItem
          label="Close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        {/* <DrawerItem
          label="Toggle Drawer"
          onPress={() => props.navigation.toggleDrawer()}
        /> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function productStack(){
  return(
    <stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'black'
      },
      headerTintColor:'white',
      headerTitle:{
        fontWeight:'bold'
      },

    }}> 
      <stack.Screen name="Product" component={ProductScreen}/>
      <stack.Screen name="Detail" component={DetailScreen} />
   </stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="product" component={productStack}/>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
