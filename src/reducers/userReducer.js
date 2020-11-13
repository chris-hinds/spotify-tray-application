import * as Constants from "../contsants";

const setUserLogin = (data) => ({
  type: Constants.ACTION_SET_USER_LOGIN,
  data,
});

const setUserLogout = (data) => ({
  type: Constants.ACTION_SET_USER_LOGOUT,
  data,
});

const userReducer = (playerState, action) => {
  const { data, type } = action;

  switch (type) {
    case Constants.ACTION_SET_USER_LOGIN:
      return {
        ...playerState,
        ...data,
      };
    case Constants.ACTION_SET_USER_LOGOUT:
      return Constants.INITIAL_USER_STATE;
    default:
      return playerState;
  }
};

export { userReducer, setUserLogin, setUserLogout };
