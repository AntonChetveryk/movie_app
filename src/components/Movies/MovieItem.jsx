import React from "react";
//import CallApi from "../../api/api";
import starFalse from "../../img/star_border-24px.svg";
import starTrue from "../../img/star-24px.svg";
import bookmarkTrue from "../../img/bookmark-24px.svg";
import bookmarkFalse from "../../img/bookmark_border-24px.svg";

import AppContextHOC from "../HOC/AppContextHOC";
import CallApi from "../../api/api";

class MovieItem extends React.Component {
  state = {
    favorite: false,
    watchlist: false
  };

  onClickStar = () => {
    const API_KEY_3 = "b3ff350532467eb0b07cf18d16f4a254";
    const session_id = this.props.session_id;
    const link = `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`;

    this.setState(prevState => ({
      favorite: !prevState.favorite
    }));
    console.log(this.props.movie_id);
    fetch(link)
      .then(response => response.json())
      .then(account => account.id)
      .then(accountId =>
        CallApi.post(`/account/${accountId}/favorite`, {
          params: {
            session_id: this.props.session_id
          },
          body: {
            media_type: "movie",
            media_id: this.props.movie_id,
            favorite: true
          }
        })
      );
  };

  onClickBookmark = () => {
    const API_KEY_3 = "b3ff350532467eb0b07cf18d16f4a254";
    const session_id = this.props.session_id;
    const link = `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`;

    this.setState(prevState => ({
      watchlist: !prevState.watchlist
    }));
    fetch(link)
      .then(response => response.json())
      .then(account => account.id)
      .then(accountId =>
        CallApi.post(`/account/${accountId}/watchlist`, {
          params: {
            session_id: this.props.session_id
          },
          body: {
            media_type: "movie",
            media_id: this.props.movie_id,
            watchlist: true
          }
        })
      );
  };

  render() {
    const { item } = this.props;
    const { favorite, watchlist } = this.state;
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
          <img
            src={favorite ? starTrue : starFalse}
            alt="star"
            onClick={this.onClickStar}
          />
          <img
            src={watchlist ? bookmarkTrue : bookmarkFalse}
            alt="bookmark"
            onClick={this.onClickBookmark}
          />
        </div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);
