import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: progressBar;
  align-self: center;
  background-color: white;
  width: ${props => (props.position * 100) / props.duration + "%"};
  height: 8px;
`;

const NextTrack = ({ duration, position }) => (
  <Wrapper duration={duration} position={position} />
);

export default NextTrack;
