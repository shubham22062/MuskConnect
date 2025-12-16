import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/muskConnect_logo.png";
import signImg from "../assets/signupImg.svg";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Main Wrapper */}
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* LEFT: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img src={logo} alt="MuskConnect" className="w-36" />
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-2">
              Sign in to continue your language learning journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-400 text-white py-2 rounded-lg font-semibold hover:bg-green-500 transition"
            >
              Sign In
            </button>

            {/* Signup link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-green-600 font-medium hover:underline"
              >
                Create one
              </Link>
            </div>
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="hidden md:flex md:w-1/2 bg-green-50 items-center justify-center p-6">
          <img
            src={signImg}
            alt="Login Illustration"
            className="w-full h-auto max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
