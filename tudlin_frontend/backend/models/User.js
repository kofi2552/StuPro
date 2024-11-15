// /backend/models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import bcrypt from "bcryptjs";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Hook to hash the password before creating or updating the user
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10); // Generate a salt
        user.password = await bcrypt.hash(user.password, salt); // Hash the password
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          // Only hash if password is changed
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

export default User;
