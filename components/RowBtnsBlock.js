import React from "react";
import { View } from "react-native";
import styles from "./rowBtnsBlockStyles";
import Button from "./Button";
import PropTypes from "prop-types";

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

RowBtnsBlock.propTypes = {
  btnsValues: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
