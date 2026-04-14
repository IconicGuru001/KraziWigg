const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

let users = [];
let videos = [];

app.post("/signup", (req, res) => {
  users.push(req.body);
  res.send("User created");
});

app.post("/login", (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if(user) res.send("Login success");
  else res.status(400).send("User not found");
});

app.post("/upload", upload.single("video"), (req, res) => {
  videos.push(req.file.filename);
  res.send("Uploaded");
});

app.get("/videos", (req, res) => {
  res.json(videos);
});

app.listen(5000, () => console.log("Server running on port 5000"));
