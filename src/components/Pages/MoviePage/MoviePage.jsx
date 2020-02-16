import React from "react";
import CallApi from "../../../api/api";
import Watchlist from "../../Movies/Watchlist ";
import Favorite from "../../Movies/Favorite";
import Tabs from "./Tabs/Tabs";

export default class MoviePage extends React.Component {
  state = {
    movie: {}
  };
  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ movie: res }));
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
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
            <Favorite item={movie} />
            <Watchlist item={movie} />
          </div>
        </div>
        <Tabs item={movie} />
      </div>
    );
  }
}
