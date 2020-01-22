import React from "react";
import Watchlist from "./Watchlist ";
import Favorite from "./Favorite";
import AppContextHOC from "../HOC/AppContextHOC";
//import CallApi from "../../api/api";

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
          <h6 className="card-title">{item.title}</h6>
          <div className="card-text">Рейтинг: {item.vote_average}</div>
          <Favorite />
          <Watchlist />
        </div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);
