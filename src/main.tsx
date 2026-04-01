import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ConfirmProvider } from "./components/ui/ConfirmDialog.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ConfirmProvider>
          <App />
          <Toaster
            position="bottom-right"
            richColors
            toastOptions={{
              style: {
                borderRadius: "0.75rem",
              },
            }}
          />
        </ConfirmProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
