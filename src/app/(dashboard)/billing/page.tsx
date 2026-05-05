"use client"

import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { BarChart } from "@tremor/react"
import { CreditCard, ShieldCheck, Zap, Download, ExternalLink, ArrowUpRight } from "lucide-react"

const usageData = [
  { feature: "Releases", Usage: 12 },
  { feature: "Tests", Usage: 84 },
  { feature: "Docs", Usage: 32 },
  { feature: "CLI", Usage: 145 },
]

const invoices = [
  { id: "INV-2026-004", date: "May 1, 2026", amount: "$25.00", status: "Paid" },
  { id: "INV-2026-003", date: "Apr 1, 2026", amount: "$25.00", status: "Paid" },
  { id: "INV-2026-002", date: "Mar 1, 2026", amount: "$25.00", status: "Paid" },
]

export default function BillingPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Billing" 
        subtitle="Manage your team's subscription, usage, and invoices."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <Card className="lg:col-span-1 shadow-none border-border-default h-fit">
          <CardHeader className="border-b border-border-subtle pb-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-primary" />
              Current Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight">Team Plan</span>
              <span className="text-sm text-text-tertiary">$25 per seat / month</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Seats used</span>
                <span className="font-medium">3 / 10</span>
              </div>
              <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                <div className="h-full bg-brand-primary rounded-full" style={{ width: "30%" }} />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-status-success" />
                Renewal: June 1, 2026
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border-subtle p-4 bg-surface-1/50">
            <Button className="w-full h-9 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium">
              Manage Subscription
            </Button>
          </CardFooter>
        </Card>

        {/* Usage Breakdown */}
        <Card className="lg:col-span-2 shadow-none border-border-default">
          <CardHeader className="border-b border-border-subtle pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Usage (Current Month)</CardTitle>
            <StatusBadge status="neutral" className="h-5">Pro-rata billing enabled</StatusBadge>
          </CardHeader>
          <CardContent className="pt-8">
            <BarChart
              className="h-64 mt-4"
              data={usageData}
              index="feature"
              categories={["Usage"]}
              colors={["blue"]}
              showLegend={false}
              showGridLines={false}
              showXAxis={true}
              showYAxis={true}
              yAxisWidth={30}
            />
          </CardContent>
        </Card>
      </div>

      {/* Invoice History */}
      <Card className="shadow-none border-border-default">
        <CardHeader className="border-b border-border-subtle pb-4">
          <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
            <History className="w-4 h-4 text-text-tertiary" />
            Invoice History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface-1/50 border-b border-border-subtle">
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id} className="border-b border-border-subtle hover:bg-surface-1 transition-colors">
                  <TableCell className="font-mono text-sm">{inv.id}</TableCell>
                  <TableCell className="text-sm text-text-secondary">{inv.date}</TableCell>
                  <TableCell className="text-sm font-medium">{inv.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-status-success text-xs font-medium">
                      Paid
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary hover:text-text-primary gap-2">
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function History(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}
