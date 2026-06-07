import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
 
    <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </ThemeProvider>
    <Toaster
    position="bottom-center"
    toastOptions={{
    style: {
      background: "#0f172a",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "16px",
    },

    success: {
      iconTheme: {
        primary: "#22c55e",
        secondary: "#fff",
      },
    },

    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff",
      },
    },
  }}
/>
   </>
);