"use client"

import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/ui/status-badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Settings, 
  Users, 
  Key, 
  Globe, 
  Trash2, 
  Plus, 
  MoreVertical, 
  Copy,
  Check,
  ShieldAlert
} from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

const members = [
  { name: "Fahad", email: "fahad@example.com", role: "Owner", avatar: "F" },
  { name: "Sienna", email: "sienna@example.com", role: "Admin", avatar: "S" },
  { name: "Max", email: "max@example.com", role: "Member", avatar: "M" },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("general")

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "members", label: "Members", icon: Users },
    { id: "api", label: "API Keys", icon: Key },
    { id: "webhooks", label: "Webhooks", icon: Globe },
    { id: "danger", label: "Danger Zone", icon: ShieldAlert },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Settings" 
        subtitle="Manage your organization's configuration and members."
      />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation */}
        <aside className="w-full md:w-48 shrink-0">
          <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-[13px] font-medium transition-colors whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-surface-2 text-text-primary" 
                    : "text-text-tertiary hover:text-text-secondary hover:bg-surface-1"
                )}
              >
                <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-brand-primary" : "text-text-tertiary")} />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Settings Content */}
        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Card className="shadow-none border-border-default">
                <CardHeader className="border-b border-border-subtle pb-4">
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Organization Profile</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-text-secondary">Organization Name</label>
                      <Input defaultValue="DartCode Team" className="bg-surface-1 border-border-subtle" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-text-secondary">Slug</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border-subtle bg-surface-2 text-text-tertiary text-xs">
                          dartcodeai.com/
                        </span>
                        <Input defaultValue="dartcode-team" className="rounded-l-none bg-surface-1 border-border-subtle" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-text-secondary">Logo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-surface-2 border border-border-subtle border-dashed flex items-center justify-center text-text-tertiary">
                        <Plus className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <Button variant="outline" size="sm" className="h-8 border-border-subtle text-xs">Upload New</Button>
                        <p className="text-[10px] text-text-tertiary">SVG, PNG, or JPG. Max 1MB.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border-subtle p-4 flex justify-end">
                  <Button className="bg-brand-primary text-white h-9 px-6 text-sm font-medium">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {activeTab === "members" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Card className="shadow-none border-border-default">
                <CardHeader className="border-b border-border-subtle pb-4 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">Team Members</CardTitle>
                  <Button size="sm" className="bg-brand-primary text-white h-8 text-xs gap-2">
                    <Plus className="w-3.5 h-3.5" />
                    Invite Member
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-surface-1/50 border-b border-border-subtle">
                        <TableHead>Member</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {members.map((member) => (
                        <TableRow key={member.email} className="border-b border-border-subtle">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8 border border-border-subtle">
                                <AvatarFallback className="text-[10px] bg-surface-2">{member.avatar}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{member.name}</span>
                                <span className="text-xs text-text-tertiary">{member.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={member.role === "Owner" ? "success" : "neutral"} className="h-5 text-[10px]">
                              {member.role}
                            </StatusBadge>
                          </TableCell>
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
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Card className="shadow-none border-border-default">
                <CardHeader className="border-b border-border-subtle pb-4 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-text-secondary">API Keys</CardTitle>
                  <Button size="sm" className="bg-brand-primary text-white h-8 text-xs gap-2">
                    <Plus className="w-3.5 h-3.5" />
                    New Key
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Default API Key</span>
                      <div className="flex items-center gap-2">
                        <Input readOnly value="dca_live_••••••••••••••••" className="bg-surface-1 border-border-subtle font-mono text-xs" />
                        <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 border-border-subtle">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "danger" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <Card className="shadow-none border-[#EF4444]/20 border-2">
                <CardHeader className="border-b border-[#EF4444]/10 pb-4">
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-status-danger flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Danger Zone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-border-subtle">
                    <div className="space-y-0.5">
                      <h4 className="text-[13px] font-semibold">Delete Organization</h4>
                      <p className="text-xs text-text-tertiary">Permanently delete your organization and all associated data.</p>
                    </div>
                    <Button variant="outline" className="text-status-danger border-status-danger hover:bg-status-danger/10 h-9 text-xs">Delete Org</Button>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div className="space-y-0.5">
                      <h4 className="text-[13px] font-semibold">Transfer Ownership</h4>
                      <p className="text-xs text-text-tertiary">Transfer the ownership of this organization to another member.</p>
                    </div>
                    <Button variant="outline" className="border-border-emphasis h-9 text-xs">Transfer Org</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
