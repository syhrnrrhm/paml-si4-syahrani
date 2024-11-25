import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hai Everyone</Text>
      <Text style={styles.text}>Welcome back to Fakultas Sains dan Teknologi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#778899',
  },
  text: {
    fontSize: 30,
    color: '#000000'
  }
});

export default App;