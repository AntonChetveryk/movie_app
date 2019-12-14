import React from "react";
import SortBy from "./SortBy";
import SortByYears from "./SortByYears";
import Pagination from "./Pagination";

export default class Filters extends React.Component {
  render() {
    //console.log("Filters render");
    const {
      filters: { sort_by, primary_release_year },
      onChangeFilters,
      onChangePage,
      page,
      total_pages,
      onReset
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
        />
      </form>
    );
  }
}
