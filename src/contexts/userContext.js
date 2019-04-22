import React, { createContext, useReducer } from "react";
import * as Constants from "../contsants";

// reducer
import { userReducer } from "../reducers/userReducer";

const UserContext = createContext();

const UserContextProvider = props => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    Constants.INITIAL_USER_STATE
  );

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };
