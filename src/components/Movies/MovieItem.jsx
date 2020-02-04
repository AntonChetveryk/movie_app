import React from "react";
import Watchlist from "./Watchlist ";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";

class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <Link className="card-title" to={`/movie/${item.id}`}>
            {item.title}
          </Link>
          <div className="card-text">Рейтинг: {item.vote_average}</div>
          <Favorite item={item} />
          <Watchlist item={item} />
        </div>
      </div>
    );
  }
}

export default MovieItem;
