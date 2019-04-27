import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// contexts
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";

const Login = ({ history }) => {
  const { userDispatch } = useContext(UserContext);

  useEffect(() => {
    const localAccessToken = localStorage.getItem("authToken");
    if (localAccessToken) {
      userDispatch(setUserLogin({ accessToken: localAccessToken }));
      history.push("/player");
    }
  }, []);

  return (
    <div>
      <h1>Hola</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Login;
