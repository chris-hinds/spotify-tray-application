import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: trackDetails;
  align-self: center;
`;

const TrackName = styled.div`
  text-align: center;
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 8px;
`;

const ArtistName = styled.div`
  text-align: center;
  font-size: 0.9em;
  font-weight: 300;
  color: white;
  margin-bottom: 0;
`;

const TrackDetails = ({ trackName, artistName }) => (
  <Wrapper>
    <TrackName>
      <LinesEllipsis
        text={trackName}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </TrackName>
    <ArtistName>
      <LinesEllipsis
        text={artistName}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </ArtistName>
  </Wrapper>
);

export default TrackDetails;
