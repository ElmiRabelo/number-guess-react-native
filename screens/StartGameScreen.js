import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
//custom components e assets
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

import colors from "../constants/colors";
import globalStyles from "../constants/global-styles";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Número invalido!", "Números válidos são entre 1 a 99", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  if (confirmed) {
    return (
      <View style={styles.container}>
        <Card style={styles.confirmedCard}>
          <Text style={globalStyles.bodyText}>Número escolhido: </Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <View style={styles.confimerdButton}>
            <MainButton
              title="Começar Jogo"
              backgroundColor={colors.purple}
              onPress={() => props.onStartGame(selectedNumber)}
            />
          </View>
          <View style={styles.confimerdButton}>
            <MainButton
              title="Reiniciar"
              backgroundColor={colors.dark}
              onPress={resetInputHandler}
            />
          </View>
        </Card>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={globalStyles.titleBlack}>Comece um Novo Jogo</Text>
        <Card style={styles.inputContainer}>
          <Text style={globalStyles.bodyText}>Escolha um Número</Text>
          <Input
            style={styles.input}
            placeholder="Ex: 00"
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View sytle={styles.button}>
              <MainButton
                title="Recomeçar"
                backgroundColor={colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
            <View sytle={styles.button}>
              <MainButton
                title="Confirmar"
                backgroundColor={colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  button: {
    width: "40%",
    alignItems: "center"
  },
  input: {
    width: 50,
    padding: 5,
    marginVertical: 25,
    textAlign: "center"
  },
  confirmedCard: {
    width: 200,
    maxWidth: "60%",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: colors.suplementar
  },
  confimerdButton: {
    marginBottom: 10,
    width: 150
  }
});

export default StartGameScreen;
