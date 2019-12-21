import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }
  getMovies = (filters, page) => {
    const { sort_by, primary_release_year, with_genres } = filters;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${+primary_release_year}&with_genres=${with_genres.join(
      ","
    )}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({
          movies: data.results
        });
        //console.log("render");
        this.props.setTotalPage(data.total_pages);
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.filters.sort_by !== this.props.filters.sort_by) {
  //     this.getMovies(nextProps.filters);
  //   }
  // }
  componentDidUpdate(prevProps) {
    //console.log("props: ", this.props);
    //console.log("prevProps: ", prevProps);

    if (
      this.props.filters.sort_by !== prevProps.filters.sort_by ||
      this.props.filters.primary_release_year !==
        prevProps.filters.primary_release_year ||
      this.props.filters.with_genres !== prevProps.filters.with_genres
    ) {
      this.props.onChangePage(1);
      this.getMovies(this.props.filters, 1);
    }
    if (this.props.page !== prevProps.page) {
      this.getMovies(this.props.filters, this.props.page);
    }
  }

  render() {
    //console.log("ML render");
    const { movies } = this.state;
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
