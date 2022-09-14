import { View, Text ,Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({navigation,props}) {
  return(
    <View style={ {flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>โฮม!</Text>
      <Button title="Go to Setting" onPress={()=>props.navigation.toggleDrawer()}/>
    </View>
  )
}

function SettingScreen({navigation}) {
  return(
    <View style={ {flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting!</Text>
      <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon: ({focused, color, size})=>{
          let iconName; 
          if(route.name==='Home'){
            iconName = focused
            ? 'ios-information-circle' 
            : 'ios-information-circle-outline'
          }
          else if(route.name==='Setting'){
            iconName = focused
            ? 'ios-list' 
            : 'ios-list-outline' 

          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor:'tomato',tabBarInactiveTintColor:'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default App