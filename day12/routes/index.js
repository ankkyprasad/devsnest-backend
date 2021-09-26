var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/save-data", function (req, res, next) {
  const sess = req.session;
  const { name, age } = req.body;
  sess.username = name;
  sess.userage = age;
  res.render("index", { title: "Express" });
});

router.get("/print-data", function (req, res) {
  console.log("Redis Value Name: ", req.session.username);
  console.log("Redis Value Age: ", req.session.userage);
});

module.exports = router;
