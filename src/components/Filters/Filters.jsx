import React from "react";
import SortBy from "./SortBy";
import SortByYears from "./SortByYears";
import Pagination from "./Pagination";
import GenresContainer from "./GenresContainer";

export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year, with_genres },
      onChangeFilters,
      onChangePage,
      page,
      total_pages,
      onReset
    } = this.props;
    return (
      <form className="mb-3">
        <button type="button" className="btn btn-light mb-2" onClick={onReset}>
          Сбросить фильтры
        </button>
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortByYears
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />

        <h3>Жанры:</h3>
        <GenresContainer
          onChangeFilters={onChangeFilters}
          with_genres={with_genres}
        />
        <Pagination
          page={page}
          onChangePage={onChangePage}
          total_pages={total_pages}
        />
      </form>
    );
  }
}
