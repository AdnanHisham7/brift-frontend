import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { authService } from "@/services/auth.service";
import { toast } from "sonner";

const STEPS = ["Account Details", "Security", "Confirm"];

export default function SetupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 0) return form.firstName && form.lastName && form.email;
    if (step === 1)
      return form.password.length >= 6 && form.password === form.confirmPassword;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await authService.bootstrapSuperAdmin({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      toast.success("Super admin created! Please sign in.");
      navigate("/login");
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || "Setup failed. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      <Card className="w-full max-w-lg border-none shadow-2xl glass-card rounded-4xl overflow-hidden">
        <CardHeader className="text-center pb-6 pt-10">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
            Platform Setup
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Create the Super Admin account to get started
          </CardDescription>
        </CardHeader>

        {/* ── Stepper ── */}
        <div className="px-8 pb-4">
          <div className="flex items-center justify-between">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                    ${
                      i < step
                        ? "bg-primary text-primary-foreground"
                        : i === step
                        ? "bg-primary/20 text-primary ring-2 ring-primary/40"
                        : "bg-muted text-muted-foreground"
                    }`}
                >
                  {i < step ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:block ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-2 ${
                      i < step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <CardContent className="px-8 pb-10 space-y-5">
          {/* ── Step 0: Account Details ── */}
          {step === 0 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className="h-12 rounded-xl bg-background/50 border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className="h-12 rounded-xl bg-background/50 border-muted"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="setupEmail">Email Address</Label>
                <Input
                  id="setupEmail"
                  type="email"
                  placeholder="admin@brift.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-muted"
                />
              </div>
            </div>
          )}

          {/* ── Step 1: Security ── */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <Label htmlFor="setupPassword">Password</Label>
                <Input
                  id="setupPassword"
                  type="password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-muted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-muted"
                />
                {form.confirmPassword &&
                  form.password !== form.confirmPassword && (
                    <p className="text-xs text-destructive">
                      Passwords do not match
                    </p>
                  )}
              </div>
            </div>
          )}

          {/* ── Step 2: Confirm ── */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="rounded-xl bg-muted/50 p-5 space-y-3">
                <h4 className="font-semibold text-foreground">
                  Review your details
                </h4>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <span className="text-foreground font-medium">
                    {form.firstName} {form.lastName}
                  </span>
                  <span className="text-muted-foreground">Email</span>
                  <span className="text-foreground font-medium">
                    {form.email}
                  </span>
                  <span className="text-muted-foreground">Role</span>
                  <span className="text-foreground font-medium">
                    Super Admin
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation ── */}
          <div className="flex justify-between pt-2">
            {step > 0 ? (
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() => setStep((s) => s - 1)}
              >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <Button
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                disabled={!canNext()}
                onClick={() => setStep((s) => s + 1)}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Creating..." : "Create Super Admin"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
