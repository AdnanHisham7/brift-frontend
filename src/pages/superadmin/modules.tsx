
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Plus, Package, Edit3, Trash2, Power, DollarSign, Clock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

const MODULES = [
  { id: "MOD-001", name: "Design Center", status: "Active", price: "$49", billing: "Monthly", type: "Visuals", usage: "85%" },
  { id: "MOD-002", name: "BOQ / Estimates", status: "Active", price: "$79", billing: "Monthly", type: "Finance", usage: "92%" },
  { id: "MOD-003", name: "Project Scheduling", status: "Active", price: "$59", billing: "Monthly", type: "Execution", usage: "64%" },
  { id: "MOD-004", name: "Site Task Manager", status: "Beta", price: "$29", billing: "Monthly", type: "Field Ops", usage: "30%" },
  { id: "MOD-005", name: "Advanced Analytics", status: "Inactive", price: "$129", billing: "Annual", type: "Insights", usage: "0%" },
];

export default function ModulesManagement() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-foreground tracking-tighter">Modules & Pricing</h1>
          <p className="text-muted-foreground font-medium text-lg">Define the platform's modular capabilities and their value.</p>
        </div>
        <Button className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 flex gap-2">
          <Plus className="w-6 h-6" />
          Create New Module
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Modules", value: "4", icon: Package },
          { label: "Avg. Price/Month", value: "$54", icon: DollarSign },
          { label: "Beta Testing", value: "1", icon: Clock },
        ].map((stat, i) => (
          <Card key={i} className="border-none glass-card rounded-3xl">
            <CardContent className="p-8 flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
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
                <TableHead className="py-6 px-8 font-bold">Module Name</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="font-bold">Base Pricing</TableHead>
                <TableHead className="font-bold">Adoption</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="text-right px-8 font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MODULES.map((mod) => (
                <TableRow key={mod.id} className="group hover:bg-white/50 border-border/50 transition-colors">
                  <TableCell className="py-6 px-8">
                    <div>
                      <p className="font-bold text-base leading-none mb-1">{mod.name}</p>
                      <p className="text-xs text-muted-foreground font-medium">{mod.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-lg font-bold bg-muted/50 text-muted-foreground border-none">
                      {mod.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-black text-foreground">{mod.price}</span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{mod.billing}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: mod.usage }} />
                      </div>
                      <span className="text-xs font-black">{mod.usage}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`rounded-lg font-bold border-none ${
                      mod.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                      mod.status === 'Beta' ? 'bg-amber-100 text-amber-700' : 'bg-muted text-muted-foreground'
                    }`}>
                      {mod.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary"><Edit3 className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 hover:text-rose-600"><Power className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 hover:text-rose-600"><Trash2 className="w-4 h-4" /></Button>
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
