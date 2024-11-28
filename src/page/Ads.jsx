import React, { useState } from "react";
import LottiePlayer from "react-lottie-player";
import reklama from "../assets/reklama.json";
const Ads = ()=>{

  return <>
          <LottiePlayer
          animationData={reklama}
          loop={true}
          play
          style={{
            width: "100%",
            height: "100%",
          }}
        />
  </>;
}
export default Ads;