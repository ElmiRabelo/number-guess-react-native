import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import GameOver from "./GameOver";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userGuess, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userGuess)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userGuess) {
      onGameOver(rounds);
    }
  }, [currentGuess, userGuess, onGameOver]);

  const nextGuessHandler = direction => {
    //Verifica se a dica que o user está dando não esta incorreta, como tentativa de enganar o resultado.
    if (
      (direction === "lower" && currentGuess < userGuess) ||
      (direction === "greater" && currentGuess > userGuess)
    ) {
      Alert.alert(
        "Isso está incorreto!",
        "Você sabe que essa opção está incorreta.",
        [{ text: "Ok...", style: "cancel" }]
      );
      return;
    }

    //Cria limites de números, para menor e maior, baseado nas escolhas do user
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    // gera um novo palpite de número com os limites criados
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Palpite do Oponent: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MENOR" onPress={() => nextGuessHandler("lower")} />
        <Button title="MAIOR" onPress={() => nextGuessHandler("greater")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    maxWidth: "80%",
    marginTop: 20
  }
});

export default GameScreen;
