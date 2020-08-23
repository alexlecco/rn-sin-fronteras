import React, { useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// actions names
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// initial state
const initialState = {
  count: 0
}

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT: {
      return { count: state.count + 1 } 
    }
    case DECREMENT: {
      return { count: state.count - 1 }
    }
    default: {
      return state
    }
  }
}

export default function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => dispatch({ type: INCREMENT })}> + </Text>
      <Text style={styles.text}> {state.count} </Text>
      <Text style={styles.text} onPress={() => dispatch({ type: DECREMENT })}> - </Text>
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
    fontSize: 50,
    textAlign: 'center'
  },
});