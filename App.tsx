import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextItem from './components/TextItem';

function App() {
  return (
    <View style={styles.container}>
      <TextItem text="Hello world from React Naitve Web" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
