"use client";

import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects/projectsSlice";
import listenerMiddleware from "./listener";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
