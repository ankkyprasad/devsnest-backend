const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  const { name, email, role } = req.body;

  const user = await User.findAll({ where: { email: email } });
  if (user.length > 0) {
    return res.json({
      message: "User already exists",
    });
  }

  await User.create({ name, email, role });
  return res.json({
    message: "user created",
  });
};

exports.login = async (req, res, next) => {
  const { name, email } = User.findAll({ where: { email: email } });
  const user = await User.findAll({ where: { email: email } });

  if (user.length == 0) {
    return res.json({
      msg: "not signed up",
    });
  }

  const token = jwt.sign(
    {
      userId: user[0].id,
      email: email,
    },
    "secret",
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    token,
    user,
  });
};
