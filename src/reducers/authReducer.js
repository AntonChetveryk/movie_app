import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showModal: false,
  favorits: [],
  watchlists: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SESSION_ID":
      cookies.set("session_id", action.session_id, {
        path: "/",
        maxAge: 2592000
      });
      return {
        ...state,
        session_id: action.session_id
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.user
      };

    case "LOGOUT":
      cookies.remove("session_id");
      return {
        ...state,
        session_id: null,
        user: null,
        favorits: [],
        watchlists: []
      };

    case "SHOW_LOGIN_MODAL":
      return {
        ...state,
        showModal: !state.showModal
      };

    case "UPDATE_FAVORITE_MOVIES":
      return {
        ...state,
        favorits: action.favorits
      };
    case "UPDATE_WATCHLIST_MOVIES":
      return {
        ...state,
        watchlists: action.watchlists
      };
    default:
      return state;
  }
};

export default authReducer;
