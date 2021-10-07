import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Componenets/Header';
import Tags from './Constants/Tags';
import FirstScreen from './Screens/FirstScreen';
import GameOverScreen from './Screens/GameOverScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState(Tags.screenContent_FirstScreen)

  const [userNumber, setUserNumber] = useState()



  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
    setCurrentScreen(Tags.screenContent_GameScreen)
  }

  const numberOfTries = useRef(0)

  const updateNumberOfTriesHandler = () => {
    numberOfTries.current = numberOfTries.current + 1;
    console.log("numberOfTries.current: " + numberOfTries.current);
  }


  const gameOverHandler = () => {
    setCurrentScreen(Tags.screenContent_GameOverScreen)
  }

  const tryAgainHandler = () => {
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
          onTryAgain={tryAgainHandler}
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
