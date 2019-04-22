import React from "react";
import styled from "styled-components";
import {
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
  MdPause
} from "react-icons/md";

// components

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayPauseButton = ({ playing, onClick }) =>
  playing ? (
    <MdPause size={52} onClick={onClick} />
  ) : (
    <MdPlayArrow size={52} onClick={onClick} />
  );

const PlayerControls = ({ playPause, nextTrack, prevTrack, playing }) => {
  return (
    <ControlsContainer>
      <MdSkipPrevious size={42} onClick={prevTrack} />
      <PlayPauseButton playing={playing} onClick={playPause} />
      <MdSkipNext size={42} onClick={nextTrack} />
    </ControlsContainer>
  );
};

export default PlayerControls;
