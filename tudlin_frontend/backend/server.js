// /backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware setup
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());

// POST route to create a new user
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Create a new user (password will be hashed automatically by the model hook)
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);

    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path;
      const value = error.errors[0].value;

      let message;
      if (field === "username") {
        message = `The username "${value}" is already taken.`;
      } else if (field === "email") {
        message = `The email "${value}" is already in use.`;
      } else {
        message = "This value is already in use.";
      }

      return res.status(409).json({ error: message });
    }

    res
      .status(500)
      .json({ error: "An unexpected error occurred while creating the user." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("login request:", req.body);

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ error: "An unexpected error occurred while logging in." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
