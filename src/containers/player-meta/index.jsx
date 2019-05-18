import React from "react";

// components
import TrackDetails from "../../components/track-details";

const PlayerMeta = ({ currentTrack }) => {
  return <TrackDetails {...currentTrack} />;
};

export default PlayerMeta;
