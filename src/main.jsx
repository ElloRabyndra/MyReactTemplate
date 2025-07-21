import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/Style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./features/auth/useAuth";
import AuthRedirect from "./features/auth/AuthRedirect";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import ThemeProvider from "./context/ThemeContext";
import ToastWrapper from "./components/common/ToastWrapper";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ToastWrapper />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
