const express = require("express");
const app = express();

const sequelize = require("./util/database");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const isAdmin = require("./middleware/isAdmin");
const isAuth = require("./middleware/isAuth");

app.use(express.json());

app.use("/admin", isAuth, isAdmin, adminRoutes);
app.use("/user", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("connected");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
