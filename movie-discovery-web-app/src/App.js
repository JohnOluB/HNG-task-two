import React, { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      {movies.map((moviesReq) => (
        <MoviesBox />
      ))}
    </div>
  );
}

export default App;
