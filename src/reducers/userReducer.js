import * as Constants from "../contsants";

const setAccessToken = data => ({
  type: Constants.ACTION_SET_ACCESS_TOKEN,
  data
});

const setUserLogin = data => ({
  type: Constants.ACTION_SET_USER_LOGIN,
  data
});

const userReducer = (playerState, action) => {
  const { data, type } = action;

  switch (type) {
    case Constants.ACTION_SET_ACCESS_TOKEN:
      return { ...playerState, accessToken: data };
    case Constants.ACTION_SET_USER_LOGIN:
      return {
        ...playerState,
        ...data
      };
    default:
      return playerState;
  }
};

export { userReducer, setAccessToken, setUserLogin };
