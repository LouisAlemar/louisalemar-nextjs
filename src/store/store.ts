"use client";

import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from './features/services/servicesSlice';
import testimonialsReducer from './features/testimonials/testimonialsSlice';
import workReducer from './features/work/workSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    work: workReducer,
    testimonials: testimonialsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
