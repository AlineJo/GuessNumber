import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Componenets/Header';
import Tags from './Constants/Tags';
import FirstScreen from './Screens/FirstScreen';
import GameOverScreen from './Screens/GameOverScreen';
import GameScreen from './Screens/GameScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'



//load fonts
const fetchFonts = () => {
  return (Font.loadAsync({
    'font-robot-light': require('./assets/fonts/Roboto-Light.ttf'),
    'font-robot-thin': require('./assets/fonts/Roboto-Thin.ttf'),
  }))
}

export default function App() {

  //state to check if data is ready
  const [isDataReady, setIsDataReady] = useState(false)

  //show AppLoading if data isn't read!
  if (!isDataReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=> {setIsDataReady(true)}}
        onError={(err) => console.log(err)}
      />
    )
  }

  const [currentScreen, setCurrentScreen] = useState(Tags.screenContent_FirstScreen)

  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
    setCurrentScreen(Tags.screenContent_GameScreen)
    numberOfTries.current = 0
  }

  const numberOfTries = useRef(0)

  const updateNumberOfTriesHandler = () => {
    numberOfTries.current = numberOfTries.current + 1;
  }


  const gameOverHandler = () => {
    setCurrentScreen(Tags.screenContent_GameOverScreen)
  }

  const onGameRestartHandler = () => {
    setCurrentScreen(Tags.screenContent_FirstScreen)
  }

  let currentScreenContent = <FirstScreen onStartGamePressed={startGameHandler} />

  switch (currentScreen) {
    case Tags.screenContent_FirstScreen:
      currentScreenContent = <FirstScreen onStartGamePressed={startGameHandler} />;
      break;

    case Tags.screenContent_GameScreen:
      currentScreenContent =
        <GameScreen
          onNPCCorrectGuess={gameOverHandler}
          chosenNumber={userNumber}
          upadateNumberOfTries={updateNumberOfTriesHandler}
        />;
      break;

    case Tags.screenContent_GameOverScreen:
      currentScreenContent =
        <GameOverScreen
          onGameRestart={onGameRestartHandler}
          numberOfTries={numberOfTries.current} />;
      break;
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
