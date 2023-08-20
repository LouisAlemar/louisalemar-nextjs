"use client";

import {
  createAction,
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { Project } from "@/app/api/interfaces/index";

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
    const data = await fetch("/api/", {
      method: "GET",
    }).then((res) => res.json());
    dispatch(setAllProjects(data.projects));
  }
);

// export const fetchProjects = createAsyncThunk(
//   "projects/fetchProjects",
//   async () => {
//     return fetch("/api/", {
//       method: "GET",
//     });
//   }
// );

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

export const projectSelectors = projectsAdapter.getSelectors(
  (state: RootState) => state.projects
);

export const { setAllProjects } = projects.actions;
export default projects.reducer;
