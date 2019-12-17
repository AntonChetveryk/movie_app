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
        genre: ""
      },
      page: 1,
      total_pages: ""
    };
    this.state = this.initialState;
  }

  onChangeFilters = event => {
    //console.log("OnChange", event.target.name, event.target.value);
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState(state => ({
      filters: newFilters
    }));
  };

  onChangePage = page => {
    this.setState({
      // page: page
      page
    });
  };

  setTotalPage = total_pages => {
    this.setState({
      total_pages
    });
  };

  onReset = event => {
    console.log("onReset");
    event.preventDefault();
    this.setState(this.initialState);
  };

  setGenre = genres => {
    this.setState({
      filters: {
        ...this.state.filters,
        genres
      }
    });
  };

  render() {
    //console.log("App render");
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
