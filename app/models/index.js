const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://res_pos_sql_2f6r_user:vfUbLySlMcEF5vPeR69JYYtaCwLq3ohD@dpg-cge1rco2qv2bbhmdgvc0-a.singapore-postgres.render.com/res_pos_sql_2f6r?ssl=true"
); // Example for postgres

sequelize
  .authenticate()
  .then((res) => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
