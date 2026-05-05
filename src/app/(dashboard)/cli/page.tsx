"use client"

import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart } from "@tremor/react"
import { 
  Terminal, 
  Copy, 
  Download, 
  Check, 
  Cpu, 
  ShieldCheck, 
  Activity,
  History,
  Command
} from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import { StatusBadge } from "@/components/ui/status-badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const cliActivity = [
  { id: "1", command: "review .", user: "Sienna", duration: "1.2s", exitCode: 0, time: "2m ago" },
  { id: "2", command: "docs generate", user: "Max", duration: "8.4s", exitCode: 0, time: "15m ago" },
  { id: "3", command: "qa run all", user: "Sienna", duration: "124.5s", exitCode: 1, time: "1h ago" },
  { id: "4", command: "release patch", user: "GitHub Actions", duration: "4.2s", exitCode: 0, time: "3h ago" },
  { id: "5", command: "login", user: "Fahad", duration: "0.4s", exitCode: 0, time: "5h ago" },
]

const usageData = [
  { date: "May 1", Runs: 45 },
  { date: "May 2", Runs: 52 },
  { date: "May 3", Runs: 38 },
  { date: "May 4", Runs: 65 },
  { date: "May 5", Runs: 48 },
]

export default function CLIPage() {
  const [copied, setCopied] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="AI CLI for Dart" 
        subtitle="The developer's companion for local AI-powered Dart and Flutter workflows."
        actions={
          <Button variant="outline" className="gap-2 h-9 border-border-emphasis">
            <Download className="w-4 h-4" />
            Latest Binary
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Installation */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="shadow-none border-border-default">
            <CardHeader className="border-b border-border-subtle pb-4">
              <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
                <Download className="w-4 h-4" />
                Quick Install
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Install via Homebrew (macOS / Linux)</h4>
                  <div className="flex items-center gap-2 group">
                    <div className="flex-1 bg-surface-1 border border-border-subtle rounded-md p-3 font-mono text-sm text-text-secondary relative">
                      brew install dartcodeai/tap/dca
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-[46px] w-[46px] border-border-subtle"
                      onClick={() => copyToClipboard("brew install dartcodeai/tap/dca", "brew")}
                    >
                      {copied === "brew" ? <Check className="w-4 h-4 text-status-success" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Install via PowerShell (Windows)</h4>
                  <div className="flex items-center gap-2 group">
                    <div className="flex-1 bg-surface-1 border border-border-subtle rounded-md p-3 font-mono text-sm text-text-secondary relative">
                      irm https://dartcodeai.com/install.ps1 | iex
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-[46px] w-[46px] border-border-subtle"
                      onClick={() => copyToClipboard("irm https://dartcodeai.com/install.ps1 | iex", "ps")}
                    >
                      {copied === "ps" ? <Check className="w-4 h-4 text-status-success" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-none border-border-default">
            <CardHeader className="border-b border-border-subtle pb-4">
              <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
                <Activity className="w-4 h-4" />
                CLI Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <BarChart
                className="h-64 mt-4"
                data={usageData}
                index="date"
                categories={["Runs"]}
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

        {/* Right: Activity Feed */}
        <Card className="lg:col-span-2 shadow-none border-border-default h-fit">
          <CardHeader className="border-b border-border-subtle pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Live Activity
            </CardTitle>
            <StatusBadge status="success" className="h-4 text-[9px]">Live</StatusBadge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border-subtle">
              {cliActivity.map((log) => (
                <div key={log.id} className="p-4 flex flex-col gap-2 hover:bg-surface-1 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        log.exitCode === 0 ? "bg-status-success" : "bg-status-danger"
                      )} />
                      <span className="text-sm font-mono font-medium truncate">dca {log.command}</span>
                    </div>
                    <span className="text-[10px] text-text-tertiary font-mono">{log.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <Avatar className="w-4 h-4">
                        <AvatarFallback className="text-[8px] bg-surface-2">{log.user[0]}</AvatarFallback>
                      </Avatar>
                      {log.user}
                    </div>
                    <span>{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border-subtle">
              <Button variant="ghost" className="w-full text-xs text-text-tertiary hover:text-text-primary gap-2 h-8">
                <History className="w-3.5 h-3.5" />
                View full audit log
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
