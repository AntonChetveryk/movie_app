import React from "react";
import MovieItem from "./MovieItem";
import Spinner from "../../img/spinner.gif";
import PropTypes from "prop-types";
import MoviesHOC from "./MoviesHOC";

const MoviesList = ({ movies, isLoading }) => (
  <div className="row movies-list-container">
    {isLoading ? (
      <img src={Spinner} alt="loading" className="loading" />
    ) : (
      movies.map(movie => {
        return (
          <div key={movie.id} className="col-6 mb-4">
            <MovieItem movie={movie} movie_id={movie.id} />
          </div>
        );
      })
    )}
  </div>
);

MoviesList.defaultProps = {
  movies: []
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesHOC(MoviesList);
