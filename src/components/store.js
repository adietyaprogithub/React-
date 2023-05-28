import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import moviereducer from "./moviereducer";

const store = configureStore({
  reducer: {
    movies: moviereducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
