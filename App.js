import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  const [ count, setCount ] = useState(0)
  const [ loading, setLoading ] = useState(true)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ?
          <Text>Cargando...</Text>
        :
          <View>
            <Text style={styles.text}>"{count}"</Text>
            <Button title="incrementar" onPress={increment} />
            <Button title="incrementar" onPress={decrement} />
          </View>
      }
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
    textAlign: 'center'
  },
});