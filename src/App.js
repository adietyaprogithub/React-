import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchmovies } from "./components/Action";

export default function App() {
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error ....</div>;
  }

  return (
    <div>
      <h2>Movies :</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title } {movie.Year}</li>
        ))}
      </ul>
    </div>
  );
}
