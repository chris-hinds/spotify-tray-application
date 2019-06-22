import React, { useContext, useEffect } from "react";

// contexts
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";
import { ipcRenderer } from "electron";

const Login = ({ history }) => {
  const { userDispatch } = useContext(UserContext);

  useEffect(() => {
    const localAccessToken = localStorage.getItem("authToken");
    if (localAccessToken) {
      userDispatch(setUserLogin({ accessToken: localAccessToken }));
      history.push("/player");
    }

    ipcRenderer.on("auth-received", handleLogin);
  }, []);

  const handleLogin = (e, data) => {
    const { accessToken, refreshToken } = data;
    if (accessToken && refreshToken) {
      userDispatch(
        setUserLogin({
          accessToken: accessToken,
          refreshToken: refreshToken
        })
      );
      history.push("/player");
    }
  };

  return (
    <div>
      <button onClick={() => ipcRenderer.send("open-auth-window")}>
        Login With Spotify
      </button>
    </div>
  );
};

export default Login;
