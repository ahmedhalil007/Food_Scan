import React from 'react';
import {View, ImageBackground,StyleSheet} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("./assets/background.jpg")} style={{ height: '100%' }}/>
      <View style={{ alignItems: 'center', position: "absolute" }}>
      {children}
      </View>
    </View>
  );
}




export default Background;
