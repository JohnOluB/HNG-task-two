import React from "react";

const API_IMG = "https://image.themoviedb.org/3/network/{network_id}/images";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={API_IMG + poster_path}></img>
    </div>
  );
};
export default MovieBox;
