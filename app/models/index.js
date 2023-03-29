const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");

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

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

const user = new User({ id: 1, firstName: "Moraj", lastName: "Dhwaj" });
console.log(user);
