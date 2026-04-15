import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/upload")
      .then(res => setVideos(res.data));
  }, []);

  return (
    <div className="app">
      {videos.map(v => (
        <div className="video" key={v._id}>
          <video src={v.videoUrl} autoPlay loop muted />
          <div className="overlay">
            <h3>@{v.userId}</h3>
            <p>{v.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
