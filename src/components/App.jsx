import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "2019",
        with_genres: []
      },
      page: 1,
      total_pages: ""
    };
    this.state = this.initialState;
  }

  onChangeFilters = event => {
    const { name, value } = event.target;

    this.setState(state => ({
      filters: {
        ...state.filters,
        [name]: value
      }
    }));
  };

  onChangePage = page => {
    this.setState({
      page
    });
  };

  setTotalPage = total_pages => {
    this.setState({
      total_pages
    });
  };

  onReset = (event, genres) => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  render() {
    const { filters, page, total_pages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  page={page}
                  filters={filters}
                  onChangeFilters={this.onChangeFilters}
                  onChangePage={this.onChangePage}
                  total_pages={total_pages}
                  onReset={this.onReset}
                  setGenre={this.setGenre}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={filters}
              page={page}
              onChangePage={this.onChangePage}
              total_pages={total_pages}
              setTotalPage={this.setTotalPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
