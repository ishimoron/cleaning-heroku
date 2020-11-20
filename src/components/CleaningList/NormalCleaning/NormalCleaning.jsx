import React from "react";

import "../../../assets/css/animate.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const NormalCleaning = () => {
  return (
    <Flippy
      flipOnClick={true} 
      flipDirection="horizontal" 
      style={{ width: "200px", height: "300px" }}
    >
      <FrontSide
        style={{
          backgroundColor: "#41669d",
        }}
      >
        RICK
      </FrontSide>
      <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
    </Flippy>
  );
};

export default NormalCleaning;
