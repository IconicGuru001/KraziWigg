import { useState } from "react";
import axios from "axios";

export default function Login(){
  const [data,setData]=useState({});
  const login=async()=>{await axios.post("/auth/login",data)};
  return(<div><input placeholder="email" onChange={e=>setData({...data,email:e.target.value})}/>
  <input placeholder="password" onChange={e=>setData({...data,password:e.target.value})}/>
  <button onClick={login}>Login</button></div>)
}
