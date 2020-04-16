import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./Videos/VideoDetail";
import VideoList from "./Videos/VideoList";
import axios from "axios";

const App = () => {
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          key: "AIzaSyDcpGWkw8D-a-r8cUja5WnCSSvuzrZZs9U",
        },
      }
    );
    setVideos(response.data.items);
  };

  return (
    <div>
      <SearchBar searchFunction={onSearchSubmit} />
      <VideoDetail />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
