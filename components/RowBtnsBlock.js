import React from "react";
import { View } from "react-native";
import styles from "./rowBtnsBlockStyles";
import Button from "./Button";

const RowBtnsBlock = ({ btnsValues, handleClick }) => {
  return (
    <View style={styles.btnBlock}>
      {btnsValues.map((item) => (
        <Button
          key={item.btnValue}
          style={item.style}
          btnValue={item.btnValue}
          handleClick={handleClick}
        />
      ))}
    </View>
  );
};

export default RowBtnsBlock;
