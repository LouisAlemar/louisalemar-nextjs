"use client";

import {
  createAction,
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { Project } from "@/api/interfaces/index";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const loading = createAction<boolean>("loading");

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { dispatch }) => {
    const data = await fetch("projects.json").then((res) => res.json());
    dispatch(setAllProjects(data.projects));
  }
);

const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.projectId,
});

export const projects = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState({ loading: false }),
  reducers: {
    setAllProjects: projectsAdapter.setAll,
  },
  extraReducers(builder) {
    builder.addCase(loading, (state, action) => {
      state.loading = true;
    });
  },
});

export const { setAllProjects } = projects.actions;
export default projects.reducer;
