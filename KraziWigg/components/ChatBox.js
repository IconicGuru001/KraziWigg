
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ChatBox({ userId, friendId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const channel = supabase.channel("chat")
      .on("postgres_changes",{event:"INSERT",schema:"public",table:"messages"},payload=>{
        setMessages(prev=>[...prev,payload.new])
      }).subscribe();

    return ()=>supabase.removeChannel(channel);
  },[]);

  const send = async ()=>{
    await supabase.from("messages").insert({
      sender_id:userId,
      receiver_id:friendId,
      content:text
    });
    setText("");
  };

  return (
    <div>
      {messages.map(m=><p key={m.id}>{m.content}</p>)}
      <input value={text} onChange={e=>setText(e.target.value)}/>
      <button onClick={send}>Send</button>
    </div>
  );
}
