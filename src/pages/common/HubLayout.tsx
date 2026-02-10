import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/Sidebar";
import { Bell, Search, User } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function HubLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 ">
          <header className="h-16 border-b border-border/50 px-6 flex items-center justify-between bg-white/40 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-4">
              {/* Sidebar toggle (visible on all screens) */}
              <div className="mr-2">
                <SidebarTrigger />
              </div>

              <div className="relative max-w-md w-[min(50vw,28rem)] group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Quick search..."
                  className="bg-muted/30 border-none rounded-2xl pl-10 h-10 w-full focus-visible:ring-1 focus-visible:ring-primary/30"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/50 border border-border/30 relative"
              >
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/50 border border-border/30"
              >
                <User className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto bg-background/30 p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
