import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

// Create the Slice
export const calcSlice = createSlice({
  name: "calc", // Name of the slice
  initialState: initialState, // Initial state of the slice
  reducers: {
    // Addition function
    add: (currentState, action) => {
      // Calculate the sum of the two numbers passed in the action payload
      const sum =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
      // Update the result in the current state
      currentState.result = sum;
    },
    // Subtraction function
    subtract: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      // Calculate the difference and update the result in the current state
      currentState.result = firstNumber - secondNumber;
    },
    // Multiplication function
    multiply: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      // Calculate the product and update the result in the current state
      currentState.result = firstNumber * secondNumber;
    },
    // Division function
    divide: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      // Calculate the quotient and update the result in the current state
      currentState.result = firstNumber / secondNumber;
    },
  },
});

// Extract actions for use in components
export const { add, subtract, multiply, divide } = calcSlice.actions;

// Export the reducer for use in the store
export default calcSlice.reducer;
