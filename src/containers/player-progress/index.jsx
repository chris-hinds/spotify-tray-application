import React from "react";

// components
import ProgressBar from "../../components/progress-bar";

const PlayerProgressBar = ({ duration, position }) => {
  return (
    <>
      <ProgressBar duration={duration} position={position} />
    </>
  );
};

export default PlayerProgressBar;
