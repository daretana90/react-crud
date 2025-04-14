import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 111,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log("increment")
    },
    decrement: (state) => {
      state.value -= 1;
      console.log("decrement")
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
