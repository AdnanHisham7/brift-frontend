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
import { Building2, LayoutDashboard, UserSquare2, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role: string) => {
    setLoading(true);
    // Simulate auth logic
    setTimeout(() => {
      if (role === "superadmin") navigate("/superadmin/dashboard");
      else if (role === "companyadmin") navigate("/company/dashboard");
      else navigate("/client/dashboard");
    }, 800);
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
        <CardContent className="space-y-4 px-8">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@brift.com"
              className="h-12 rounded-xl bg-background/50 border-muted"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="h-12 rounded-xl bg-background/50 border-muted"
            />
          </div>
          <Button
            className="w-full h-12 text-md font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Sign In"}
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-10 px-8">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-muted-foreground font-medium">
                Demo Access
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <Button
              variant="outline"
              className="flex flex-col h-auto py-3 gap-1 rounded-xl bg-white/50 border-muted hover:border-primary/40 hover:bg-primary/5 group"
              onClick={() => handleLogin("superadmin")}
            >
              <UserSquare2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-semibold text-muted-foreground">
                SuperAdmin
              </span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col h-auto py-3 gap-1 rounded-xl bg-white/50 border-muted hover:border-primary/40 hover:bg-primary/5 group"
              onClick={() => handleLogin("companyadmin")}
            >
              <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-semibold text-muted-foreground">
                Company
              </span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col h-auto py-3 gap-1 rounded-xl bg-white/50 border-muted hover:border-primary/40 hover:bg-primary/5 group"
              onClick={() => handleLogin("client")}
            >
              <LogIn className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-semibold text-muted-foreground">
                Client
              </span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
