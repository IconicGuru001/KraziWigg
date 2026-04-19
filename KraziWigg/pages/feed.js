
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import VoiceRecorder from "../components/VoiceRecorder";

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => { load(); }, []);

  const load = async () => {
    const { data } = await supabase.from("videos").select("*").order("id",{ascending:false});
    setVideos(data || []);
  };

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      {videos.map(v => (
        <div key={v.id} style={{ height: "100vh" }}>
          <video src={v.url} controls style={{ width:"100%", height:"100%"}} />
          <p>{v.title}</p>
          <VoiceRecorder videoId={v.id}/>
        </div>
      ))}
    </div>
  );
}
