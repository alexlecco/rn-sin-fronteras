import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: 60,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 18
  }
})