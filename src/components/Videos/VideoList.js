import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return (
    <div className="ui relaxed divided list">
      {props.videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            title={video.snippet.title}
            image={video.snippet.thumbnails.medium.url}
            description={video.snippet.description}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
