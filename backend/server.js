import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model("User", {
  username: String,
  password: String
});

const Video = mongoose.model("Video", {
  url: String
});

app.post("/signup", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get("/videos", async (req, res) => {
  const vids = await Video.find();
  res.json(vids);
});

app.post("/videos", async (req, res) => {
  const vid = await Video.create(req.body);
  res.json(vid);
});

app.listen(5000, () => console.log("Server running"));