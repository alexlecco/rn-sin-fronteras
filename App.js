import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [ count, setCount ] = useState(0)

  const increment = useCallback(
    () => {
      setCount(count + 1)
    }, [count]
  )

  const decrement = useCallback(
    () => {
      setCount(count - 1)
    }, [count]
  )

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={decrement}> - </Text>
      <Text style={styles.text}> {count} </Text>
      <Text style={styles.text} onPress={increment}> + </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
    textAlign: 'center'
  },
});