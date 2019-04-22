import React, { createContext, useReducer } from "react";

// reducer
import { userReducer } from "../reducers/userReducer";

const INITIAL_USER_STATE = {
  loggedIn: false,
  accessToken: "",
  deviceId: null
};

const UserContext = createContext();

const UserContextProvider = props => {
  const [userState, userDispatch] = useReducer(userReducer, INITIAL_USER_STATE);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
