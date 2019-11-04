import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import globalStyles from "../constants/global-styles";
import colors from "../constants/colors";

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={globalStyles.headerTitle}>{title}</Text>
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
  }
});

export default Header;
