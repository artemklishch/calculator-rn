import { Decimal } from "decimal.js";

export const calcOperatingFunc = (firstNum, operator, secondNum) => {
  let result;
  switch (operator) {
    case "+":
      result = new Decimal(firstNum).plus(secondNum);
      break;
    case "-":
      result = new Decimal(firstNum).minus(secondNum);
      break;
    case "\u00F7":
      result = firstNum / secondNum;
      break;
    case "x":
      result = new Decimal(firstNum).mul(secondNum);
      break;
  }
  return result;
};
