import React, { useState } from "react";

// Custom Components
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./Videos/VideoDetail";
import VideoList from "./Videos/VideoList";

// API's
import youtube from "./API/youtube";
const KEY = "AIzaSyDcpGWkw8D-a-r8cUja5WnCSSvuzrZZs9U";

const App = () => {
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: KEY,
        type: "video",
        maxResults: 5,
      },
    });
    setVideos(response.data.items);
  };
  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <VideoDetail />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
