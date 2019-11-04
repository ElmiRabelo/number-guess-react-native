import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MainButton = ({
  title,
  backgroundColor,
  borderRadius,
  dark,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor, borderRadius }]}>
        <Text style={[styles.buttonText, { color: dark ? "#000" : "white" }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.26
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default MainButton;
