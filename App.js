import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world from React Naitve Web</Text>
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
