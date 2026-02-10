import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Switch } from "@/components/ui/Switch";
import { Globe, Mail, Zap, Settings, Key, Database } from "lucide-react";

export default function GlobalSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">
          System Settings
        </h1>
        <p className="text-muted-foreground font-medium text-lg">
          Configure global platform behavior, API integrations and security
          policies.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList className="bg-white/40 p-1.5 rounded-2xl h-auto border border-white/20">
          <TabsTrigger
            value="general"
            className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Email & Notifications
          </TabsTrigger>
          <TabsTrigger
            value="api"
            className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            API & Integrations
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-xl px-6 py-2.5 font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none glass-card rounded-[2.5rem] p-8">
              <CardHeader className="p-0 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-black">
                    Environment
                  </CardTitle>
                </div>
                <CardDescription>
                  Global platform metadata and system identity.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-2">
                  <Label className="font-bold">Platform Name</Label>
                  <Input
                    defaultValue="BRIFT Construction SaaS"
                    className="h-12 rounded-xl bg-white/50 border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">Support Email</Label>
                  <Input
                    defaultValue="ops@brift.com"
                    className="h-12 rounded-xl bg-white/50 border-muted"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold">
                      Maintenance Mode
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Put the entire platform into read-only mode.
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none glass-card rounded-[2.5rem] p-8">
              <CardHeader className="p-0 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-black">
                    Performance
                  </CardTitle>
                </div>
                <CardDescription>
                  Cache settings and system optimization.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold">Global CDN</Label>
                    <p className="text-xs text-muted-foreground">
                      Accelerate asset delivery via Edge network.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold">
                      Real-time Updates
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Enable WebSocket connections for all users.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-6">
          <Card className="border-none glass-card rounded-[2.5rem] p-10">
            <CardHeader className="p-0 mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-2xl font-black">
                  Communication SMTP
                </CardTitle>
              </div>
              <CardDescription>
                Configure the system that sends emails to all platform users.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="font-bold">SMTP Host</Label>
                <Input
                  placeholder="smtp.postmarkapp.com"
                  className="h-12 rounded-xl bg-white/50 border-muted"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold">SMTP Port</Label>
                <Input
                  placeholder="587"
                  className="h-12 rounded-xl bg-white/50 border-muted"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold">Sender Identity</Label>
                <Input
                  placeholder="BRIFT Notifications <no-reply@brift.com>"
                  className="h-12 rounded-xl bg-white/50 border-muted"
                />
              </div>
              <div className="flex items-end">
                <Button className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">
                  Test Connection
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card className="border-none glass-card rounded-[2.5rem] p-10">
            <CardHeader className="p-0 mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-2xl font-black">
                  Third-Party Keys
                </CardTitle>
              </div>
              <CardDescription>
                Manage keys for Stripe, Google Maps, and WhatsApp Business API.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[1.5rem] border border-muted/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Settings className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Stripe Connect Secret</p>
                    <p className="text-xs text-muted-foreground">
                      ••••••••••••••••••••••••••••••••
                    </p>
                  </div>
                </div>
                <Button variant="ghost" className="font-bold text-primary">
                  Revoke & Rotate
                </Button>
              </div>
              <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[1.5rem] border border-muted/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Database className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Firebase Admin SDK</p>
                    <p className="text-xs text-muted-foreground">
                      Service account JSON uploaded on May 12
                    </p>
                  </div>
                </div>
                <Button variant="ghost" className="font-bold text-primary">
                  Upload New
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button
          variant="outline"
          className="h-14 px-10 rounded-2xl border-none shadow-sm bg-white font-bold"
        >
          Discard Changes
        </Button>
        <Button className="h-14 px-10 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-xl shadow-primary/20">
          Save Global Config
        </Button>
      </div>
    </div>
  );
}
