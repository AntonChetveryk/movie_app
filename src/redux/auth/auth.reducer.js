import * as types from "./auth.types";
import { cookies } from "../../utils/cookies";

const initialState = {
  user: null,
  session_id: cookies.get("session_id"),
  isShowModal: false,
  favorits: [],
  watchlists: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_AUTH:
      return {
        ...state,
        session_id: action.payload.session_id,
        user: action.payload.user
      };

    case types.LOGOUT:
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
        isShowModal: !state.isShowModal
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
