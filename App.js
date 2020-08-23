import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require('./assets/icon.png')}
      />
      <Image
        style={styles.photo}
        source={{ uri: 'http://placekitten.com/200/200' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});