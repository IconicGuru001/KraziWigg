import express from "express";
import User from "../models/User.js";
const router=express.Router();
router.post("/signup",async(req,res)=>{const u=new User(req.body);await u.save();res.json(u)});
router.post("/login",async(req,res)=>{const u=await User.findOne({email:req.body.email});res.json(u)});
export default router;
