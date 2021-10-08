module.exports = (req, res, next) => {
  if (req.user.role !== "Admin" || req.user === undefined) {
    return res.status(401).json({
      message: "Not authorised",
    });
  }
  next();
};
