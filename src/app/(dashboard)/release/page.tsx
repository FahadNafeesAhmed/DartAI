"use client"

import * as React from "react"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { Progress } from "@/components/ui/progress"
import { 
  GitMerge, 
  Rocket, 
  History, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const activeReleases = [
  { 
    version: "v2.4.0-rc1", 
    env: "Production", 
    status: "deploying", 
    progress: 65, 
    time: "Started 12m ago",
    changelog: "Updated riverpod to 2.x, fixed async-gap in checkout flow, and optimized widget build performance."
  },
  { 
    version: "v2.3.9", 
    env: "Staging", 
    status: "verified", 
    progress: 100, 
    time: "Ready to promote",
    changelog: "Minor bug fixes in auth module and updated documentation for API client v2."
  },
]

export default function ReleasePage() {
  const [activeTab, setActiveTab] = React.useState("active")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="AI Release Management" 
        subtitle="AI-generated changelogs and automated deployment pipelines for Flutter."
        actions={
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium gap-2 h-9">
            <Rocket className="w-4 h-4" />
            Create New Release
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex border-b border-border-subtle gap-8 h-10 items-center">
          {[
            { id: "active", label: "Active", icon: Rocket },
            { id: "scheduled", label: "Scheduled", icon: Calendar },
            { id: "history", label: "History", icon: History },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "h-full flex items-center gap-2 text-sm font-medium transition-all relative px-1",
                activeTab === tab.id 
                  ? "text-brand-primary" 
                  : "text-text-tertiary hover:text-text-secondary"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-brand-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "active" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {activeReleases.map((release) => (
              <Card key={release.version} className="shadow-none border-border-default overflow-hidden flex flex-col">
                <CardHeader className="bg-surface-1/50 border-b border-border-subtle p-4 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] font-semibold text-text-primary">{release.version}</span>
                    <StatusBadge status="neutral" className="h-5 text-[10px] px-2">{release.env}</StatusBadge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
                    <span className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider">AI Generated</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-text-secondary capitalize">{release.status}...</span>
                      <span className="text-text-primary">{release.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-2 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full transition-all duration-1000 ease-out",
                          release.status === "deploying" ? "bg-brand-primary animate-pulse" : "bg-status-success"
                        )} 
                        style={{ width: `${release.progress}%` }} 
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-surface-1 border border-border-subtle space-y-2">
                    <div className="text-[11px] font-semibold text-text-tertiary uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="w-3 h-3" />
                      Changelog Preview
                    </div>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {release.changelog}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border-subtle p-4 flex items-center justify-between bg-surface-1/50">
                  <span className="text-xs text-text-tertiary">{release.time}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary hover:text-text-primary">Cancel</Button>
                    <Button className="h-8 bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-medium gap-2">
                      {release.status === "deploying" ? "View Logs" : "Promote to Prod"}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {activeTab !== "active" && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border rounded-lg border-dashed border-border-default bg-surface-1/30">
            <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center text-text-tertiary">
              <History className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-text-primary">No {activeTab} releases found</h3>
              <p className="text-sm text-text-tertiary">There are currently no releases in the {activeTab} state.</p>
            </div>
            <Button variant="outline" className="h-9 border-border-emphasis text-xs">Refresh state</Button>
          </div>
        )}
      </div>

      {/* Timeline Visualization */}
      <Card className="shadow-none border-border-default">
        <CardHeader className="border-b border-border-subtle pb-4">
          <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Release Timeline</CardTitle>
        </CardHeader>
        <CardContent className="pt-12 pb-8 px-12">
          <div className="relative w-full h-[2px] bg-surface-2 flex items-center justify-between">
            {[
              { label: "v2.3.0", date: "Apr 12", active: false },
              { label: "v2.3.5", date: "Apr 20", active: false },
              { label: "v2.3.9", date: "May 2", active: true },
              { label: "v2.4.0", date: "May 5", active: "pulse" },
            ].map((node) => (
              <div key={node.label} className="relative flex flex-col items-center group">
                <div className={cn(
                  "w-3 h-3 rounded-full border-2 border-background transition-all",
                  node.active === "pulse" ? "bg-brand-primary scale-125 animate-ping absolute" : "",
                  node.active ? "bg-brand-primary scale-125" : "bg-text-tertiary hover:bg-text-secondary"
                )} />
                <div className={cn(
                   "w-3 h-3 rounded-full border-2 border-background relative z-10",
                   node.active === "pulse" || node.active ? "bg-brand-primary" : "bg-text-tertiary"
                )} />
                <div className="absolute top-6 flex flex-col items-center gap-0.5 whitespace-nowrap">
                  <span className={cn("text-xs font-mono font-semibold", node.active ? "text-text-primary" : "text-text-tertiary")}>{node.label}</span>
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider">{node.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FileText(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}
