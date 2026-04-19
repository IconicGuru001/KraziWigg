
import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";

export default function NotificationBell({userId}){
  const [notes,setNotes]=useState([]);

  useEffect(()=>{
    const load=async()=>{
      const {data}=await supabase.from("notifications").select("*").eq("user_id",userId);
      setNotes(data||[]);
    };
    load();
  },[]);

  return (
    <div>
      <h3>Notifications</h3>
      {notes.map(n=><p key={n.id}>{n.message}</p>)}
    </div>
  );
}
