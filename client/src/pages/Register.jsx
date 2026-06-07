import { motion } from "framer-motion";
import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { Loader2 } from "lucide-react";

import { registerUser } from "../services/authApi";

import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleRegister =
    async () => {
      const validationErrors = {};

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!form.name.trim()) {
        validationErrors.name =
          "Name is required";
      }

      if (!form.email.trim()) {
        validationErrors.email =
          "Email is required";
      } else if (
        !emailRegex.test(form.email)
      ) {
        validationErrors.email =
          "Please enter a valid email";
      }

      if (!form.password.trim()) {
        validationErrors.password =
          "Password is required";
      } else if (
        form.password.length < 6
      ) {
        validationErrors.password =
          "Password must be at least 6 characters";
      }

      setErrors(validationErrors);

      if (
        Object.keys(validationErrors)
          .length > 0
      ) {
        return;
      }

      try {
        setLoading(true);

        await registerUser(form);

        toast.success(
          "Account created successfully"
        );

        navigate("/login");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Registration failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 flex items-center justify-center px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          w-full
          max-w-md
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          p-8
        "
      >
        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mt-3">
          Start managing expenses today.
        </p>

        <div className="space-y-5 mt-8">
          {/* NAME */}
          <div>
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  name: e.target.value,
                });

                if (errors.name) {
                  setErrors((prev) => ({
                    ...prev,
                    name: "",
                  }));
                }
              }}
              className={`
                w-full
                bg-white/5
                border
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                outline-none
                transition-all
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-500/20
                ${
                  errors.name
                    ? "border-red-500"
                    : "border-white/10"
                }
              `}
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email:
                    e.target.value,
                });

                if (errors.email) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }
              }}
              className={`
                w-full
                bg-white/5
                border
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                outline-none
                transition-all
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-500/20
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
              value={form.password}
              onChange={(e) => {
                setForm({
                  ...form,
                  password:
                    e.target.value,
                });

                if (errors.password) {
                  setErrors((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }
              }}
              className={`
                w-full
                bg-white/5
                border
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                outline-none
                transition-all
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-500/20
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

          {/* REGISTER BUTTON */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="
              w-full
              bg-emerald-500
              hover:bg-emerald-400
              disabled:opacity-60
              disabled:cursor-not-allowed
              rounded-xl
              py-3
              font-semibold
              text-black
              transition-all
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;