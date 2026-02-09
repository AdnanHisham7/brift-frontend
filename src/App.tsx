import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/common/Login";
import HubLayout from "./pages/common/HubLayout";

/* SUPERADMIN */
import SuperAdminDashboard from "./pages/superadmin/dashboard";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Superadmin */}
      <Route path="/superadmin" element={<HubLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
