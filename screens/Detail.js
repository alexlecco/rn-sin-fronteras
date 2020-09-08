import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
  const body = navigation.getParam('body')
  const title = navigation.getParam('title')
  const name = navigation.getParam('name')

  return (
    <View style={styles.container}>
      <Text>Usuario: {name}</Text>
      <Text>Titulo: {title}</Text>
      <Text>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    textAlign: 'center'
  }
});