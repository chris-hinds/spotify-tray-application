import React, { useContext } from "react";
import { Grid, Cell } from "styled-css-grid";

// contexts & actions
import { PlayerContext } from "../../contexts/playerContext";
import { UserContext } from "../../contexts/userContext";

// spotify
import {
  playerNextTrack,
  playerPrevTrack,
  playerPause,
  playerPlay
} from "../../spotify/playerControls";

// components
import AlbumArt from "../../components/album-art";
import PlayerMeta from "../../containers/player-meta";
import PlayerControls from "../../containers/player-controls";

const Player = () => {
  const { playerState } = useContext(PlayerContext);
  const { userState } = useContext(UserContext);
  const { currentTrack, duration, position, paused } = playerState;
  const { albumArtwork } = currentTrack;

  return (
    <Grid columns={12} gap="8px">
      <Cell width={4} height={2}>
        <AlbumArt img={albumArtwork} />
      </Cell>
      <Cell width={8} height={1} middle center>
        <PlayerMeta currentTrack={currentTrack} />
      </Cell>
      <Cell width={8} height={1} middle center>
        <PlayerControls
          playing={!paused}
          playPause={
            !paused
              ? () => playerPause(userState.accessToken)
              : () => playerPlay(userState.accessToken)
          }
          nextTrack={() => playerNextTrack(userState.accessToken)}
          prevTrack={() => playerPrevTrack(userState.accessToken)}
        />
      </Cell>
    </Grid>
  );
};

export default Player;
