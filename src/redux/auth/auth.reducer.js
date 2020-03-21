import * as types from "./auth.types";
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
    case types.UPDATE_AUTH:
      cookies.set("session_id", action.payload.session_id, {
        path: "/",
        maxAge: 2592000
      });
      return {
        ...state,
        session_id: action.payload.session_id,
        user: action.payload.user
      };

    case types.LOGOUT:
      cookies.remove("session_id");
      return {
        ...state,
        session_id: null,
        user: null,
        favorits: [],
        watchlists: []
      };

    case types.SHOW_LOGIN_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };

    case types.UPDATE_FAVORITE_MOVIES:
      return {
        ...state,
        favorits: action.payload
      };
    case types.UPDATE_WATCHLIST_MOVIES:
      return {
        ...state,
        watchlists: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
