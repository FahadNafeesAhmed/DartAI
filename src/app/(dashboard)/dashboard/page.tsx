"use client"

import { PageHeader } from "@/components/ui/page-header"
import { StatCard } from "@/components/ui/stat-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { mockStats, recentPRs, pendingRequests } from "@/lib/mock-data"
import { AreaChart, Badge } from "@tremor/react"
import { GitBranch, Plus, ExternalLink } from "lucide-react"

const chartData = [
  { date: "Apr 28", Releases: 4 },
  { date: "Apr 29", Releases: 6 },
  { date: "Apr 30", Releases: 8 },
  { date: "May 1", Releases: 5 },
  { date: "May 2", Releases: 12 },
  { date: "May 3", Releases: 9 },
  { date: "May 4", Releases: 15 },
]

export default function OverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Overview" 
        subtitle="Manage your Flutter team's AI-powered workflows."
        actions={
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium gap-2 h-9">
            <Plus className="w-4 h-4" />
            New Release
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat) => (
          <StatCard 
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Chart Section */}
        <Card className="lg:col-span-3 shadow-none border-border-default">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border-subtle pb-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Release Activity</CardTitle>
            <StatusBadge status="neutral">Last 30 Days</StatusBadge>
          </CardHeader>
          <CardContent className="pt-8">
            <AreaChart
              className="h-72 mt-4"
              data={chartData}
              index="date"
              categories={["Releases"]}
              colors={["blue"]}
              showLegend={false}
              showGridLines={false}
              startEndOnly={true}
              showXAxis={true}
              showYAxis={true}
              yAxisWidth={30}
            />
          </CardContent>
        </Card>

        {/* Recent PRs */}
        <Card className="lg:col-span-2 shadow-none border-border-default">
          <CardHeader className="border-b border-border-subtle pb-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Recent Pull Requests</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border-subtle">
              {recentPRs.map((pr) => (
                <div key={pr.id} className="p-4 flex items-center justify-between hover:bg-surface-1 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Avatar className="w-8 h-8 border border-border-subtle">
                      <AvatarFallback className="text-[10px] bg-surface-2">{pr.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-medium truncate">{pr.title}</span>
                      <span className="text-xs text-text-tertiary font-mono">{pr.repo}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={pr.status === "Approved" ? "success" : pr.status === "Failed" ? "danger" : "warning"}>
                      {pr.status}
                    </StatusBadge>
                    <span className="text-xs text-text-tertiary hidden sm:block">{pr.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border-subtle">
              <Button variant="ghost" className="w-full text-xs text-text-tertiary hover:text-text-primary gap-2 h-8">
                View all activity
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Requests Table */}
      <Card className="shadow-none border-border-default">
        <CardHeader className="flex flex-row items-center justify-between border-b border-border-subtle pb-4">
          <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Pending Requests</CardTitle>
          <div className="flex gap-2">
            {["All", "Documentation", "QA Testing", "Release"].map((filter) => (
              <Button key={filter} variant="outline" size="sm" className={cn("h-7 text-[11px] px-3", filter === "All" && "bg-surface-2")}>
                {filter}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface-1/50 border-b border-border-subtle">
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Requester</TableHead>
                <TableHead>Repository</TableHead>
                <TableHead>Requested At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingRequests.map((req) => (
                <TableRow key={req.id} className="border-b border-border-subtle hover:bg-surface-1 transition-colors">
                  <TableCell className="font-medium text-sm">{req.title}</TableCell>
                  <TableCell>
                    <Badge className="bg-surface-2 text-text-secondary border-border-default font-normal text-[11px]">
                      {req.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6 border border-border-subtle">
                        <AvatarFallback className="text-[10px] bg-surface-2">{req.requester[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{req.requester}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-text-tertiary">{req.repository}</TableCell>
                  <TableCell className="text-xs text-text-tertiary">{req.requestedAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 text-xs text-status-danger hover:bg-status-danger/10">Decline</Button>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-border-emphasis">Accept</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 flex items-center justify-between text-xs text-text-tertiary">
            <span>Showing 1-3 of 12 requests</span>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="h-7 w-7 p-0" disabled>1</Button>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">2</Button>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">3</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
