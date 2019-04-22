import React from "react";
import styled from "styled-components";

const AlbumCoverArt = styled.img`
  width: 100%;
  height: auto;
`;

const AlbumArt = ({ img }) => <AlbumCoverArt src={img} alt="" />;

export default AlbumArt;
