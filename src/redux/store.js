import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Slices/CounterSlice"; // ✅ CORRECT


//store is the global container , that contains data of our all the slices .
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
