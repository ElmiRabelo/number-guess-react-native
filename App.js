import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRounds, setGameRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGameRounds(0);
  };
  const gameOverHandler = numOfRounds => {
    setGameRounds(numOfRounds);
  };

  const newGameHandler = () => {
    setGameRounds(0);
    setUserNumber();
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && gameRounds <= 0) {
    content = (
      <GameScreen userGuess={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (gameRounds > 0) {
    content = (
      <GameOver
        rounds={gameRounds}
        userNumber={userNumber}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Advinhe o número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
