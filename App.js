import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>"{count}"</Text>
      <Button title="incrementar" onPress={increment} />
      <Button title="incrementar" onPress={decrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});