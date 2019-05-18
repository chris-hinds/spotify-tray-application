import React from "react";
import styled from "styled-components";

// components
import AlbumArt from "../../components/album-art";

const GridItem = styled.div`
  grid-area: albumArt;
`;

const AlbumArtContainer = ({ artwork }) => {
  return <AlbumArt img={artwork} />;
};

export default AlbumArtContainer;
