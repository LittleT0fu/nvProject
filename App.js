import { View, Text, button, TextInput } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Button } from "react-native-web";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent (props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label = 'Help' onPress = {()=> alert('Link to help')} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <Drawer.Navigator useLegacyImplementation 
    drawerContent={ (props)=> <CustomDrawerContent {...props} />} 
    screenOptions={{
      drawerStyle:{
        backgroundColor : 'red',
        width : 240
      }
    }}
      
    >
    <Drawer.Screen name="Feed" component={Feed} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
  )
  ;}

const App = () => {
  return (
    <NavigationContainer>
     <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
