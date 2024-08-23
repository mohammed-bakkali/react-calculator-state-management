import logo from "./logo.svg";
import "./App.css";

import { useState, useReducer } from "react";
import { type } from "@testing-library/user-event/dist/type";

function resultReducer(CurrentresultState, action) {
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
  }
  else if (type === "divide") {
    const { firstNumber, secondNumber } = action.payload;
    return Number(firstNumber) / Number(secondNumber);
  }
}

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);
  const [result, setResult] = useState(null);

  const [result2, dispatch] = useReducer(resultReducer, 10);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch({
      type: "add",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }

  function handleSubClick() {
    dispatch({
      type: "subtracted",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }

  function handleMultClick() {
    dispatch({
      type: "multplied",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }

  function handleDivClick() {
    dispatch({
      type: "divide",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }

  return (
    <div className="App">
      <div style={{}}>
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{result}</h2>
        <h2>{result2}</h2>
      </div>
    </div>
  );
}

export default App;
