import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// contexts
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";

const Login = ({ history }) => {
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    console.log("hola, landing page here");
    const localAccessToken = localStorage.getItem("authToken");
    if (localAccessToken) {
      console.log(`got local access token`);
      userDispatch(setUserLogin({ accessToken: localAccessToken }));
      history.push("/player");
    } else {
      console.log("No token, time to gte a new one");
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
