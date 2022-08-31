import { View, Text } from 'react-native'
import React from 'react'

const AboutScreen = ({route}) => {
    // const {email} = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About มี</Text>
      {/* <Text>Email : {email}</Text> */}
      <Text>Email : {route.params?.email}</Text>
    </View>
  )
}

export default AboutScreen