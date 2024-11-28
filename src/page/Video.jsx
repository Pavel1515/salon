import React from "react";
import ReactPlayer from "react-player";
import smallVideo from "../assets/small.mp4";  // импортируйте видео

const Video = () => {
  return (
    <div>
      <ReactPlayer
        url={smallVideo}  // используйте импортированную переменную
        playing
        loop
        muted
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Video;
