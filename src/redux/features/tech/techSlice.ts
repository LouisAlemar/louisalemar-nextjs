"use client";

import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { RootState, AppDispatch } from "@/redux/store";
import { Tech } from "@/app/api/interfaces/index";

export const getTech = createAsyncThunk(
  "tech/getTech",
  async (_, { dispatch }) => {
    await fetch("/api/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAllTech(data.tech));
      });
  }
);

const techAdapter = createEntityAdapter<Tech>({
  selectId: (project) => project.type,
});

export const tech = createSlice({
  name: "tech",
  initialState: techAdapter.getInitialState(),
  reducers: {
    setAllTech: techAdapter.setAll,
    getEverything: () => {},
  },
});

const techSelectors = techAdapter.getSelectors(
  (state: RootState) => state.tech
);

export const { selectIds, selectEntities, selectById, selectTotal, selectAll } =
  techSelectors;
export const { setAllTech, getEverything } = tech.actions;
export default tech.reducer;
