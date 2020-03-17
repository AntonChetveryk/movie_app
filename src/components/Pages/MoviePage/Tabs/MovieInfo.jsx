import React from "react";
import Watchlist from "../../../Movies/Watchlist ";
import Favorite from "../../../Movies/Favorite";
import Img from "../../../UI/Img";

const MovieInfo = ({ movie }) => (
  <div className="row mt-4">
    <div className="col-3">
      <Img poster_path={movie.poster_path} />
    </div>
    <div className="col-9">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Favorite movie={movie} />
      <Watchlist movie={movie} />
    </div>
  </div>
);

export default MovieInfo;
