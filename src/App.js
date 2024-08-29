import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide } from "./features/calcs/calcSlice";

function App() {
  const resultState = useSelector((state) => state.calc.result);
  const dispatch = useDispatch();

  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(
      add({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleSubClick() {
    dispatch(
      subtract({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleMultClick() {
    dispatch(
      multiply({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  function handleDivClick() {
    dispatch(
      divide({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
  }

  return (
    <div className="App">
      <div>
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

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

        <h2>{resultState}</h2>
      </div>
    </div>
  );
}

export default App;
