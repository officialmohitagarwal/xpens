import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../services/authApi";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const fillDemoCredentials = () => {
    setEmail("demo@xpens.com");
    setPassword("demo123");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password =
        "Password is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length ===
      0
    );
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res =
        await loginUser({
          email,
          password,
        });

      login(
        res.data.user,
        res.data.token
      );

      toast.success(
        "Login successful"
      );
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-green-950
        flex
        items-center
        justify-center
        px-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          w-full
          max-w-lg
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          overflow-hidden
          shadow-2xl
        "
      >
        {/* ANNOUNCEMENT BAR */}

        <div
          className="
            bg-amber-500/10
            border-b
            border-amber-500/20
            overflow-hidden
          "
        >
          <div className="marquee py-3 text-sm text-amber-300 font-medium">
            🚀 XPens is fully functional •
            Create a new account or use
            the demo account below •
            Authentication • Dashboard •
            Expense Tracking • Charts •
            Analytics • Reports • React •
            Node.js • MongoDB • JWT •
            Expense Management •
            Category Insights •
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              XPens
            </h1>

            <p className="text-slate-400 mt-3">
              Welcome back 👋
            </p>
          </div>

          <div className="space-y-5">
            {/* EMAIL */}

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className={`
                  w-full
                  bg-white/5
                  border
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-slate-500
                  outline-none

                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-white/10"
                  }
                `}
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className={`
                  w-full
                  bg-white/5
                  border
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder:text-slate-500
                  outline-none

                  ${
                    errors.password
                      ? "border-red-500"
                      : "border-white/10"
                  }
                `}
              />

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* OPTIONS */}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" />
                Remember Me
              </label>

              <button
                type="button"
                className="text-emerald-400 hover:text-emerald-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                w-full
                bg-emerald-500
                hover:bg-emerald-400
                rounded-xl
                py-3
                font-semibold
                text-black
                transition
              "
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

            {/* REGISTER */}

            <p className="text-center text-slate-400 text-sm">
              New to XPens?{" "}
              <Link
                to="/register"
                className="text-emerald-400 hover:underline"
              >
                Register now
              </Link>
            </p>

            {/* DEMO CARD */}

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-4
              "
            >
              <p className="text-sm font-medium text-slate-300 mb-3">
                Demo Credentials
              </p>

              <div className="space-y-2 text-sm">
                <p className="text-slate-400">
                  Email:
                  <span className="text-white ml-2">
                    demo@xpens.com
                  </span>
                </p>

                <p className="text-slate-400">
                  Password:
                  <span className="text-white ml-2">
                    demo123
                  </span>
                </p>
              </div>

              <button
                onClick={
                  fillDemoCredentials
                }
                className="
                  mt-4
                  text-emerald-400
                  hover:text-emerald-300
                  text-sm
                  hover:underline
                "
              >
                Use Demo Account
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;