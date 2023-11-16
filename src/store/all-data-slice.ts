"use client";

import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import { Service, Project, Testimonial } from "@/app/api/interfaces/index";

interface AllData {
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
}

interface DataState {
  allData: AllData;
  loading: boolean;
  error: string | null | undefined
}

const initialAllData: AllData = {
  services: [],
  projects: [],
  testimonials: [],
};

const initialState: DataState = {
  allData: initialAllData,
  loading: false,
  error: null
}

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('/api/')
    const data = await response.json()

    return data.data
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default dataSlice.reducer;
