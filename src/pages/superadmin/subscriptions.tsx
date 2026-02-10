
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CreditCard, Calendar, ArrowRight, UserCheck, ShieldAlert, History } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const SUBSCRIPTIONS = [
  { company: "BuildCore Structures", plan: "Enterprise", status: "Active", price: "$499/mo", renews: "Jun 12, 2024", modules: 5 },
  { company: "Urban Loft Developers", plan: "Pro", status: "Active", price: "$249/mo", renews: "Jun 05, 2024", modules: 3 },
  { company: "Skyline Heights", plan: "Basic", status: "Expired", price: "$99/mo", renews: "May 20, 2024", modules: 1 },
  { company: "EcoHome Innovators", plan: "Pro", status: "Active", price: "$249/mo", renews: "Jun 02, 2024", modules: 4 },
];

export default function SubscriptionsManagement() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">Subscriptions Hub</h1>
        <p className="text-muted-foreground font-medium text-lg">Manage platform access, license renewals, and custom plans.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Plans", value: "128", icon: UserCheck, color: "text-emerald-600" },
          { label: "Churn Rate", value: "2.4%", icon: ShieldAlert, color: "text-rose-600" },
          { label: "Pending Renewals", value: "14", icon: Calendar, color: "text-amber-600" },
          { label: "Revenue/Mo", value: "$42.5k", icon: CreditCard, color: "text-primary" },
        ].map((stat, i) => (
          <Card key={i} className="border-none glass-card rounded-3xl">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="p-3 bg-muted/50 rounded-2xl w-fit">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none glass-card rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="py-6 px-8 font-bold">Company</TableHead>
                <TableHead className="font-bold">Current Plan</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Next Billing</TableHead>
                <TableHead className="font-bold">Modules</TableHead>
                <TableHead className="text-right px-8 font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SUBSCRIPTIONS.map((sub, i) => (
                <TableRow key={i} className="group hover:bg-white/50 border-border/50 transition-colors">
                  <TableCell className="py-6 px-8">
                    <p className="font-black text-foreground">{sub.company}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <Badge variant="outline" className="w-fit rounded-lg font-bold border-muted mb-1">{sub.plan}</Badge>
                      <span className="text-[10px] font-black text-muted-foreground uppercase">{sub.price}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`rounded-lg font-bold border-none ${
                      sub.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {sub.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-bold text-muted-foreground">{sub.renews}</TableCell>
                  <TableCell className="font-black text-primary">{sub.modules}</TableCell>
                  <TableCell className="text-right px-8">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" className="rounded-xl font-black text-[10px] uppercase gap-1">
                        <History className="w-3 h-3" /> History
                      </Button>
                      <Button className="rounded-xl font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white border-none shadow-none">
                        Manage <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
