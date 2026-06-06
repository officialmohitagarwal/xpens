import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  const [collapsed, setCollapsed] =
    useState(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#020B2D] text-white">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={
          setMobileMenuOpen
        }
      />

      <div
        className={`
          flex-1
          transition-all
          duration-300

          ${
            collapsed
              ? "md:ml-20"
              : "md:ml-64"
          }
        `}
      >
        <Navbar
          setMobileMenuOpen={
            setMobileMenuOpen
          }
        />

        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;