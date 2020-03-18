import React from "react";

import Header from "./Header/Header";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";
import CallApi from "../api/api";
import Cookies from "universal-cookie";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  actionCreatorLogOut,
  actionCreatorUpdateSessionId
} from "../actions/actions";

const cookies = new Cookies();

export const AppContext = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      user: null,
      session_id: null,
      favorits: [],
      watchlists: [],
      showModal: false
    };
    this.state = this.initialState;
  }

  showLoginModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

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
      user: null,
      favorits: [],
      watchlists: []
    });
  };

  getFavorites = ({ user, session_id }) => {
    CallApi.get(`/account/${user.id}/favorite/movies`, {
      params: { language: "ru-RU", session_id: session_id }
    }).then(favorits => this.updateFavorits(favorits.results));
  };

  getWatchlists = ({ user, session_id }) => {
    CallApi.get(`/account/${user.id}/watchlist/movies`, {
      params: { language: "ru-RU", session_id: session_id }
    }).then(watchlists => this.updateWatchlists(watchlists.results));
  };

  componentDidMount() {
    const { session_id } = this.state;
    if (session_id) {
      fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then(user => {
        this.updateUser(user);
        this.updateSessionId(session_id);
        this.getFavorites({ user, session_id });
        this.getWatchlists({ user, session_id });
      });
    }
  }

  render() {
    const { user, favorits, watchlists, showModal } = this.state;
    const { session_id, updateSessionId } = this.props;

    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user: user,
            favorits: favorits,
            watchlists: watchlists,
            session_id,
            showModal: showModal,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId,
            onLogOut: this.onLogOut,
            updateFavorits: this.updateFavorits,
            getFavorites: this.getFavorites,
            getWatchlists: this.getWatchlists,
            showLoginModal: this.showLoginModal
          }}
        >
          <div>
            <Header user={user} />
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
    session_id: state.session_id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSessionId: session_id =>
      dispatch(
        actionCreatorUpdateSessionId({
          session_id
        })
      )
    //onLogOut: () => dispatch(actionCreatorLogOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
