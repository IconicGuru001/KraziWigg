
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert("Check your email!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>KraziWigg Login</h1>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
      <button onClick={login}>Login</button>
    </div>
  );
}
