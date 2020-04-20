import React, { useState, useEffect } from "react";

// Custom Components
import { SearchBar } from "./SearchBar/SearchBar";
import { VideoDetail } from "./Videos/VideoDetail";
import { VideoList } from "./Videos/VideoList";

// API's
import youtube from "./API/youtube";
const KEY = "AIzaSyDcpGWkw8D-a-r8cUja5WnCSSvuzrZZs9U";

const App = () => {
  // State
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Lifecycle
  useEffect(() => {
    onSearchSubmit("buildings");
  }, []);

  // Helper Funcs
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: KEY,
        type: "video",
        maxResults: 10,
        relevanceLanguage: "en",
        videoSyndicated: true,
      },
    });
    setSelectedVideo(response.data.items[0]);
    setVideos(response.data.items);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
