import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="app">
      <h1>KraziWigg</h1>
      <p>Short video platform 🚀</p>

      <input type="file" accept="video/*" />
      <button>Upload</button>

      <div className="feed">
        {videos.map((v, i) => (
          <video key={i} controls src={v}></video>
        ))}
      </div>
    </div>
  );
}
