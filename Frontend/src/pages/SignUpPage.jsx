import { useState } from "react";
import logo from "../assets/muskConnect_logo.png";
import { Link } from "react-router-dom";
import signImg from "../assets/signupImg.svg";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsPending(true);

    // TEMP: simulate API call
    setTimeout(() => {
      console.log("Signup Data:", signupData);
      setIsPending(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* LEFT: Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-2">
            <img src={logo} alt="MuskConnectLogo" className="w-36" />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Create an Account
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Join LangConnect and start your language learning journey
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
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
                className="w-full px-4 py-2 border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 accent-green-500"
              />
              <p className="text-gray-600">
                I agree to the{" "}
                <span className="text-green-600 hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green-600 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-green-400 text-white py-2 rounded-lg font-semibold hover:bg-green-500 transition disabled:opacity-60"
            >
              {isPending ? "Creating Account..." : "Create Account"}
            </button>

            {/* Login */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="hidden md:flex md:w-1/2 bg-green-50 items-center justify-center p-6">
          <img
            src={signImg}
            alt="Signup Illustration"
            className="w-full h-auto max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
