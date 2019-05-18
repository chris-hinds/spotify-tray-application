import React from "react";
import styled from "styled-components";

const PlayerGridLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 1fr 1fr 30px;
  grid-template-rows: 250px 80px 72px 72px 50px;
  grid-template-areas:
    ". albumArt albumArt albumArt albumArt albumArt albumArt ."
    ". . trackDetails trackDetails trackDetails trackDetails. ."
    ". . controls controls controls controls . ."
    ". . progressBar progressBar progressBar progressBar . ."
    ". nextTracks nextTracks nextTracks nextTracks nextTracks nextTracks .";
`;

const PlayerGrid = ({ children }) => (
  <PlayerGridLayout>{children}</PlayerGridLayout>
);

export default PlayerGrid;
