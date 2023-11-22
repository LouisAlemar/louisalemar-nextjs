"use client";

import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import { Service } from "@/app/api/interfaces/index";

interface DataState {
  data: Service[];
  loading: boolean;
  error: string | null | undefined
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null
}

export const getServices = createAsyncThunk(
  'data/getServices',
  async () => {
    const response = await fetch('/api/services/')
    const data = await response.json()
    console.log(data)

    return data
  }
)

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default servicesSlice.reducer;
