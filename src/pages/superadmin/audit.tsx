import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { History, Search, Download, Filter, User } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const AUDIT_LOGS = [
  {
    timestamp: "2024-05-18 10:45:22",
    user: "Alex Johnson",
    action: "Updated Feature Flag",
    target: "beta-genai",
    ip: "192.168.1.1",
    module: "Flags",
  },
  {
    timestamp: "2024-05-18 09:12:05",
    user: "Jordan Smith",
    action: "Suspended Company",
    target: "Skyline Heights",
    ip: "192.168.1.45",
    module: "Companies",
  },
  {
    timestamp: "2024-05-17 18:30:11",
    user: "Sarah Miller",
    action: "Created Module",
    target: "Analytics Pro",
    ip: "10.0.0.5",
    module: "Modules",
  },
  {
    timestamp: "2024-05-17 15:20:44",
    user: "David Chen",
    action: "Modified Subscription",
    target: "BuildCore Structures",
    ip: "172.16.254.1",
    module: "Billing",
  },
  {
    timestamp: "2024-05-17 11:05:30",
    user: "System",
    action: "Automatic Backup",
    target: "Production DB",
    ip: "Internal",
    module: "Core",
  },
];

export default function AuditLogs() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-foreground tracking-tighter">
            Audit Logs
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            Detailed history of all critical actions performed across the
            platform.
          </p>
        </div>
        <Button
          variant="outline"
          className="h-14 px-8 rounded-2xl border-none shadow-sm bg-white font-bold flex gap-2"
        >
          <Download className="w-5 h-5" />
          Export Logs
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search logs by user, action or target..."
            className="h-14 bg-white rounded-2xl pl-12 border-none shadow-sm focus-visible:ring-primary/20 text-lg"
          />
        </div>
        <Button
          variant="outline"
          className="h-14 px-6 rounded-2xl border-none shadow-sm bg-white font-bold flex gap-2"
        >
          <Filter className="w-5 h-5" />
          Date Range
        </Button>
      </div>

      <div className="space-y-4">
        {AUDIT_LOGS.map((log, i) => (
          <Card
            key={i}
            className="border-none glass-card rounded-3xl p-1 overflow-hidden group hover:bg-white/60 transition-colors"
          >
            <CardContent className="p-6 flex items-center gap-8">
              <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <History className="w-6 h-6" />
              </div>
              <div className="flex-1 grid grid-cols-5 gap-6 items-center">
                <div className="col-span-1 space-y-1">
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                    {log.timestamp}
                  </p>
                  <p className="font-bold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" /> {log.user}
                  </p>
                </div>
                <div className="col-span-1">
                  <Badge
                    variant="secondary"
                    className="bg-secondary/50 text-[10px] uppercase font-black px-2 py-0.5 rounded-lg"
                  >
                    {log.module}
                  </Badge>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-bold text-foreground">
                    {log.action}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Target:{" "}
                    <span className="text-foreground font-bold">
                      {log.target}
                    </span>
                  </p>
                </div>
                <div className="col-span-1 flex justify-end">
                  <p className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                    {log.ip}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
