import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import useFetch from '../hooks/useFetch'

export default ({ navigation }) => {
  const id = navigation.getParam('_id')
  const { loading, data } = useFetch(`https://serverless.alexlecco.vercel.app/api/meals/${id}`)
  const createOrder = () => {
    fetch('https://serverless.alexlecco.vercel.app/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        meal_id: id,
        user_id: 'HARDCODED'
      })
    }).then(() => {
      alert('Orden fue generada con éxito')
      navigation.navigate('Meals')
    })
  }

  return(
    <View style={styles.container}>
      {
        loading ?
          <Text>Cargando...</Text>
        :
          <>
            <Text> {data.name} </Text>
            <Image
              style={styles.image}
              source={{
                uri: data.image,
              }}
            />
            <Text> {data.description} </Text>
            <TouchableOpacity onPress={createOrder}>
              <Text style={styles.button}>crear orden</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Meals')}>
              <Text style={styles.button}>volver</Text>
            </TouchableOpacity>
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 150,
  },
  button: {
    color: '#4653ee',
    paddingTop: 30
  }
})