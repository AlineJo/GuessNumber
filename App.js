import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Componenets/Header';
import FirstScreen from './Screens/FirstScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
  }

  let currentScreenContent = <FirstScreen  onStartGamePressed={startGameHandler}/>

   if(userNumber){
     currentScreenContent = <GameScreen   onNPCGuessCorrect={startGameHandler} chosenNumber={userNumber}/>
   }

  return (
    <View style={styles.root}>
      <Header title="Gusse The Number" />
      {currentScreenContent}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
