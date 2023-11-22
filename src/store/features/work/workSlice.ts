"use client";

import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import { Project } from "@/app/api/interfaces/index";

interface DataState {
  data: Project[];
  loading: boolean;
  error: string | null | undefined
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null
}

export const getWork = createAsyncThunk(
  'data/getWork',
  async () => {
    const response = await fetch('/api/work/')
    const data = await response.json()
    console.log(data)

    return data
  }
)

export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWork.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWork.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getWork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default workSlice.reducer;
