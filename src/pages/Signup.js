import { useState } from "react";
import axios from "axios";

export default function Signup(){
  const [data,setData]=useState({});
  const signup=async()=>{await axios.post("/auth/signup",data)};
  return(<div><input placeholder="username" onChange={e=>setData({...data,username:e.target.value})}/>
  <input placeholder="email" onChange={e=>setData({...data,email:e.target.value})}/>
  <input placeholder="password" onChange={e=>setData({...data,password:e.target.value})}/>
  <button onClick={signup}>Signup</button></div>)
}
