import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  showLoginModal: false,
  favorits: [],
  watchlists: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SESSION_ID":
      cookies.set("session_id", action.payload.session_id, {
        path: "/",
        maxAge: 2592000
      });
      return {
        ...state,
        session_id: action.payload.session_id
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user
      };
    case "SHOW_LOGIN_MODAL":
      return {
        ...state,
        showModal: action.payload.showModal
      };

    case "LOGOUT":
      cookies.remove("session_id");
      return {
        ...state,
        session_id: null,
        user: null
      };
    case "TOGGLE_LOGIN_MODAL":
      return {
        ...state,
        showLoginModal: !state.showLoginModal
      };
    case "UPDATE_FAVORITE_MOVIES":
      console.log("favorits");
      return {
        ...state,
        favorits: action.favorits
      };
    case "UPDATE_WATCHLIST_MOVIES":
      console.log("watchList");
      return {
        ...state,
        watchlists: action.watchlists
      };
    default:
      return state;
  }
};

export default authReducer;
