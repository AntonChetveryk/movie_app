import React from "react";
import CallApi from "../../../api/api";
import { Link } from "react-router-dom";

export default class Videos extends React.Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const { item } = this.props;
    CallApi.get(`/movie/${item.id}/videos`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ movies: res.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map(movie => {
          return (
            <div className="card">
              {/* <img
                className="card-img-top card-img--height"
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                  item.poster_path}`}
                alt=""
              /> */}
              <div className="card-body">
                <Link className="card-title" to={`/movie/${movie.id}`}>
                  {movie.name}
                </Link>
                <div className="card-text">Рейтинг: {movie.name}</div>
                {/* <Favorite item={item} />
                <Watchlist item={item} /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
