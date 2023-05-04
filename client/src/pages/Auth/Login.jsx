import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem("auth", res.data.accessToken);
          console.log(res.data);
          if (res.data.role === "admin") navigate("/admin");
          else navigate("/lodge");
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="rounded-md shadow-sm bg-white p-6 w-[460px]">
        <h1 className="font-semibold text-center text-2xl">Login</h1>
        <form onSubmit={formik.handleSubmit}>
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
              autoComplete="off"
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
            {error ? <p className="text-red-500 text-sm">{error}</p> : ""}
            <div>
              Don't have an account?
              <Link to="signup" className="ml-1 text-indigo-700">
                Create an account
              </Link>
            </div>
            <button
              className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md mt-2"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
