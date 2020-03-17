import Cookies from "universal-cookie";

const initialState = {
  user: null,
  session_id: null
};

const cookies = new Cookies();

const updateSessionId = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default updateSessionId;
