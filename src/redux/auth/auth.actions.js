import * as types from "./auth.types";
import CallApi from "../../api/api";

export const fetchAuth = session_id => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_AUTH
  });
  CallApi.get("/account", {
    params: {
      session_id
    }
  })
    .then(user => {
      dispatch(updateAuth({ user, session_id }));
      dispatch(fetchFavorites({ session_id, user }));
      dispatch(fetchWatchlists({ session_id, user }));
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_ERROR_AUTH,
        payload: error
      });
    });
};

export const updateAuth = ({ session_id, user }) => ({
  type: types.FETCH_SUCCESS_AUTH,
  payload: {
    session_id,
    user
  }
});

export const fetchFavorites = ({ session_id, user }) => dispatch => {
  CallApi.get(`/account/${user.id}/favorite/movies`, {
    params: { language: "ru-RU", session_id: session_id }
  }).then(favorits => {
    dispatch(updateFavoriteMovies(favorits.results));
  });
};

export const updateFavoriteMovies = favorits => {
  return {
    type: types.UPDATE_FAVORITE_MOVIES,
    payload: favorits
  };
};

export const fetchWatchlists = ({ session_id, user }) => dispatch => {
  CallApi.get(`/account/${user.id}/watchlist/movies`, {
    params: { language: "ru-RU", session_id: session_id }
  }).then(watchlists => {
    dispatch(updateWatchlistMovies(watchlists.results));
  });
};

export const updateWatchlistMovies = watchlists => {
  return {
    type: types.UPDATE_WATCHLIST_MOVIES,
    payload: watchlists
  };
};

export const showLoginModal = () => {
  return {
    type: types.SHOW_LOGIN_MODAL
  };
};

export const onLogOut = () => {
  return {
    type: types.LOGOUT
  };
};
