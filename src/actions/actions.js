export const actionCreatorUpdateSessionId = payload => {
  return {
    type: "UPDATE_SESSION_ID",
    payload
  };
};

export const actionCreatorLogOut = () => {
  return {
    type: "LOGOUT"
  };
};

export const actionCreatorShowLoginModal = () => {
  return {
    type: "SHOW_LOGIN_MODAL"
  };
};
