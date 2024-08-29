// Import the `configureStore` API from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/calcs/calcSlice";
// Create and export the Redux store
export const store = configureStore({
  reducer: {
    calc: calcReducer, //calc is the name we use to access this reducer in the state.
  },
});
