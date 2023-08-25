"use client";

import {
  createAction,
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "@/redux/store";
import { Project } from "@/app/api/interfaces/index";

const projectsFetchingInProgress = createAction<boolean>(
  "projects/getJobs/inProgress"
);
const projectsFetchingSuccess = createAction<boolean>(
  "projects/getJobs/success"
);
const projectsFetchingError = createAction<boolean>("projects/getJobs/error");

export const getJobs = createAsyncThunk(
  "projects/getJobs",
  async (_, { dispatch }) => {
    const response = await fetch("/api/", {
      method: "GET",
    });

    const data = await response.json();
    dispatch(setAllJobs(data.projects));
  }
);

const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.projectId,
});

export const projects = createSlice({
  name: "projects",
  initialState: projectsAdapter.getInitialState({
    projectsFetchingInProgress: false,
    projectsFetchingSuccess: false,
    projectsFetchingError: false,
  }),
  reducers: {
    setAllJobs: projectsAdapter.setAll,
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state, action) => {
      state.projectsFetchingInProgress = true;
    }),
      builder.addCase(getJobs.fulfilled, (state, action) => {
        state.projectsFetchingSuccess = true;
        state.projectsFetchingInProgress = false;
      }),
      builder.addCase(getJobs.rejected, (state, action) => {
        state.projectsFetchingError = true;
        state.projectsFetchingInProgress = false;
      });
  },
});

const projectSelectors = projectsAdapter.getSelectors(
  (state: RootState) => state.projects
);

export const { selectIds, selectEntities, selectById, selectTotal, selectAll } =
  projectSelectors;
export const { setAllJobs } = projects.actions;
export default projects.reducer;
