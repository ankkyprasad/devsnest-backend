const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "qwerty", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established");
  } catch (err) {
    console.err("unable to connect -", err);
  }
})();

module.exports = sequelize;
