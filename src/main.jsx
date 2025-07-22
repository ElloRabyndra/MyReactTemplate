import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./features/auth/useAuth";
import ThemeProvider from "./context/ThemeContext";
import ToastWrapper from "./components/common/ToastWrapper";
import Routing from "./routing/Routing";
import "./style/Style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ToastWrapper />
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
