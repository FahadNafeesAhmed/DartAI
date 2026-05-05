"use client"

import { PageHeader } from "@/components/ui/page-header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { integrations } from "@/lib/mock-data"
import { Plus, Settings2, Link2, Github, Slack, Database, Cloud, MessageSquare, Briefcase } from "lucide-react"

const categories = [
  { name: "Source control", icon: Github },
  { name: "Communication", icon: MessageSquare },
  { name: "Project management", icon: Briefcase },
  { name: "Cloud", icon: Cloud },
]

export default function ConnectionsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Connections & Integration" 
        subtitle="Connect your Flutter development stack to DartCodeAI."
        actions={
          <Button variant="outline" className="gap-2 h-9 border-border-emphasis">
            <Plus className="w-4 h-4" />
            Request Integration
          </Button>
        }
      />

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.name} className="space-y-6">
            <div className="flex items-center gap-2 text-text-secondary">
              <category.icon className="w-4 h-4" />
              <h2 className="text-sm font-semibold uppercase tracking-widest">{category.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {integrations
                .filter((int) => int.category === category.name)
                .map((integration) => (
                  <Card key={integration.name} className="group shadow-none border-border-default hover:border-border-emphasis transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-[160px] justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-2">
                          <div className="w-10 h-10 rounded-lg bg-surface-1 border border-border-subtle flex items-center justify-center">
                            <Link2 className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary transition-colors" />
                          </div>
                          <div className="mt-1">
                            <h3 className="font-semibold text-sm">{integration.name}</h3>
                            <p className="text-[11px] text-text-tertiary uppercase tracking-wider">{integration.category}</p>
                          </div>
                        </div>
                        <StatusBadge status={integration.status === "Connected" ? "success" : "neutral"} className="h-5 text-[10px] px-2">
                          {integration.status}
                        </StatusBadge>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[11px] text-text-tertiary">
                          {integration.status === "Connected" ? `Synced ${integration.lastSync}` : "Not connected"}
                        </span>
                        {integration.status === "Connected" ? (
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-text-tertiary hover:text-text-primary">
                            <Settings2 className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button size="sm" className="h-8 px-4 bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-medium">
                            Connect
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
