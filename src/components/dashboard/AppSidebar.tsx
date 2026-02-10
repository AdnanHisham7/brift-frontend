import {
  BarChart3,
  Building2,
  CreditCard,
  History,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarItem {
  title: string;
  url: string;
  icon: any;
  moduleId?: string;
}

const SUPERADMIN_ITEMS: SidebarItem[] = [
  { title: "Dashboard", url: "/superadmin/dashboard", icon: LayoutDashboard },
  { title: "Companies", url: "/superadmin/companies", icon: Building2 },
  { title: "Modules & Pricing", url: "/superadmin/modules", icon: Package },
  {
    title: "Subscriptions",
    url: "/superadmin/subscriptions",
    icon: CreditCard,
  },
  { title: "Payments", url: "/superadmin/payments", icon: BarChart3 },
  { title: "System Users", url: "/superadmin/users", icon: Users },
  { title: "Audit Logs", url: "/superadmin/audit", icon: History },
  { title: "Settings", url: "/superadmin/settings", icon: Settings },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  let items: SidebarItem[] = [];
  let roleLabel = "";
  let avatarUrl = PlaceHolderImages[0].imageUrl;

  if (pathname.startsWith("/superadmin")) {
    items = SUPERADMIN_ITEMS;
    roleLabel = "Super Admin";
  }

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border bg-sidebar/50 backdrop-blur-xl"
    >
      <SidebarHeader className="p-4 flex flex-row items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-sm">
          B
        </div>
        <span className="font-bold text-lg tracking-tight group-data-[collapsible=icon]:hidden">
          BRIFT
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-wider font-bold text-muted-foreground/60 mb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="rounded-xl px-4 py-6 transition-all"
                  >
                    <item.icon
                      className={`w-5 h-5 ${pathname === item.url ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 mb-4 group-data-[collapsible=icon]:hidden p-3 bg-white/40 rounded-2xl border border-white/20 shadow-sm">
          <Avatar className="h-9 w-9 rounded-xl border border-white shadow-sm">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none mb-1">
              Alex Johnson
            </span>
            <span className="text-[10px] text-muted-foreground font-medium">
              {roleLabel}
            </span>
          </div>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate("/login")}
              className="rounded-xl text-destructive hover:text-destructive hover:bg-destructive/5"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
