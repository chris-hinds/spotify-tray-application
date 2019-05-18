import React from "react";
import styled from "styled-components";
import {
  MdPlayCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
  MdPauseCircleFilled
} from "react-icons/md";

// components

const ControlsContainer = styled.div`
  grid-area: controls;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayPauseButton = ({ playing, onClick }) =>
  playing ? (
    <MdPauseCircleFilled size={72} color="white" onClick={onClick} />
  ) : (
    <MdPlayCircleFilled size={72} color="white" onClick={onClick} />
  );

const PlayerControls = ({ playPause, nextTrack, prevTrack, playing }) => {
  return (
    <ControlsContainer>
      <MdSkipPrevious size={42} color="white" onClick={prevTrack} />
      <PlayPauseButton playing={playing} onClick={playPause} />
      <MdSkipNext size={42} color="white" onClick={nextTrack} />
    </ControlsContainer>
  );
};

export default PlayerControls;
