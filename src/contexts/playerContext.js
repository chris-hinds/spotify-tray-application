import React, { createContext, useReducer } from "react";
import * as Constants from "../contsants/";

// reducer
import { playerReducer } from "../reducers/playerReducer";

const INITIAL_PLAYER_STATE = {
  duration: null,
  position: null,
  paused: true,
  currentTrack: {
    trackName: "Track Name",
    albumName: "Album Name",
    artistName: "Artist Name",
    albumArtwork: Constants.ALBUM_ART_PLACEHOLDER
  }
};

const PlayerContext = createContext();

const PlayerContextProvider = props => {
  const [playerState, playerDispatch] = useReducer(
    playerReducer,
    INITIAL_PLAYER_STATE
  );

  return (
    <PlayerContext.Provider value={{ playerState, playerDispatch }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

const PlayerContextConsumer = PlayerContext.Consumer;

export { PlayerContext, PlayerContextProvider, PlayerContextConsumer };
