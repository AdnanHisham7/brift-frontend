import {
  Building2,
  Package,
  TrendingUp,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { StatCard } from "@/components/dashboard/StatCard";

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">
          SuperAdmin Hub
        </h1>
        <p className="text-muted-foreground font-medium text-lg">
          System-wide performance and control center.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Companies"
          value="142"
          description="12 pending activation"
          icon={Building2}
          trend={{ value: "8.2%", isUp: true }}
        />
        <StatCard
          title="Active Subscriptions"
          value="128"
          description="90% renewal rate"
          icon={TrendingUp}
          trend={{ value: "12%", isUp: true }}
        />
        <StatCard
          title="Monthly Revenue"
          value="$45,290"
          description="+$4.2k from last month"
          icon={Package}
          trend={{ value: "5.4%", isUp: true }}
        />
        <StatCard
          title="System Health"
          value="99.9%"
          description="All services operational"
          icon={ShieldCheck}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 glass-card border-none rounded-4xl">
          <CardHeader className="p-8">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Recent Module Adoption
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            {[
              { name: "BOQ / Estimates", users: 120, color: "bg-primary" },
              { name: "Design Feedback", users: 85, color: "bg-accent" },
              { name: "Scheduling", users: 64, color: "bg-blue-400" },
              { name: "Site Tasks", users: 45, color: "bg-emerald-400" },
            ].map((module) => (
              <div key={module.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>{module.name}</span>
                  <span className="text-muted-foreground">
                    {module.users} companies
                  </span>
                </div>
                <Progress
                  value={(module.users / 142) * 100}
                  className={`h-2.5 rounded-full ${module.color}`}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card border-none rounded-4xl">
          <CardHeader className="p-8">
            <CardTitle className="text-xl font-bold">
              New Registrations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-muted overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/comp${i}/100/100`}
                      alt="company"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold leading-none mb-1 group-hover:text-primary transition-colors">
                      BuildCore Structures
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      Pro Plan • 2 mins ago
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
