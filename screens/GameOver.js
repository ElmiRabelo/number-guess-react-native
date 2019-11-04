import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text>Fim de Jogo!</Text>
      <Text>Número de rounds: {props.rounds}</Text>
      <Text>O número era: {props.userNumber}</Text>
      <View>
        <Button title="Jogar Novamente" onPress={() => props.onNewGame()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOver;
