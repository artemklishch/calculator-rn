import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./buttonStyles";

const Button = ({ btnValue, style, handleClick }) => {
  return (
    <TouchableOpacity
      style={[styles.btnTouch, style]}
      activeOpacity={0.7}
      onPress={() => handleClick(btnValue)}
    >
      <Text style={styles.btnText}>{btnValue}</Text>
    </TouchableOpacity>
  );
};
export default Button;
