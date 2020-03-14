import React from "react";
import Watchlist from "../../../Movies/Watchlist ";
import Favorite from "../../../Movies/Favorite";

const MovieInfo = ({ movie }) => (
  <div className="row mt-4">
    <div className="col-3">
      <img
        className="card-img-top card-img--height"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path || ""}`}
        alt=""
      />
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
