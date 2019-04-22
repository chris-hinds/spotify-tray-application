import React, { useState, useContext, useEffect } from "react";
import Player from "../player";

// contexts & actions
import { PlayerContext } from "../../contexts/playerContext";
import { playerUpdate } from "../../reducers/playerReducer";
import { UserContext } from "../../contexts/userContext";
import { setUserLogin } from "../../reducers/userReducer";

const App = () => {
  const { localState, setLocalState } = useState();
  const { userState, userDispatch } = useContext(UserContext);
  const { playerDispatch } = useContext(PlayerContext);

  const { loggedIn, accessToken, deviceId } = userState;

  let playerCheckInterval = null;

  useEffect(() => {
    const localToken = window.localStorage.getItem("spotify-bar-token");

    if (localToken) {
      userDispatch(setUserLogin({ loggedIn: true, accessToken: localToken }));
      playerCheckInterval = setInterval(() => checkForPlayer(localToken), 1000);
    }
  }, []);

  const handleLogin = () => {
    if (accessToken || accessToken !== "") {
      // change the loggedIn variable, then start checking for the window.Spotify variable
      userDispatch(setUserLogin({ loggedIn: true, accessToken: accessToken }));
      playerCheckInterval = setInterval(() => checkForPlayer(), 1000);

      // save token to local storage
      window.localStorage.setItem("spotify-bar-token", accessToken);
    }
  };

  const createEventHandlers = (player, accessToken) => {
    player.addListener("initialization_error", ({ message }) => {
      console.error(`Init Error: ${message}`);
    });
    player.addListener("authentication_error", ({ message }) => {
      // setState({ USER_INITIAL_STATE });
      console.error(`Auth Error: ${message}`);
    });
    player.addListener("account_error", ({ message }) => {
      console.error(`Aaccount error Error: ${message}`);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(`Playback Error: ${message}`);
    });

    player.addListener("player_state_changed", playerUpdatedState => {
      playerDispatch(playerUpdate(playerUpdatedState));
    });

    player.addListener("ready", ({ device_id }) => {
      userDispatch(setUserLogin({ deviceId: device_id }));
      transferPlaybackHere(accessToken, device_id);
    });

    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });
  };

  const checkForPlayer = (accessToken = accessToken) => {
    if (window.Spotify !== null || accessToken !== "") {
      clearInterval(playerCheckInterval);
      const player = new window.Spotify.Player({
        name: "Spotify Web Player",
        getOAuthToken: cb => {
          cb(accessToken);
        }
      });

      createEventHandlers(player, accessToken);

      player.connect().then(success => {
        if (success) {
          console.log(
            "The Web Playback SDK successfully connected to Spotify!"
          );
        }
      });
    }
  };

  const transferPlaybackHere = (
    acccessToken = accessToken,
    localDeviceId = deviceId
  ) => {
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${acccessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        device_ids: [localDeviceId],
        play: true
      })
    });
  };

  if (loggedIn) {
    return (
      <div>
        <Player />
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <p className="App-intro">
          Enter your Spotify access token. Get it from{" "}
          <a href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify">
            here baby
          </a>
          .
        </p>
        <p>
          <input
            type="text"
            value={localState}
            onChange={e => setLocalState(e.target.value)}
          />
        </p>
        <p>
          <button onClick={() => handleLogin()}>Go</button>
        </p>
      </div>
    </div>
  );
};

export default App;
