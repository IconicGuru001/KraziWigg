import React from "react";
import "./App.css";

const videos = [
  {
    id: 1,
    username: "you",
    description: "My first KraziWigg video 🔥",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

function App() {
  return (
    <div className="app">
      {videos.map((video) => (
        <div className="videoCard" key={video.id}>
          <video src={video.videoUrl} controls loop className="video" />
          <div className="overlay">
            <h3>@{video.username}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
