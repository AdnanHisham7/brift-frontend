import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Search, UserPlus, MoreVertical, Lock, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

const SYSTEM_USERS = [
  {
    name: "Alex Johnson",
    role: "Super Admin",
    email: "alex@brift.com",
    status: "Active",
    lastActive: "Just now",
    avatar: "https://picsum.photos/seed/brift1/200/200",
  },
  {
    name: "Jordan Smith",
    role: "Support Lead",
    email: "jordan@brift.com",
    status: "Active",
    lastActive: "2 hrs ago",
    avatar: "https://picsum.photos/seed/brift2/200/200",
  },
  {
    name: "Sarah Miller",
    role: "Operations",
    email: "sarah@brift.com",
    status: "Inactive",
    lastActive: "2 days ago",
    avatar: "https://picsum.photos/seed/brift3/200/200",
  },
  {
    name: "David Chen",
    role: "Super Admin",
    email: "david@brift.com",
    status: "Active",
    lastActive: "5 mins ago",
    avatar: "https://picsum.photos/seed/brift4/200/200",
  },
];

export default function SystemUsersManagement() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-foreground tracking-tighter">
            System Users
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            Manage internal platform administrators and support staff.
          </p>
        </div>
        <Button className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 flex gap-2">
          <UserPlus className="w-6 h-6" />
          Invite Admin
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search system users by name or email..."
            className="h-14 bg-white rounded-2xl pl-12 border-none shadow-sm focus-visible:ring-primary/20 text-lg"
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
                <TableHead className="py-6 px-8 font-bold">User</TableHead>
                <TableHead className="font-bold">Role</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Last Active</TableHead>
                <TableHead className="text-right px-8 font-bold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SYSTEM_USERS.map((user, i) => (
                <TableRow
                  key={i}
                  className="group hover:bg-white/50 border-border/50 transition-colors"
                >
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 rounded-xl border-2 border-white shadow-sm">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-base leading-none mb-1">
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-lg font-bold border-primary/20 bg-primary/5 text-primary"
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-muted"}`}
                      />
                      <span className="text-sm font-bold">{user.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-muted-foreground">
                    {user.lastActive}
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Lock className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <MoreVertical className="w-5 h-5" />
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
