import React from 'react';
import { StyleSheet, ImageBackground, View, Text, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

console.log(deviceHeight)
console.log(deviceWidth)

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{ uri: 'http://placekitten.com/700/360' }}
      >
        <Text style={{ color: 'white' }}>Mi aplicación</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: deviceHeight,
    width: deviceWidth,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});