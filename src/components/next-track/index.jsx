import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: nextTracks;
  align-self: center;
  background-color: white;
  border-radius: 5px;
`;

const TrackInnerWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  grid-template-areas: "image main main main main";
  height: 40px;
  padding: 5px;
`;

const Image = styled.img`
  grid-area: image;
  height: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 19px 29px -15px rgba(0, 0, 0, 0.75);
`;

const TrackdetailsContainer = styled.div`
  grid-area: main;
`;

const TrackName = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  margin: 0;
`;

const Artistname = styled.div`
  font-size: 0.7em;
  margin: 0;
`;

const NextTrack = ({ albumArt, trackName, artistName }) => (
  <Wrapper>
    <TrackInnerWrapper>
      <Image src={albumArt} alt="" />
      <TrackdetailsContainer>
        <TrackName>
          <LinesEllipsis
            text={trackName}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </TrackName>
        <Artistname>
          <LinesEllipsis
            text={artistName}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </Artistname>
      </TrackdetailsContainer>
    </TrackInnerWrapper>
  </Wrapper>
);

export default NextTrack;
