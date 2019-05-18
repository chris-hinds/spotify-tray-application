import React from "react";

// components
import NextTrack from "../../components/next-track";

const PlayerNextTracks = ({ nextTracks }) => {
  const { albumArtwork, trackName, artistName } = nextTracks;
  return (
    <>
      <NextTrack
        albumArt={albumArtwork}
        trackName={trackName}
        artistName={artistName}
      />
    </>
  );
};

export default PlayerNextTracks;
