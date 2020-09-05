import { calcOperatingFunc } from "./calcOperatingFunc";

export const calcFunc = (startValue, value) => {
  let calcData = { ...startValue };
  let isFirstComa = true,
    isOperator = false;

  //check if pressed "AC"
  if (value === "AC")
    return {
      string: "",
      calc: [0],
      wasCalc: false,
      memNum: 0,
    };

  //check if sign "." was first
  if (value === ".") {
    const arr = calcData.string.split("");
    arr.forEach((el) => {
      if (el === value) isFirstComa = false;
    });
  }
  if (!isFirstComa) return calcData;

  //check if operator pressed
  if (value === "+" || value === "-" || value === "\u00F7" || value === "x") {
    isOperator = true;
  }

  //memorized number logic
  if (value === "m+") {
    calcData.memNum += Number(calcData.string);
  } else if (value === "m-") {
    calcData.memNum -= Number(calcData.string);
  } else if (value === "mc") {
    calcData.memNum = 0;
  } else if (value === "mr") {
    calcData.string = String(calcData.memNum);
    calcData.calc = [calcData.memNum];
    calcData.wasCalc = false;
  }
  //plus-minus pressed
  else if(value === "+/-" && calcData.calc.length < 3){
    if(calcData.calc[0] > 0){
      calcData.calc[0] = 0 - calcData.calc[0]
      calcData.string = String(calcData.calc[0])
    }else if(calcData.calc[0] < 0){
      calcData.calc[0] = Number(Math.abs(calcData.calc[0]))
      calcData.string = String(calcData.calc[0])
    }
  }
  else if(value === "+/-" && calcData.calc.length === 3){
    if(calcData.calc[2] > 0){
      calcData.calc[2] = Number("-" + calcData.calc[2])
      calcData.string = String(calcData.calc[2])
    }else if(calcData.calc[2] < 0){
      calcData.calc[2] = Number(Math.abs(calcData.calc[2]))
      calcData.string = String(calcData.calc[2])
    }
  }
  //when pressed "." but nothing was pressed before
  else if (calcData.calc.length === 1 && !calcData.string && value === ".") {
    calcData.string = String(calcData.calc[0] + value);
  }
  //when pressed "=" but nothing to calculate
  else if (calcData.calc.length === 1 && value === "=") {
    return calcData;
  }
  //=================
  //calculating logic
  //==================
  //when pressed something, except operator and "%"
  else if (calcData.calc.length === 1 && !isOperator && value !== "%") {
    calcData.string = String(calcData.string + value);
    calcData.calc[0] = Number(calcData.string);
  }
  //when there is first value and pressed operator
  else if (calcData.calc.length === 1 && isOperator) {
    calcData.calc[1] = value;
    calcData.wasCalc = true;
  }
  //when there is value and pressed "%"
  else if (calcData.calc.length === 1 && value === "%") {
    calcData.calc[0] /= 100;
    calcData.string = String(calcData.calc[0]);
  }
  //when there are first value and chosen operator, and pressed something except operator and "."
  else if (
    calcData.calc.length === 2 &&
    !isOperator &&
    calcData.wasCalc &&
    value !== "."
  ) {
    calcData.wasCalc = false;
    calcData.string = String(value);
    calcData.calc[2] = Number(value);
  }
  //when there are first value, chosen operator, second value, and pressed something except operator and "="
  else if (
    calcData.calc.length > 1 &&
    !isOperator &&
    !calcData.wasCalc &&
    value !== "="
  ) {
    if (calcData.calc[2] === 0 && value !== "." && calcData.string !== "0.") {
      calcData.string = String(value);
      calcData.calc[2] = Number(calcData.string);
    } else {
      calcData.string = String(calcData.string + value);
      calcData.calc[2] = Number(calcData.string);
    }
  }
  //when there are first value, chosen operator, second value, and pressed "="
  else if (calcData.calc.length === 3 && value === "=") {
    const result = calcOperatingFunc(calcData.calc[0], calcData.calc[1], calcData.calc[2]);
    calcData.calc[0] = result;
    calcData.string = String(result);
  }
  //when there are first value, chosen operator, second value, and pressed operator
  else if (calcData.calc.length === 3 && isOperator) {
    const result = calcOperatingFunc(calcData.calc[0], calcData.calc[1], calcData.calc[2]);
    if (value === calcData.calc[1] && !calcData.wasCalc) {
      calcData.string = String(result);
      calcData.calc = [result, value];
    } else {
      calcData.calc[1] = value;
      calcData.calc = [calcData.calc[0], value];
      calcData.wasCalc = false;
    }
    calcData.wasCalc = true;
  }

  console.log(calcData);
  return calcData;
};

