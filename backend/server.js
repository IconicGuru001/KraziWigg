import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import uploadRoute from "./routes/upload.js";

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/kraziwigg");

app.use("/auth",authRoute);
app.use("/upload",uploadRoute);

app.listen(5000,()=>console.log("Server running"));
