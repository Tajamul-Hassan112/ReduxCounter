import { createSlice } from "@reduxjs/toolkit"; // ✅ correct

const initialState = {
  value: 0,
};
export const CounterSlice = createSlice({
  //naame of our slice
  name: "counter",
  //initialState of our slice .
  initialState,
  //reducers:functioanlity to implement .
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

//extracting the functionality/action of our slice from the actions.
export const { increment, decrement, reset } = CounterSlice.actions;
//exporting the reducers from reducer of our CounterSlice.
export default CounterSlice.reducer;
