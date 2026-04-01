import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "@/components/ui/ConfirmDialog";

const stats = [
  {
    label: "Total Companies",
    value: "0",
    icon: Building2,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Total Users",
    value: "0",
    icon: Users,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    label: "Active Modules",
    value: "0",
    icon: Settings,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

export default function SuperAdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleLogout = async () => {
    const ok = await confirm({
      title: "Sign out",
      description: "Are you sure you want to sign out of your account?",
      confirmLabel: "Sign Out",
      cancelLabel: "Stay",
      variant: "danger",
    });
    if (!ok) return;
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Top Nav ── */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary/20 rounded-xl flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              BRIFT
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
              {user?.role}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-muted-foreground mt-1">
            Super Admin Dashboard — Manage your platform
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-none shadow-md glass-card rounded-2xl hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Placeholder ── */}
        <Card className="border-none shadow-md glass-card rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>
              Features will appear here as they are built
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center text-muted-foreground text-sm border-2 border-dashed border-muted rounded-xl">
              Company management, module configuration, and more — coming soon
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
