import React from "react";
import { useSelector } from "react-redux";
import "./movielist.css";

export function MovieList() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Movie Description</h1>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
        >
          {movie.description}
        </div>
      ))}
    </div>
  );
}

