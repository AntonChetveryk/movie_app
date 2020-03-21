import React from "react";

import Header from "./Header/Header";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import CallApi from "../api/api";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAuth,
  showLoginModal,
  onLogOut,
  updateFavoriteMovies,
  updateWatchlistMovies,
  fetchAuth
} from "../redux/auth/auth.actions";

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
    const { session_id, fetchAuth } = this.props;

    if (session_id) {
      fetchAuth(session_id);
    }
  }

  render() {
    const {
      user,
      session_id,
      updateAuth,
      onLogOut,
      showLoginModal,
      showModal,
      favorits,
      watchlists
    } = this.props;

    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user: user,
            favorits: favorits,
            watchlists: watchlists,
            session_id: session_id,
            showModal: showModal,
            updateAuth: updateAuth,
            onLogOut: onLogOut,
            showLoginModal: showLoginModal,
            getFavorites: this.getFavorites,
            getWatchlists: this.getWatchlists
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
  updateAuth,
  onLogOut,
  updateFavoriteMovies,
  updateWatchlistMovies,
  showLoginModal,
  fetchAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
