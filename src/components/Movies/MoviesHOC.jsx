import React from "react";
import CallApi from "../../api/api";

export default Component =>
  class MovieHOC extends React.Component {
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
        language: "ru-RU",
        sort_by,
        page,
        primary_release_year
      };

      const { onChangeTotalPage } = this.props;

      if (with_genres.length > 0) {
        queryStringParams.with_genres = with_genres.join(",");
      }

      this.setState({
        isLoading: !this.state.isLoading
      });

      CallApi.get("/discover/movie", {
        params: queryStringParams
      }).then(data => {
        this.setState({
          isLoading: !this.state.isLoading,
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
        <Component {...this.props} movies={movies} isLoading={isLoading} />
      );
    }
  };
