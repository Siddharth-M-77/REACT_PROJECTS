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
    <div className="w-full h-screen bg-orange-300 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg bg-[#dadada] p-20 "
      >
        <div className="mb-4">
          <label className="text-sm block mb-2">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 w-fit mt-2">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-sm block mb-2">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid Email",
              },
            })}
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 w-fit mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-sm block mb-2">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be 6 digit",
              },
            })}
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 w-fit mt-2">{errors.password.message}</p>
          )}
        </div>
        <div className="text-center mt-10">
          <input
            className="px-6 py-2 bg-blue-400 rounded-lg text-white hover:bg-blue-600 cursor-pointer "
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationPageUsingRHF;
