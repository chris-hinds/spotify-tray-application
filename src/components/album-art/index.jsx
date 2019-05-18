import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: albumArt;
  align-self: center;
  justify-self: center;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: auto;
  height: 250px;
  border-radius: 5%;
  -webkit-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
`;

const AlbumArt = ({ img }) => (
  <Wrapper>
    <Image src={img} alt="" />
  </Wrapper>
);

export default AlbumArt;
