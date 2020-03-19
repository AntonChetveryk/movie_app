export const updateSessionID = ({ session_id }) => {
  return {
    type: "UPDATE_SESSION_ID",
    payload: {
      session_id
    }
  };
};

export const updateUser = ({ user }) => {
  return {
    type: "UPDATE_USER",
    payload: {
      user
    }
  };
};

export const showLoginModal = payload => {
  return {
    type: "SHOW_LOGIN_MODAL",
    payload
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
