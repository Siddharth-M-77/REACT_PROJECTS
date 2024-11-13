import React from "react";
import { useForm } from "react-hook-form";

const RegistrationPageUsingRHF = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600">
          Register
        </h2>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid Email",
              },
            })}
            type="email"
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be 6 characters or more",
              },
            })}
            type="password"
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPageUsingRHF;
