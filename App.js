import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const res = await axios.get("http://localhost:5000/videos");
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const likeVideo = async (id) => {
    await axios.post(`http://localhost:5000/like/${id}`);
    fetchVideos();
  };

  return (
    <div className="app">
      <div className="header">
        <h1>KraziWigg</h1>
      </div>

      <div className="feed">
        {videos.map((v) => (
          <div className="videoCard" key={v._id}>
            <video src={v.url} autoPlay loop muted />

            <div className="overlay">
              <p className="username">@user</p>
              <p className="caption">🔥 KraziWigg vibes</p>
            </div>

            <div className="actions">
              <button onClick={() => likeVideo(v._id)}>
                ❤️
                <span>{v.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
