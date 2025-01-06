import React, { useState } from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Register = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="h-[calc(100vh - 120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4"> Please Register</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Email
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Passowrd
            </label>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            {/* <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none"
          /> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        {/* Register button */}
        <p className="align-baseline font-medium mt-4 text-sm">
          Have an accout? Please
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
        {/* google sign in */}
        <div className="mt-4">
          <button className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
