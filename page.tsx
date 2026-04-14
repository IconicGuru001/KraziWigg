"use client";
import {useEffect,useState} from "react";
export default function Feed(){
const[videos,setVideos]=useState([]);
useEffect(()=>{fetch("/api/videos").then(r=>r.json()).then(setVideos)},[]);
return(<div>{videos.map((v,i)=>
<video key={i} src={v.url} autoPlay loop controls style={{width:"100%",height:"100vh"}}/>
)}</div>);
}