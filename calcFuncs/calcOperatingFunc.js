//this is calculating with using decimal.js library 
//- which removes incorrect calculating in case of no integer numbers
//can`t be used according to task conditions

// import { Decimal } from "decimal.js";

// export const calcOperatingFunc = (firstNum, operator, secondNum) => {
//   let result;
//   switch (operator) {
//     case "+":
//       result = new Decimal(firstNum).plus(secondNum);
//       break;
//     case "-":
//       result = new Decimal(firstNum).minus(secondNum);
//       break;
//     case "\u00F7":
//       result = firstNum / secondNum;
//       break;
//     case "x":
//       result = new Decimal(firstNum).mul(secondNum);
//       break;
//   }
//   return result;
// };


//this is calculating without using decimal.js library - incorrect calculating fixed by using math remedies
export const calcOperatingFunc = (firstNum, operator, secondNum) => {
  let result;
  const accessMultNum = 10000000000000000;
  switch (operator) {
    case "+":
      result = (firstNum * accessMultNum + secondNum * accessMultNum) / accessMultNum;
      break;
    case "-":
      result = (firstNum * accessMultNum - secondNum * accessMultNum) / accessMultNum;
      break;
    case "\u00F7":
      result = firstNum / secondNum;
      break;
    case "x":
      result = ((firstNum * accessMultNum) * secondNum) / accessMultNum;
      break;
  }
  return result;
};
