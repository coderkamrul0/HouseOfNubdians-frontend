import React from "react";
import "./YoutubeVideo.css";
import YoutubeEmbed from "../../utils/YoutubeEmbed";

const YoutubeVideo = () => {
  return (
    <div className="shadow-xl shadow-[#38BDF8]">
      <YoutubeEmbed embedId="qQAy2vIf1xA" />
    </div>
  );
};

export default YoutubeVideo;
