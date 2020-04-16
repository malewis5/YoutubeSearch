import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./Videos/VideoDetail";
import VideoList from "./Videos/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = (term) => console.log(term);

  useEffect(() => setVideos([{ video: 1 }, { video: 2 }, { video: 3 }]), []);
  return (
    <div>
      <SearchBar searchFunction={onSearchSubmit} />
      <VideoDetail />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
