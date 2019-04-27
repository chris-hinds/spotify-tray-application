import React, { useState, useContext, useEffect } from "react";

// contexts
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";

const Login = ({ history }) => {
  const [formValue, setFormValue] = useState("");
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    console.log("hola, login page here");
    const localAccessToken = localStorage.getItem("authToken");
    if (localAccessToken) {
      console.log(`got local access token`);
      userDispatch(setUserLogin({ accessToken: localAccessToken }));
      console.log(userState);
      history.push("/player");
    } else {
      console.log("No token, time to gte a new one");
    }
  }, []);

  const handleLogin = () => {
    console.log("dave");
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
    </div>
  );
};

export default Login;
