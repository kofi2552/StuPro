// src/components/SignupForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import newRequest from "~/utils/newRequest";
import Loader from "~/utils/Loader";

const SignupForm = ({ toggleForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Err, setErr] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);

    // Send POST request to backend to create a new user using Axios
    try {
      const response = await newRequest.post("/signup", data);

      // Handle successful response
      console.log("User created:", response.data);
      window.location.href = "/dashboard"; // Redirect after successful sign up
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Log the specific error message
        console.error("Error Occured!", error);
        // Display the specific error message to the user
        setErr("Error Occured!", error.response.data.error);
      } else {
        // Log a generic error message if there's no specific response
        console.error("Error2:", error);
        setErr("signupError", { message: "An unexpected error occurred." });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Username:
        </label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          className={`mt-1 block w-full border rounded-md p-2 border-gray-300 ${
            errors.username ? "border-red-500" : ""
          }`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className={`mt-1 block w-full border rounded-md p-2 border-gray-300 ${
            errors.email ? "border-red-500" : ""
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
          className={`mt-1 block w-full border rounded-md p-2 border-gray-300 ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Sign Up
      </button>
      <p className="text-red-500 text-sm text-center pt-1">{Err && Err}</p>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Login here
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
