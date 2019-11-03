import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import colors from "../constants/colors";

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Regular",
    color: colors.white,
    fontSize: 22,
    letterSpacing: 2,
    fontWeight: "bold"
  }
});

export default Header;
