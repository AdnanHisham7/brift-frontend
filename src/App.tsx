import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/common/Login";
import SetupPage from "@/pages/system/SetupPage";
import SuperAdminDashboard from "@/pages/superadmin/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/setup" element={<SetupPage />} />

      {/* Super Admin */}
      <Route
        path="/superadmin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
