// backend/sequelize.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("stupro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection error:", error));

export default sequelize;
