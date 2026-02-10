import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Search,
  Download,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

const TRANSACTIONS = [
  {
    id: "TXN-8821",
    company: "BuildCore Structures",
    date: "May 12, 2024",
    amount: "$499.00",
    status: "Successful",
    method: "Visa •••• 4242",
  },
  {
    id: "TXN-8819",
    company: "Urban Loft Developers",
    date: "May 10, 2024",
    amount: "$249.00",
    status: "Successful",
    method: "Mastercard •••• 1111",
  },
  {
    id: "TXN-8815",
    company: "Skyline Heights",
    date: "May 08, 2024",
    amount: "$99.00",
    status: "Failed",
    method: "Visa •••• 5555",
  },
  {
    id: "TXN-8812",
    company: "EcoHome Innovators",
    date: "May 05, 2024",
    amount: "$249.00",
    status: "Pending",
    method: "Bank Transfer",
  },
];

export default function PaymentsManagement() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">
          Payments & Billing
        </h1>
        <p className="text-muted-foreground font-medium text-lg">
          Monitor transaction flow, revenue collection, and failed billing
          attempts.
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search transactions by ID, company or amount..."
            className="h-14 bg-white rounded-2xl pl-12 border-none shadow-sm focus-visible:ring-primary/20 text-lg"
          />
        </div>
        <Button
          variant="outline"
          className="h-14 px-6 rounded-2xl border-none shadow-sm bg-white font-bold flex gap-2"
        >
          <Filter className="w-5 h-5" />
          Filter
        </Button>
        <Button className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 flex gap-2">
          <Download className="w-6 h-6" /> Export CSV
        </Button>
      </div>

      <Card className="border-none glass-card rounded-[2.5rem] overflow-hidden">
        <CardHeader className="p-10 pb-0">
          <CardTitle className="text-2xl font-black">
            Global Transaction Log
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 pt-6">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-muted/50">
                <TableHead className="font-bold">Transaction ID</TableHead>
                <TableHead className="font-bold">Company</TableHead>
                <TableHead className="font-bold">Amount</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Payment Method</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="text-right font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TRANSACTIONS.map((txn) => (
                <TableRow
                  key={txn.id}
                  className="group hover:bg-white/40 border-muted/20"
                >
                  <TableCell className="py-6">
                    <p className="font-black text-primary">{txn.id}</p>
                  </TableCell>
                  <TableCell className="font-bold">{txn.company}</TableCell>
                  <TableCell className="font-black text-lg">
                    {txn.amount}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {txn.status === "Successful" ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : txn.status === "Failed" ? (
                        <XCircle className="w-4 h-4 text-rose-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-500" />
                      )}
                      <span
                        className={`text-sm font-bold ${
                          txn.status === "Successful"
                            ? "text-emerald-700"
                            : txn.status === "Failed"
                              ? "text-rose-700"
                              : "text-amber-700"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">
                    {txn.method}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-muted-foreground">
                    {txn.date}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary"
                    >
                      <FileText className="w-4 h-4" />
                    </Button>
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
