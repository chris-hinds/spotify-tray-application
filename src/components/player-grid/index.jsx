import React from "react";
import styled from "styled-components";

const PlayerGridLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  grid-template-rows: 300px 80px 72px 22px 50px;
  grid-template-areas:
    ". albumArt albumArt albumArt albumArt albumArt albumArt ."
    ". . trackDetails trackDetails trackDetails trackDetails. ."
    ". . controls controls controls controls . ."
    ". progressBar progressBar progressBar progressBar progressBar progressBar ."
    ". nextTracks nextTracks nextTracks nextTracks nextTracks nextTracks .";
`;

const PlayerGrid = ({ children }) => (
  <PlayerGridLayout>{children}</PlayerGridLayout>
);

export default PlayerGrid;
