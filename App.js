import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Componenets/Header';
import FirstScreen from './Screens/FirstScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <Header title="Gusse The Number" />
      <FirstScreen />
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
