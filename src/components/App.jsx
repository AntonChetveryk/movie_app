import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import Header from "./Header/Header";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";
import CallApi from "../api/api";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      user: null,
      session_id: null,
      favorits: [],
      watchlists: [],
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

  updateUser = user => {
    this.setState({
      user
    });
  };

  updateFavorits = favorits => {
    this.setState({
      favorits
    });
  };

  updateWatchlists = watchlists => {
    this.setState({
      watchlists
    });
  };

  updateSessionId = session_id => {
    cookies.set("session_id", session_id, {
      path: "/",
      maxAge: 2592000
    });
    this.setState({
      session_id
    });
  };

  onLogOut = () => {
    cookies.remove("session_id");
    this.setState({
      session_id: null,
      user: null
    });
  };

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

  onChangeTotalPage = total_pages => {
    this.setState({
      total_pages
    });
  };

  onReset = event => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  getFavorites = userID => {
    CallApi.get(`/account/${userID}/favorite/movies`, {
      params: { language: "ru-RU", session_id: this.state.session_id }
    }).then(favorits => this.updateFavorits(favorits.results));
  };

  getWatchlists = userID => {
    CallApi.get(`/account/${userID}/watchlist/movies`, {
      params: { language: "ru-RU", session_id: this.state.session_id }
    }).then(watchlists => this.updateWatchlists(watchlists.results));
  };
  componentDidMount() {
    const session_id = cookies.get("session_id");
    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      )
        .then(user => {
          this.updateUser(user);
          this.updateSessionId(session_id);
        })
        .then(() => this.getWatchlists(this.state.user.id))
        .then(() => this.getFavorites(this.state.user.id));
    }
  }

  render() {
    const {
      filters,
      page,
      total_pages,
      user,
      session_id,
      favorits,
      watchlists
    } = this.state;
    return (
      <AppContext.Provider
        value={{
          user: user,
          updateUser: this.updateUser,
          session_id: session_id,
          updateSessionId: this.updateSessionId,
          onLogOut: this.onLogOut,
          updateFavorits: this.updateFavorits,
          favorits: favorits,
          watchlists: watchlists
        }}
      >
        <div>
          <Header user={user} />
          <div className="container">
            <div className="row mt-4">
              <div className="col-4">
                <div className="card">
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
                  onChangeTotalPage={this.onChangeTotalPage}
                />
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
