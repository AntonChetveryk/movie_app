import * as types from "./auth.types";

export const updateSessionId = session_id => {
  return {
    type: types.UPDATE_SESSION_ID,
    session_id
  };
};

export const updateUser = user => {
  return {
    type: types.UPDATE_USER,
    user
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

export const updateFavoriteMovies = favorits => {
  return {
    type: types.UPDATE_FAVORITE_MOVIES,
    favorits
  };
};

export const updateWatchlistMovies = watchlists => {
  return {
    type: types.UPDATE_WATCHLIST_MOVIES,
    watchlists
  };
};
