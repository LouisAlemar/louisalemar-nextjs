"use client";

import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './all-data-slice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
