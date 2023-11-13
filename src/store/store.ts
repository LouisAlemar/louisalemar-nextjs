"use client";

import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./features/portfolio/portfolioSlice";
import projectsReducer from "./features/projects/projectsSlice";
import techReducer from "./features/tech/techSlice";
import listenerMiddleware from "./listener";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    projects: projectsReducer,
    tech: techReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
