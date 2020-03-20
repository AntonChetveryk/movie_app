export const updateSessionID = session_id => {
  return {
    type: "UPDATE_SESSION_ID",
    session_id
  };
};

export const updateUser = user => {
  return {
    type: "UPDATE_USER",
    user
  };
};

export const showLoginModal = () => {
  return {
    type: "SHOW_LOGIN_MODAL"
  };
};

export const onLogOut = () => {
  return {
    type: "LOGOUT"
  };
};

export const toggleLoginModal = () => {
  return {
    type: "TOGGLE_LOGIN_MODAL"
  };
};

export const updateFavoriteMovies = favorits => {
  return {
    type: "UPDATE_FAVORITE_MOVIES",
    favorits
  };
};

export const updateWatchlistMovies = watchlists => {
  return {
    type: "UPDATE_WATCHLIST_MOVIES",
    watchlists
  };
};
