"use client";

import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import { Testimonial } from "@/app/api/interfaces/index";

interface DataState {
  data: Testimonial[];
  loading: boolean;
  error: string | null | undefined
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null
}

export const getTestimonials = createAsyncThunk(
  'data/getTestimonials',
  async () => {
    const response = await fetch('/api/testimonials/')
    const data = await response.json()
    console.log(data)

    return data
  }
)

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default testimonialsSlice.reducer;
