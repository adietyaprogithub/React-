import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchmovies = createAsyncThunk("movies/fetchmovies", async () => {
  const responce = await axios.get(
    "https://www.omdbapi.com/?s=action&apikey=2d76f021&page=1"
  );
  return responce.data.Search;
});
