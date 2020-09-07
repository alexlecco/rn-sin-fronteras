import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>UsersScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: '#fff'
  }
});