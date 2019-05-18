import React, { useContext } from "react";

// contexts & actions
import { PlayerContext } from "../../contexts/playerContext";
import { UserContext } from "../../contexts/userContext";

// components
import PlayerGrid from "../../components/player-grid";

// spotify
import {
  playerNextTrack,
  playerPrevTrack,
  playerPause,
  playerPlay
} from "../../spotify/playerControls";

// components
import AlbumArt from "../../containers/album-art";
import PlayerMeta from "../../containers/player-meta";
import PlayerControls from "../../containers/player-controls";
import PlayerProgress from "../../containers/player-progress";
import PlayerNextTracks from "../../containers/player-next-tracks";

const Player = () => {
  const { playerState } = useContext(PlayerContext);
  const { userState } = useContext(UserContext);
  const { currentTrack, nextTracks, duration, position, paused } = playerState;
  const { albumArtwork } = currentTrack;

  return (
    <PlayerGrid>
      <AlbumArt artwork={albumArtwork} />
      <PlayerMeta currentTrack={currentTrack} />
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
      <PlayerProgress duration={duration} position={position} />

      {nextTracks && <PlayerNextTracks nextTracks={nextTracks} />}
    </PlayerGrid>
  );
};

export default Player;
