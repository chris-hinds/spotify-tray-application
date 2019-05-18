import React, { useState, useContext, useEffect } from "react";

// contexts
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";

import Electron from "electron";
const { ipcMain } = Electron.remote;

const queryString = require("query-string");

const Login = ({ history }) => {
  const [formValue, setFormValue] = useState("");
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    const currentUrl = window.location.search;
    const authRedirect = queryString.parse(currentUrl);
    const localAccessToken = localStorage.getItem("authToken");
    if (localAccessToken) {
      userDispatch(setUserLogin({ accessToken: localAccessToken }));
      history.push("/player");
    }

    if (authRedirect.access_token) {
      console.log("hello");
      userDispatch(setUserLogin({ accessToken: authRedirect.access_token }));
      history.push("/player");
    }
  }, []);

  const handleLogin = () => {
    if (formValue !== "") {
      // save token to local storage
      localStorage.setItem("authToken", formValue);
      // set login state and start checking for the player
      userDispatch(setUserLogin({ accessToken: formValue }));
      history.push("/player");
    }
  };

  return (
    <div>
      <p className="App-intro">
        Enter your Spotify access token. Get it from{" "}
        <a href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify">
          here
        </a>
        .
      </p>
      <p>
        <input
          type="text"
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleLogin}>Go</button>
      </p>
      {/* <button onClick={() => ipcRenderer.send("open-auth-window")}> */}
      Login With Spotify
      {/* </button> */}
    </div>
  );
};

export default Login;
