"use client"

import { PageHeader } from "@/components/ui/page-header"
import { StatCard } from "@/components/ui/stat-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  TestTube2, 
  Play, 
  History, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Filter,
  MoreVertical
} from "lucide-react"

const testRuns = [
  { id: "TR-501", suite: "Navigation Tests", status: "passed", duration: "1m 12s", triggeredBy: "Sienna", time: "12m ago" },
  { id: "TR-502", suite: "Checkout Logic", status: "failed", duration: "45s", triggeredBy: "GitHub Actions", time: "1h ago" },
  { id: "TR-503", suite: "Auth Integration", status: "passed", duration: "2m 04s", triggeredBy: "Max", time: "3h ago" },
  { id: "TR-504", suite: "Riverpod Store", status: "flaky", duration: "1m 30s", triggeredBy: "Sienna", time: "5h ago" },
  { id: "TR-505", suite: "Accessibility Audit", status: "passed", duration: "5m 20s", triggeredBy: "System", time: "8h ago" },
]

const flakyTests = [
  { name: "checkout_payment_retry_test.dart", percentage: "18%", count: 12 },
  { name: "auth_mfa_redirect_test.dart", percentage: "14%", count: 8 },
  { name: "image_picker_gallery_test.dart", percentage: "9%", count: 5 },
]

export default function QATestingPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="AI QA Testing" 
        subtitle="Automated Flutter testing suites with AI-powered flake detection."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 h-9 border-border-emphasis">
              <History className="w-4 h-4" />
              History
            </Button>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium gap-2 h-9">
              <Play className="w-4 h-4" />
              Run All Tests
            </Button>
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Pass Rate" value="98.2%" change="+1.4%" trend="up" />
        <StatCard title="Total Runs (24h)" value="2,140" change="+120" trend="up" />
        <StatCard title="Flaky Tests" value="12" change="-2" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Test List */}
        <Card className="lg:col-span-3 shadow-none border-border-default">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border-subtle pb-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Recent Test Runs</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary gap-2">
              <Filter className="w-3.5 h-3.5" />
              Filter
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface-1/50 border-b border-border-subtle">
                  <TableHead>Suite</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Triggered By</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testRuns.map((run) => (
                  <TableRow key={run.id} className="border-b border-border-subtle hover:bg-surface-1 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <TestTube2 className="w-4 h-4 text-text-tertiary" />
                        <span className="font-medium text-sm">{run.suite}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {run.status === "passed" && (
                        <div className="flex items-center gap-1.5 text-status-success text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Passed
                        </div>
                      )}
                      {run.status === "failed" && (
                        <div className="flex items-center gap-1.5 text-status-danger text-xs font-medium">
                          <XCircle className="w-3.5 h-3.5" />
                          Failed
                        </div>
                      )}
                      {run.status === "flaky" && (
                        <div className="flex items-center gap-1.5 text-status-warning text-xs font-medium">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Flaky
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-xs text-text-secondary flex items-center gap-1.5 py-4">
                      <Clock className="w-3.5 h-3.5 text-text-tertiary" />
                      {run.duration}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-5 h-5 border border-border-subtle">
                          <AvatarFallback className="text-[9px] bg-surface-2">{run.triggeredBy[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-text-secondary">{run.triggeredBy}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-text-tertiary">{run.time}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-text-tertiary">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Flaky Tests Rail */}
        <Card className="shadow-none border-border-default h-fit">
          <CardHeader className="border-b border-border-subtle pb-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-status-warning" />
              Top Flaky Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border-subtle">
              {flakyTests.map((test) => (
                <div key={test.name} className="p-4 space-y-3 hover:bg-surface-1 transition-colors">
                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] font-medium truncate font-mono">{test.name}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-text-tertiary">{test.count} flakes in last 100 runs</span>
                      <span className="text-[11px] font-semibold text-status-warning">{test.percentage} flake rate</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-surface-2 rounded-full overflow-hidden">
                    <div className="h-full bg-status-warning rounded-full" style={{ width: test.percentage }} />
                  </div>
                  <Button variant="outline" size="sm" className="w-full h-7 text-[10px] border-border-subtle">
                    Mark as resolved
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
