import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { LayoutDashboard } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "@/services/auth.service";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.login({ email, password });
      login(response.data.token, response.data.user);
      toast.success("Welcome back!");

      // Route based on role
      const role = response.data.user.role;
      if (role === "SUPER_ADMIN") {
        navigate("/superadmin/dashboard");
      } else if (role === "COMPANY_ADMIN") {
        navigate("/company/dashboard");
      } else {
        navigate("/client/dashboard");
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || "Login failed. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <Card className="w-full max-w-md border-none shadow-2xl glass-card rounded-4xl overflow-hidden">
        <CardHeader className="space-y-1 text-center pb-8 pt-10">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
            <LayoutDashboard className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
            BRIFT Platform
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Modern Construction Management Ecosystem
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4 px-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@brift.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-background/50 border-muted"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl bg-background/50 border-muted"
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-md font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col space-y-4 pb-10 px-8">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-muted-foreground font-medium">
                First time?
              </span>
            </div>
          </div>
          <Link to="/setup" className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-xl bg-white/50 border-muted hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Set up Super Admin
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
