import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} title={video.snippet.title} />;
      })}
    </div>
  );
};

export default VideoList;
