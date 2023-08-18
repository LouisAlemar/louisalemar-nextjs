"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const portfolio = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset(state) {
      return initialState;
    },
  },
});

export const { increment, decrement, reset } = portfolio.actions;
export default portfolio.reducer;
