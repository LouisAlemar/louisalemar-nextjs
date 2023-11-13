"use client";

import {
  createAction,
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "@/store/store";
import { Tech } from "@/app/api/interfaces/index";

const techFetchingInProgress = createAction<boolean>("tech/getTech/inProgress");
const techFetchingSuccess = createAction<boolean>("tech/getTech/success");
const techFetchingError = createAction<boolean>("tech/getTech/error");

export const getTech = createAsyncThunk(
  "tech/getTech",
  async (_, { dispatch }) => {
    const response = await fetch("/api/", {
      method: "GET",
    });

    const data = await response.json();
    dispatch(setAllTech(data.tech));
  }
);

const techAdapter = createEntityAdapter<Tech>({
  selectId: (project) => project.type,
});

export const tech = createSlice({
  name: "tech",
  initialState: techAdapter.getInitialState({
    techFetchingInProgress: true,
    techFetchingSuccess: false,
    techFetchingError: false,
  }),
  reducers: {
    setAllTech: techAdapter.setAll,
  },
});

const techSelectors = techAdapter.getSelectors(
  (state: RootState) => state.tech
);

export const { selectIds, selectEntities, selectById, selectTotal, selectAll } =
  techSelectors;
export const { setAllTech } = tech.actions;
export default tech.reducer;
