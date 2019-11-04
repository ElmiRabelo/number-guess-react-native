import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
    fontSize: 14
  },
  resultText: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginVertical: 10
  },
  titleWhite: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: colors.white,
    letterSpacing: 1.8,
    marginVertical: 15
  },
  titleBlack: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: colors.darker,
    letterSpacing: 1.8,
    marginVertical: 15
  },
  headerTitle: {
    fontFamily: "open-sans-bold",
    color: colors.white,
    fontSize: 24,
    letterSpacing: 2.4,
    fontWeight: "bold"
  },
  highlightText: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  }
});
