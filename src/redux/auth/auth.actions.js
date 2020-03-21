import * as types from "./auth.types";
import CallApi from "../../api/api";

export const fetchAuth = session_id => dispatch => {
  CallApi.get("/account", {
    params: {
      session_id
    }
  }).then(user => {
    dispatch(updateAuth({ user, session_id }));
  });
};

export const updateAuth = ({ session_id, user }) => ({
  type: types.UPDATE_AUTH,
  payload: {
    session_id,
    user
  }
});

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

export const updateFavoriteMovies = favorits => {
  return {
    type: types.UPDATE_FAVORITE_MOVIES,
    payload: favorits
  };
};

export const updateWatchlistMovies = watchlists => {
  return {
    type: types.UPDATE_WATCHLIST_MOVIES,
    payload: watchlists
  };
};
