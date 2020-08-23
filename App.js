import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const mySections = [
  {
    title: 'Grupo 1',
    data: [
      { key: '1', name: 'alex' },
      { key: '2', name: 'noe' },
      { key: '3', name: 'anto' },
      { key: '4', name: 'mirta' },
      { key: '5', name: 'eliseo' },
    ],
  },
  {
    title: 'Grupo 2',
    data: [
      { key: '6', name: 'alex' },
      { key: '7', name: 'noe' },
      { key: '8', name: 'anto' },
      { key: '9', name: 'mirta' },
      { key: '10', name: 'eliseo' },
    ],
  },
  {
    title: 'Grupo 3',
    data: [
      { key: '11', name: 'alex' },
      { key: '12', name: 'noe' },
      { key: '13', name: 'anto' },
      { key: '14', name: 'mirta' },
      { key: '15', name: 'eliseo' },
    ],
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={mySections}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  item: {
    color: '#fff',
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  section: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#222',
    padding: 15,
  }
});