import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(API + "/videos").then(res => setVideos(res.data));
  }, []);

  return (
    <div>
      <h1>KraziWigg Feed</h1>
      {videos.map(v => (
        <video key={v._id} src={v.url} controls width="300" />
      ))}
    </div>
  );
}