
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function VoiceRecorder({ videoId }) {
  const [rec,setRec]=useState(false);
  let recorder, chunks=[];

  const start=async()=>{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    recorder=new MediaRecorder(stream);
    recorder.ondataavailable=e=>chunks.push(e.data);
    recorder.start();
    setRec(true);
  };

  const stop=()=>{
    recorder.stop();
    recorder.onstop=async()=>{
      const blob=new Blob(chunks,{type:"audio/webm"});
      const name=Date.now()+".webm";

      await supabase.storage.from("voice-comments").upload(name,blob);
      const url=supabase.storage.from("voice-comments").getPublicUrl(name).data.publicUrl;

      await supabase.from("comments").insert({video_id:videoId,audio_url:url});
      chunks=[];
      setRec(false);
    };
  };

  return rec ? <button onClick={stop}>Stop</button> : <button onClick={start}>Record</button>;
}
