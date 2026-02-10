import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/common/Login";
import HubLayout from "@/pages/common/HubLayout";

/* SUPERADMIN */
import SuperAdminDashboard from "@/pages/superadmin/dashboard";
import CompaniesManagement from "@/pages/superadmin/companies";
import ModulesManagement from "@/pages/superadmin/modules";
import SubscriptionsManagement from "@/pages/superadmin/subscriptions";
import PaymentsManagement from "@/pages/superadmin/payments";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Superadmin */}
      <Route path="/superadmin" element={<HubLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="companies" element={<CompaniesManagement />} />
        <Route path="modules" element={<ModulesManagement />} />
        <Route path="subscriptions" element={<SubscriptionsManagement  />} />
        <Route path="payments" element={<PaymentsManagement />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
