// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import newRequest from "../../utils/newRequest";
import Loader from "~/utils/Loader";

const LoginForm = ({ toggleForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await newRequest.post("/login", data);
      console.log("Login successful:", response.data);

      // Store the token in localStorage or a cookie (choose based on your security needs)
      localStorage.setItem("authToken", response.data.token);

      // Redirect to the dashboard
      //window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);

      // Display a user-friendly error message
      if (err.response?.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else if (err.response?.status === 404) {
        setError("User not found. Please check your email.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 relative">
      {isLoading && <Loader text="Logging in..." />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-4 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Your Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full border rounded-md p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className={`mt-1 block w-full border rounded-md p-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          Login
        </button>
        {error && (
          <p className="text-red-500 text-sm text-center pt-2">{error}</p>
        )}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Register here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
