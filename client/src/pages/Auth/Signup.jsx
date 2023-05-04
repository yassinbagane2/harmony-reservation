import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:8000/register", {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="rounded-md shadow-sm bg-white p-6 w-[460px]">
        <h1 className="font-semibold text-center text-2xl">Create account</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="fullname">
              Fullname
            </label>
            <input
              type="text"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="fullname"
              id="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              placeholder="Jhon doe"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              placeholder="Jhondoe@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs mt-2" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full border rounded-md border-gray-200 px-3 py-2 outline-none"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              id="confirmPassword"
              placeholder="********"
            />
          </div>
          <div className="flex gap-1 items-center my-2">
            <input type="checkbox" name="terms" id="terms" />
            <p className="text-gray-500">
              I agree to the{" "}
              <span className="cursor-pointer underline">
                terms & condtions
              </span>
            </p>
          </div>
          <button
            className="px-3 py-2 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-md mt-2"
            type="submit"
          >
            Signup
          </button>
        </form>
        <div className="mt-1">
          Already have an account?{" "}
          <Link className="text-indigo-600" to={"/"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
