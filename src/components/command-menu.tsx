"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { 
  Search, 
  LayoutDashboard, 
  Plug, 
  GitMerge, 
  FileText, 
  TestTube2, 
  Terminal, 
  Settings,
  CreditCard
} from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const commands = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", shortcut: "G D" },
  { label: "Connections", icon: Plug, href: "/connections", shortcut: "G C" },
  { label: "Releases", icon: GitMerge, href: "/release", shortcut: "G R" },
  { label: "Documentation", icon: FileText, href: "/documentation", shortcut: "G O" },
  { label: "QA Testing", icon: TestTube2, href: "/qa-testing", shortcut: "G T" },
  { label: "CLI Guide", icon: Terminal, href: "/cli", shortcut: "G I" },
  { label: "Billing", icon: CreditCard, href: "/billing", shortcut: "G B" },
  { label: "Settings", icon: Settings, href: "/settings", shortcut: "G S" },
]

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  const onSelect = (href: string) => {
    router.push(href)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 border-border-default shadow-2xl max-w-2xl top-[20%] translate-y-0">
        <div className="flex items-center border-b border-border-subtle px-4 h-14">
          <Search className="w-5 h-5 text-text-tertiary mr-3" />
          <Input 
            autoFocus
            placeholder="Type a command or search..." 
            className="flex-1 bg-transparent border-none focus-visible:ring-0 text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded border border-border-subtle bg-surface-2 text-[10px] font-bold text-text-tertiary">
            ESC
          </div>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.href}
                onClick={() => onSelect(cmd.href)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-surface-1 transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <cmd.icon className="w-4 h-4 text-text-tertiary group-hover:text-brand-primary" />
                  <span className="text-sm font-medium">{cmd.label}</span>
                </div>
                <div className="flex gap-1">
                  {cmd.shortcut.split(" ").map(s => (
                    <span key={s} className="px-1.5 py-0.5 rounded bg-surface-2 border border-border-subtle text-[10px] font-mono text-text-tertiary">
                      {s}
                    </span>
                  ))}
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center opacity-50">
              <Search className="w-8 h-8 mb-2" />
              <p className="text-sm">No results found for "{search}"</p>
            </div>
          )}
        </div>
        <div className="p-3 border-t border-border-subtle flex items-center justify-between bg-surface-1/50 text-[10px] text-text-tertiary uppercase tracking-widest font-semibold">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="p-0.5 bg-surface-2 border rounded">↵</span> Select</span>
            <span className="flex items-center gap-1"><span className="p-0.5 bg-surface-2 border rounded">↑↓</span> Navigate</span>
          </div>
          <span>DartCodeAI CLI v1.2.4</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
