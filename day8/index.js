const express = require("express");
const app = express();

const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    next();
  } else {
    console.log("should be admin");
  }
};

app.get("/", auth, (req, res) => {
  res.status(200);
  res.send(req.query);
});

app.listen(5000);
