const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", (req, res) => {
  res.render("index", { name: req.query.name });
});

app.get("/wallpaper/:name", (req, res) => {
  const imageFile = req.params.name;
  res.sendFile(path.join(__dirname, `public/images/${imageFile}`));
});

app.get("/song/:name", (req, res) => {
  const songFile = req.params.name;
  res.sendFile(path.join(__dirname, `public/audio/${songFile}`));
});

app.listen(5000);
