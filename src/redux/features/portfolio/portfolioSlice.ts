"use client";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "@/redux/store";
import { Project } from "@/app/api/interfaces/index";

const portfolioAdapter = createEntityAdapter<Project>({
  selectId: (portfolio) => portfolio.projectId,
});

export const portfolio = createSlice({
  name: "portfolio",
  initialState: portfolioAdapter.getInitialState(),
  reducers: {
    setAllJobs: portfolioAdapter.setAll,
    getPortfolioItems: () => {},
  },
});

const projectSelectors = portfolioAdapter.getSelectors(
  (state: RootState) => state.projects
);

export const { selectIds, selectEntities, selectById, selectTotal, selectAll } =
  projectSelectors;
export const { setAllJobs, getPortfolioItems } = portfolio.actions;
export default portfolio.reducer;
