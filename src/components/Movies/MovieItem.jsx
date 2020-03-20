import React from "react";
import Watchlist from "./Watchlist ";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";
import NoPhoto from "../../img/no-photo.png";

class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        {movie.backdrop_path || movie.poster_path ? (
          <img
            className="card-img-top card-img--height"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
              movie.poster_path}`}
            alt=""
          />
        ) : (
          <img className="card-img-top card-img--height" src={NoPhoto} alt="" />
        )}

        <div className="card-body">
          <Link className="card-title" to={`/movie/${movie.id}`}>
            {movie.title}
          </Link>
          <div className="card-text">Рейтинг: {movie.vote_average}</div>
          <Favorite movie={movie} />
          <Watchlist movie={movie} />
        </div>
      </div>
    );
  }
}

export default MovieItem;
