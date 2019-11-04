import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

import globalStyles from "../constants/global-styles";
import colors from "../constants/colors";

const GameOver = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleBlack}>Fim de Jogo!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={[globalStyles.resultText, { textAlign: "center" }]}>
        Foram necessário{" "}
        <Text style={globalStyles.highlightText}>{rounds}</Text> rounds para
        advinhar o número escolhido:
        <Text style={globalStyles.highlightText}> {userNumber}</Text>
      </Text>
      <View>
        <MainButton
          title="Jogar Novamente"
          backgroundColor={colors.primary}
          borderRadius={15}
          onPress={() => onNewGame()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderColor: colors.dark,
    borderWidth: 3,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default GameOver;
