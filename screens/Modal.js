import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default () => {
  return(
    <View style={styles.container}>
      <Text>Soy un Modal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})