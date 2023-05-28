import { createSlice } from "@reduxjs/toolkit";
import { fetchmovies } from "./Action";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "Movies",
  initialState: initialState, // Corrected the property name
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchmovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchmovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchmovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
