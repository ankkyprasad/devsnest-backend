var express = require("express");
var router = express.Router();
var registerInitialChecks = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "ankit";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res) {
  console.log("Redis Value: ", req.session.username);
  res.render("index", { title: "exnpress" });
});

router.post("/register", registerInitialChecks, register);

module.exports = router;
