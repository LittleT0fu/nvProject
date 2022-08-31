import { View, Text ,button ,TextInput } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Button } from 'react-native-web';

function HomeScreen ({navigation}){
  return (
    <View style = {{flex:1 , alignItems:"center",justifyContent:"center"}}>
      <Button
        title = 'Go to notifications'
        onPress ={()=> navigation.navigate('Notification')}
      />
    </View>
  )

}

function notification ({navigation}){
  return (
    <View style = {{flex:1 , alignItems:"center",justifyContent:"center"}}>
      <Button
        title = 'Go to Back'
        onPress ={()=> navigation.goBack()}
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () =>{
  return(
  <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Notification" component={notification}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )};

export default App