// src/utils/newRequest.js
import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default newRequest;
