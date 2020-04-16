import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./Videos/VideoDetail";
import VideoList from "./Videos/VideoList";

const App = () => {
  return (
    <div>
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default App;
