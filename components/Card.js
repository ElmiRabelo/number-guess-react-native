import React from "react";

import { View, StyleSheet } from "react-native";

import colors from "../constants/colors";

const Card = props => (
  <View style={{ ...styles.container, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  }
});

export default Card;
