import React from "react";
import SortBy from "./SortBy";
import SortByYears from "./SortByYears";
import Pagination from "./Pagination";
import { API_KEY_3 } from "../../api/api";
import Genres from "./Genres";

export default class Filters extends React.Component {
  constructor() {
    super();
    this.initialState = {
      genres: []
    };
    this.state = this.initialState;
  }

  getGenres = () => {
    const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          genres: data.genres
        });
        //console.log(data.genres);
      });
  };

  componentDidMount() {
    this.getGenres();
  }

  render() {
    //console.log("Filters render");
    const {
      filters: { sort_by, primary_release_year, with_genres },
      onChangeFilters,
      onChangePage,
      page,
      total_pages,
      onReset,
      filters
    } = this.props;
    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortByYears
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <button type="button" className="mb-2" onClick={onReset}>
          Сбросить фильтры
        </button>
        <Pagination
          page={page}
          onChangePage={onChangePage}
          total_pages={total_pages}
          onChangeFilters={onChangeFilters}
          with_genres={with_genres}
        />
        <Genres
          onChangeFilters={onChangeFilters}
          genres={this.state.genres}
          with_genres={with_genres}
          filters={filters}
        />
      </form>
    );
  }
}
