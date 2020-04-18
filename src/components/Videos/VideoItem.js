import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={props.image} alt={props.description} />
      <div className="content">
        <div className="header">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
