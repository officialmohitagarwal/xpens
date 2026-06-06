import { useState } from "react";

import toast from "react-hot-toast";

import api from "../services/api";

import { X } from "lucide-react";

function ChangePasswordModal({
  isOpen,
  onClose,
}) {
  const [form, setForm] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.newPassword.length < 6
    ) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    if (
      form.newPassword !==
      form.confirmPassword
    ) {
      return toast.error(
        "Passwords do not match"
      );
    }

    try {
      await api.put(
        "/auth/change-password",
        {
          currentPassword:
            form.currentPassword,
          newPassword:
            form.newPassword,
        }
      );

      toast.success(
        "Password changed successfully"
      );

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Failed to change password"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#010824] border border-white/10 rounded-3xl w-full max-w-md">

        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">
            Change Password
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4"
        >
          <input
            type="password"
            placeholder="Current Password"
            value={
              form.currentPassword
            }
            onChange={(e) =>
              setForm({
                ...form,
                currentPassword:
                  e.target.value,
              })
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            value={form.newPassword}
            onChange={(e) =>
              setForm({
                ...form,
                newPassword:
                  e.target.value,
              })
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={
              form.confirmPassword
            }
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword:
                  e.target.value,
              })
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-xl transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordModal;