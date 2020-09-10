import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import useFetch from '../hooks/useFetch'

export default ({ navigation }) => {
  const id = navigation.getParam('_id')
  const { loading, data } = useFetch(`https://serverless.alexlecco.vercel.app/api/meals/${id}`)
  console.log("data:::", data)

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
})