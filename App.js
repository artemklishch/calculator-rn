import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import RowBtnsBlock from "./components/RowBtnsBlock";
import btnsData from "./constantData/arrayOfData";
import { calcFunc } from "./calcFuncs/calcFunc";

export default function App() {
  const [calcData, setCalcData] = useState({
    string: "",
    calc: [0],
    wasCalc: false,
    memNum: 0,
  });

  const handleClick = (val) => {
    const updatedData = calcFunc(calcData, val);
    setCalcData(updatedData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native calculator!</Text>

      <View style={styles.valueBlock}>
        <ScrollView horizontal style={styles.valueScrollBlock}>
          <Text style={styles.valueText}>
            {calcData.string ? calcData.string : "0"}
          </Text>
        </ScrollView>
      </View>

      {btnsData.map((item, index) => (
        <RowBtnsBlock key={index} btnsValues={item} handleClick={handleClick} />
      ))}
    </View>
  );
}
