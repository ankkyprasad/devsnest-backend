const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  //bearer token
  try {
    const token = req.headers.authorization.split(" ");
    const decryptedtoken = jwt.verify(token, "secret");
    console.log(decryptedtoken);

    const user = User.findAll({ id: decryptedtoken.userId });

    req.user = user[0];
    next();
  } catch (err) {
    console.log(err);
  }
};
