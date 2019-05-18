import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

// contexts
import { UserContext } from "../contexts/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userState } = useContext(UserContext);
  const { accessToken } = userState;

  return (
    <Route
      {...rest}
      render={props =>
        accessToken ? <Component {...props} {...rest} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
