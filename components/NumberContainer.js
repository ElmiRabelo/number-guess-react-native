import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderColor: colors.darker,
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 10
  },
  number: {
    fontSize: 24,
    letterSpacing: 3
  }
});

export default NumberContainer;
