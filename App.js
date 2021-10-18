import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Componenets/Header';
import Tags from './Constants/Tags';
import FirstScreen from './Screens/FirstScreen';
import GameOverScreen from './Screens/GameOverScreen';
import GameScreen from './Screens/GameScreen';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState(Tags.screenContent_FirstScreen)
  const [userNumber, setUserNumber] = useState()
  const numberOfRounds = useRef(0)
  const [roundsHistory, updateRoundsHistory] = useState([])

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }


  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
    setCurrentScreen(Tags.screenContent_GameScreen)
    numberOfRounds.current = 0
  }


  const updateNumberOfRoundsHandler = () => {
    numberOfRounds.current = numberOfRounds.current + 1;
  }

  const roundsItem = () => {
    let id
    if (roundsHistory.length) {
      id = (roundsHistory.length + 1) + ''
    } else {
      id = '1'
    }
    const item = {
      id: id,
      numberOfRounds: numberOfRounds.current,
      chosenNumber: userNumber
    }

    return item
  }

  const gameOverHandler = () => {

    setUserNumber(-1)

    updateRoundsHistory((currentArray) => {
      currentArray.push(roundsItem())
      return currentArray
    })

    setCurrentScreen(Tags.screenContent_GameOverScreen)

  }

  const onGameRestartHandler = () => {
    setCurrentScreen(Tags.screenContent_FirstScreen)
  }

  let currentScreenContent = <FirstScreen onStartGamePressed={startGameHandler} />

  switch (currentScreen) {
    case Tags.screenContent_FirstScreen:
      currentScreenContent =
        <FirstScreen onStartGamePressed={startGameHandler} />;
      break;

    case Tags.screenContent_GameScreen:
      currentScreenContent =
        <GameScreen
          onNPCCorrectGuess={gameOverHandler}
          chosenNumber={userNumber}
          upadateNumberOfRounds={updateNumberOfRoundsHandler}
          roundsHistory={roundsHistory}
        />;
      break;

    case Tags.screenContent_GameOverScreen:
      currentScreenContent =
        <GameOverScreen
          onGameRestart={onGameRestartHandler}
          numberOfRounds={numberOfRounds.current} />;
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
