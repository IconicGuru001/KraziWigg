import express from "express";
import Video from "../models/Video.js";
const router=express.Router();

router.get("/",async(req,res)=>{res.json(await Video.find())});

router.post("/",async(req,res)=>{
const v=new Video(req.body);
await v.save();
res.json(v);
});

router.post("/like/:id",async(req,res)=>{
const v=await Video.findById(req.params.id);
v.likes+=1; await v.save(); res.json(v);
});

export default router;
