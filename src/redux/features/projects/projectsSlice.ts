"use client";

import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "@/redux/store";
import { Project } from "@/app/api/interfaces/index";

export const getJobs = createAsyncThunk(
  "projects/getJobs",
  async (_, { dispatch }) => {
    await fetch("/api/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAllJobs(data.projects));
      });
  }
);

const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.projectId,
});

export const projects = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState(),
  reducers: {
    setAllJobs: projectsAdapter.setAll,
    getEverything: () => {},
  },
});

const projectSelectors = projectsAdapter.getSelectors(
  (state: RootState) => state.projects
);

export const { selectIds, selectEntities, selectById, selectTotal, selectAll } =
  projectSelectors;
export const { setAllJobs, getEverything } = projects.actions;
export default projects.reducer;
