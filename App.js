import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [ users, setUsers ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setUsers(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : users[0].name}
      </Text>
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