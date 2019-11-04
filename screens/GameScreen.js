import React, { useState, useRef, useEffect } from "react";
import { View, Text, Alert, ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

import colors from "../constants/colors";
import globalStyles from "../constants/global-styles";

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

const renderListItem = (value, indexValue) => {
  return (
    <View key={Math.random()} style={styles.listItem}>
      <Text style={globalStyles.bodyText}>
        {indexValue + 1}º Round:{" "}
        <Text style={globalStyles.highlightText}>{value}</Text>
      </Text>
    </View>
  );
};

const GameScreen = ({ userGuess, onGameOver }) => {
  const INITIAL_GUESS = generateRandomBetween(1, 100, userGuess);
  const [currentGuess, setCurrentGuess] = useState(INITIAL_GUESS);
  const [pastRounds, setPastRounds] = useState([INITIAL_GUESS]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userGuess) {
      onGameOver(pastRounds.length);
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
      currentLow.current = currentGuess + 1;
    }
    // gera um novo palpite de número com os limites criados
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastRounds(curPastRounds => [...curPastRounds, nextNumber]);
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.bodyText}>Esse é seu número: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          title={<AntDesign name="minus" size={24} color="white" />}
          backgroundColor={colors.alternative}
          onPress={() => nextGuessHandler("lower")}
        />
        <MainButton
          title={<AntDesign name="plus" size={24} color="white" />}
          backgroundColor={colors.alternative}
          onPress={() => nextGuessHandler("greater")}
        />
      </Card>
      <ScrollView style={styles.listContainer}>
        {pastRounds.map((round, index) => renderListItem(round, index))}
      </ScrollView>
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
  },
  listContainer: {
    paddingTop: 15,
    width: "100%"
  },
  listItem: {
    width: "50%",
    borderColor: colors.suplementar,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  }
});

export default GameScreen;
