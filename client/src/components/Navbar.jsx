import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  Menu,
  ChevronDown,
  LogOut,
  KeyRound,
} from "lucide-react";

import ChangePasswordModal from "./ChangePasswordModal";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";

function Navbar({ setMobileMenuOpen }) {
  const [showDropdown, setShowDropdown] =
    useState(false);

  const [
    showPasswordModal,
    setShowPasswordModal,
  ] = useState(false);

  const dropdownRef = useRef(null);

  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    setShowDropdown(false);

    logout();

    toast.success(
      "Logged out successfully"
    );
  };

  const handleChangePassword = () => {
    setShowDropdown(false);

    setShowPasswordModal(true);
  };

  return (
    <>
      <header className="px-4 md:px-8 py-5 flex justify-between items-center border-b border-white/10">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setMobileMenuOpen?.(true)
            }
            className="
              md:hidden
              p-2
              rounded-xl
              hover:bg-white/10
              transition
            "
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              Expense Tracker
            </h1>

            <p className="hidden md:block text-slate-400 text-sm mt-1">
              Manage your expenses
              efficiently
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          

          {/* PROFILE */}
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setShowDropdown(
                  !showDropdown
                )
              }
              className="
                flex items-center gap-3
                bg-white/5
                border border-white/10
                px-3 py-2
                rounded-2xl
                hover:bg-white/10
                transition
              "
            >
              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-emerald-500
                  flex items-center justify-center
                  text-black
                  font-bold
                "
              >
                {user?.name
                  ?.charAt(0)
                  ?.toUpperCase() ||
                  "U"}
              </div>

              <div className="hidden md:block text-left">
                <h4 className="font-medium text-sm">
                  {user?.name}
                </h4>

                <p className="text-xs text-slate-400">
                  {user?.email}
                </p>
              </div>

              <ChevronDown size={16} />
            </button>

            {/* DROPDOWN */}
            {showDropdown && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-60
                  bg-[#010824]
                  border border-white/10
                  rounded-2xl
                  shadow-2xl
                  overflow-hidden
                  z-50
                "
              >
                <div className="px-4 py-4 border-b border-white/10">
                  <h4 className="font-semibold">
                    {user?.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={
                    handleChangePassword
                  }
                  className="
                    w-full
                    flex items-center gap-3
                    px-4 py-3
                    hover:bg-white/5
                    transition
                  "
                >
                  <KeyRound size={18} />
                  Change Password
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    flex items-center gap-3
                    px-4 py-3
                    text-red-400
                    hover:bg-red-500/10
                    transition
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <ChangePasswordModal
        isOpen={showPasswordModal}
        onClose={() =>
          setShowPasswordModal(false)
        }
      />
    </>
  );
}

export default Navbar;