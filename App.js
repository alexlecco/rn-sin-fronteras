import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, Button } from 'react-native';

export default function App() {
  const [ modal, setModal ] = useState(false)
  const interactModal = () => setModal(!modal)

  return (
    <View style={styles.container}>
      <Modal
        animatinType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title="Cerrar modal" onPress={interactModal} />
          </View>
        </View>
      </Modal>

      <Text>No soy un modal</Text>
      <Button title="Abrir modal" onPress={interactModal} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});