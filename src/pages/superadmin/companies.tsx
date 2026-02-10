import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  Filter,
  MoreVertical,
  Power,
  ShieldCheck,
  ExternalLink,
  Users,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Card, CardContent } from "@/components/ui/Card";

const COMPANIES = [
  {
    id: "COMP-101",
    name: "BuildCore Structures",
    owner: "Marcus Aurelius",
    plan: "Enterprise",
    status: "Active",
    modules: 5,
    users: 24,
    joinDate: "Jan 12, 2024",
  },
  {
    id: "COMP-102",
    name: "Urban Loft Developers",
    owner: "Sarah Connor",
    plan: "Pro",
    status: "Active",
    modules: 3,
    users: 12,
    joinDate: "Feb 05, 2024",
  },
  {
    id: "COMP-103",
    name: "Skyline Heights",
    owner: "John Wick",
    plan: "Basic",
    status: "Suspended",
    modules: 1,
    users: 5,
    joinDate: "Mar 20, 2024",
  },
  {
    id: "COMP-104",
    name: "EcoHome Innovators",
    owner: "Ellen Ripley",
    plan: "Pro",
    status: "Active",
    modules: 4,
    users: 18,
    joinDate: "Apr 02, 2024",
  },
];

export default function CompaniesManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-foreground tracking-tighter">
            Companies Management
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            Oversee all customer accounts and platform utilization.
          </p>
        </div>
        <Button className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 flex gap-2">
          Register New Company
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search by company name, ID or owner..."
            className="h-14 bg-white rounded-2xl pl-12 border-none shadow-sm focus-visible:ring-primary/20 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          className="h-14 px-6 rounded-2xl border-none shadow-sm bg-white font-bold flex gap-2"
        >
          <Filter className="w-5 h-5" />
          Filters
        </Button>
      </div>

      <Card className="border-none glass-card rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="w-[300px] py-6 px-8 font-bold">
                  Company
                </TableHead>
                <TableHead className="font-bold">Subscription</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold text-center">Modules</TableHead>
                <TableHead className="font-bold text-center">Users</TableHead>
                <TableHead className="font-bold">Joined</TableHead>
                <TableHead className="text-right px-8 font-bold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPANIES.map((company) => (
                <TableRow
                  key={company.id}
                  className="group hover:bg-white/50 border-border/50 transition-colors"
                >
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">
                        {company.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-base leading-none mb-1">
                          {company.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {company.id} • {company.owner}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-lg font-bold border-muted text-foreground/70"
                    >
                      {company.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${company.status === "Active" ? "bg-emerald-500" : "bg-rose-500"}`}
                      />
                      <span className="text-sm font-bold">
                        {company.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-black text-primary">
                    {company.modules}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1 font-bold">
                      <Users className="w-3 h-3" />
                      {company.users}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-muted-foreground">
                    {company.joinDate}
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="rounded-xl p-2 min-w-[180px]"
                      >
                        <DropdownMenuLabel>Company Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer">
                          <ExternalLink className="w-4 h-4" /> Impersonate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer">
                          <ShieldCheck className="w-4 h-4" /> Feature Flags
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className={`rounded-lg gap-2 cursor-pointer ${company.status === "Active" ? "text-destructive" : "text-emerald-600"}`}
                        >
                          <Power className="w-4 h-4" />{" "}
                          {company.status === "Active"
                            ? "Suspend Account"
                            : "Activate Account"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
