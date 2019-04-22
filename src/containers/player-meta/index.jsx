import React from "react";
import styled from "styled-components";

// components

const TrackName = styled.h1`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 0;
`;

const ArtistName = styled.h4`
  font-size: 1.2em;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0;
`;

const PlayerMeta = ({ currentTrack }) => {
  const { trackName, artistName } = currentTrack;
  return (
    <div>
      <TrackName>{trackName}</TrackName>
      <ArtistName>{artistName}</ArtistName>
    </div>
  );
};

export default PlayerMeta;
