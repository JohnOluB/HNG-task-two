import React, { useState, useEffect } from "react";
import "./App.css";
import MoviesBox from "./MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d2a0f00d548a52e7471c7d2167fc3440";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <div>
      {movies.map((moviesReq) => (
        <MoviesBox />
      ))}
    </div>
  );
}

export default App;
