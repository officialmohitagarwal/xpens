import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ReceiptIndianRupee,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

function Sidebar({
  collapsed,
  setCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Expenses",
      icon: ReceiptIndianRupee,
      path: "/expenses",
    },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          onClick={() =>
            setMobileMenuOpen(false)
          }
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen
          bg-[#010824]
          border-r border-white/10
          flex flex-col
          transition-all duration-300
          shrink-0

          ${
            collapsed
              ? "md:w-20"
              : "md:w-64"
          }

          w-72

          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* HEADER */}
        <div className="p-5 flex justify-between items-center border-b border-white/10">
          {!collapsed ? (
            <h1 className="text-2xl font-bold text-emerald-400">
              XPens
            </h1>
          ) : (
            <h1 className="text-xl font-bold text-emerald-400 mx-auto">
              X
            </h1>
          )}

          <div className="flex items-center gap-2">
            {/* MOBILE CLOSE */}
            <button
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="md:hidden"
            >
              <X size={22} />
            </button>

            {/* DESKTOP COLLAPSE */}
            <button
              onClick={() =>
                setCollapsed(
                  !collapsed
                )
              }
              className="hidden md:block"
            >
              {collapsed ? (
                <ChevronRight
                  size={20}
                />
              ) : (
                <ChevronLeft
                  size={20}
                />
              )}
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="px-3 py-5 flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className={({ isActive }) =>
                `
                flex items-center
                ${
                  collapsed
                    ? "justify-center"
                    : ""
                }
                gap-4
                mb-3
                rounded-2xl
                px-4
                py-4
                transition-all

                ${
                  isActive
                    ? "bg-emerald-500/20 border border-emerald-400 text-emerald-400"
                    : "hover:bg-white/5 text-white"
                }
              `
              }
            >
              <item.icon size={22} />

              {!collapsed && (
                <span className="font-medium">
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;