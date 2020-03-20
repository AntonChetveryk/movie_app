import React from "react";

import Header from "./Header/Header";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";
import CallApi from "../api/api";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateSessionID,
  updateUser,
  showLoginModal,
  onLogOut,
  toggleLoginModal,
  updateFavoriteMovies,
  updateWatchlistMovies
} from "../actions/actions";

export const AppContext = React.createContext();

class App extends React.Component {
  getFavorites = ({ user, session_id }) => {
    CallApi.get(`/account/${user.id}/favorite/movies`, {
      params: { language: "ru-RU", session_id: session_id }
    }).then(favorits => this.props.updateFavoriteMovies(favorits.results));
  };

  getWatchlists = ({ user, session_id }) => {
    CallApi.get(`/account/${user.id}/watchlist/movies`, {
      params: { language: "ru-RU", session_id: session_id }
    }).then(watchlists => this.props.updateWatchlistMovies(watchlists.results));
  };

  componentDidMount() {
    const { session_id } = this.props;

    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then(user => {
        this.props.updateUser(user);
        this.props.updateSessionID(session_id);
        this.getFavorites({ user, session_id });
        this.getWatchlists({ user, session_id });
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user: this.props.user,
            favorits: this.props.favorits,
            watchlists: this.props.watchlists,
            session_id: this.props.session_id,
            showModal: this.props.showModal,
            updateUser: this.props.updateUser,
            updateSessionId: this.props.updateSessionID,
            onLogOut: this.props.onLogOut,
            getFavorites: this.getFavorites,
            getWatchlists: this.getWatchlists,
            showLoginModal: this.props.showLoginModal
          }}
        >
          <div>
            <Header user={this.props.user} />
            <Route exact path="/" component={MoviesPage} />
            <Route path="/movie/:id" component={MoviePage} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    session_id: state.auth.session_id,
    showModal: state.auth.showModal,
    favorits: state.auth.favorits,
    watchlists: state.auth.watchlists
  };
};

const mapDispatchToProps = {
  updateSessionID,
  updateUser,
  onLogOut,
  toggleLoginModal,
  updateFavoriteMovies,
  updateWatchlistMovies,
  showLoginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
