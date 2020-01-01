import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";
import Spinner from "../../img/spinner.gif";
const queryString = require("query-string");

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false
    };
  }
  getMovies = (filters, page) => {
    const { sort_by, primary_release_year, with_genres } = filters;
    const queryStringParams = {
      api_key: API_KEY_3,
      language: "ru-RU",
      sort_by,
      page,
      primary_release_year
    };
    const { onChangeTotalPage } = this.props;
    if (with_genres.length > 0) {
      queryStringParams.with_genres = with_genres.join(",");
    }
    const link = `${API_URL}/discover/movie?${queryString.stringify(
      queryStringParams
    )}`;

    this.setState({
      isLoading: !this.state.isLoading
    });

    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: !this.state.isLoading
        });
        this.setState({
          movies: data.results
        });

        onChangeTotalPage(data.total_pages);
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filters !== prevProps.filters) {
      this.props.onChangePage(1);
      this.getMovies(this.props.filters, 1);
    }
    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div className="row movies-list-container">
        {isLoading ? (
          <img src={Spinner} alt="loading" className="loading" />
        ) : (
          movies.map(movie => {
            return (
              <div key={movie.id} className="col-6 mb-4">
                <MovieItem item={movie} />
              </div>
            );
          })
        )}
      </div>
    );
  }
}
