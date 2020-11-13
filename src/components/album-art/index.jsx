import React from "react";
import styled from "styled-components";
import * as Vibrant from "node-vibrant";

const Wrapper = styled.div`
  grid-area: albumArt;
  align-self: center;
  justify-self: center;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  -webkit-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
`;

const BackgroundBlur = styled.div`
  background-image: url(${(props) => props.backgroundUrl});
  filter: blur(40px);
  width: 100%;
  height: calc(100% - 20px);
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1
}
`;

const AlbumArt = ({ img }) => (
  <>
    <BackgroundBlur backgroundUrl={img} />
    <Wrapper>
      <Image src={img} alt="" />
    </Wrapper>
  </>
);

export default AlbumArt;
