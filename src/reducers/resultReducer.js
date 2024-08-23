export default function resultReducer(CurrentresultState, action) {
  console.log("calling the reducer", CurrentresultState, action);
  const type = action.type;
  if (type === "add") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) + Number(secondNumber);
  } else if (type === "subtracted") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) - Number(secondNumber);
  } else if (type === "subtracted") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) - Number(secondNumber);
  } else if (type === "multplied") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) * Number(secondNumber);
  } else if (type === "divide") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) / Number(secondNumber);
  }
}
