"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Plug, 
  GitMerge, 
  FileText, 
  TestTube2, 
  Terminal, 
  CreditCard, 
  Settings, 
  ChevronDown, 
  Bell, 
  Search,
  Moon,
  Sun,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { CommandMenu } from "@/components/command-menu"

const sidebarItems = [
  { label: "PRODUCT", items: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Connection & Integration", icon: Plug, href: "/connections" },
    { label: "AI Release Management", icon: GitMerge, href: "/release" },
    { label: "AI Documentation", icon: FileText, href: "/documentation" },
    { label: "AI QA Testing", icon: TestTube2, href: "/qa-testing" },
    { label: "AI CLI for Dart", icon: Terminal, href: "/cli" },
  ]},
  { label: "ACCOUNT", items: [
    { label: "Billing", icon: CreditCard, href: "/billing" },
    { label: "Settings", icon: Settings, href: "/settings" },
  ]}
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[240px] border-r border-border-default flex flex-col fixed inset-y-0 z-50 bg-background">
        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-[7px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 4h6a8 8 0 0 1 0 16H5V4z" fill="#fff" opacity=".95"/>
              <path d="M19 8.2A6 6 0 0 0 12 6.5a6 6 0 0 0 0 11 6 6 0 0 0 7-1.7" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <span className="font-semibold tracking-tight">DartCodeAI</span>
        </div>

        <div className="px-3 mt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-between px-3 h-10 border border-border-subtle bg-surface-1">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-5 h-5 rounded bg-surface-2 flex items-center justify-center text-[10px] border border-border-default">D</div>
                  <span className="text-sm font-medium truncate">DartCode Team</span>
                </div>
                <ChevronDown className="w-4 h-4 text-text-tertiary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[216px]">
              <DropdownMenuLabel className="text-xs text-text-tertiary">Organizations</DropdownMenuLabel>
              <DropdownMenuItem>DartCode Team</DropdownMenuItem>
              <DropdownMenuItem>Personal Projects</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-brand-primary">+ Create organization</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-8">
          {sidebarItems.map((section) => (
            <div key={section.label} className="space-y-1">
              <h3 className="px-3 text-[11px] font-semibold text-text-tertiary tracking-widest uppercase">
                {section.label}
              </h3>
              <div className="space-y-[2px]">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors relative group",
                        isActive 
                          ? "text-text-primary bg-surface-1 font-medium" 
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-2"
                      )}
                    >
                      {isActive && (
                        <div className="absolute left-[-12px] top-2 bottom-2 w-[2px] bg-brand-primary rounded-r-full" />
                      )}
                      <item.icon className={cn("w-4 h-4", isActive ? "text-brand-primary" : "text-text-tertiary group-hover:text-text-secondary")} />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-3 border-t border-border-subtle">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-between px-2 h-12 hover:bg-surface-2">
                <div className="flex items-center gap-3 overflow-hidden text-left">
                  <Avatar className="w-8 h-8 rounded-lg border border-border-default">
                    <AvatarFallback className="bg-surface-2 text-xs">U</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium truncate leading-tight">Fahad</span>
                    <span className="text-xs text-text-tertiary truncate">Free Plan</span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-text-tertiary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[216px]" align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[240px] flex flex-col relative overflow-y-auto">
        {/* Top Bar */}
        <header className="h-[60px] border-b border-border-default sticky top-0 bg-background/80 backdrop-blur-md z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-text-tertiary font-medium">
            <span>Dashboard</span>
            <span className="text-border-emphasis">/</span>
            <span className="text-text-primary capitalize">{pathname.split("/").pop() || "Overview"}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary group-focus-within:text-brand-primary transition-colors" />
              <input 
                placeholder="Search... (⌘K)" 
                className="w-[240px] h-9 bg-surface-1 border border-border-subtle rounded-md pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary transition-all"
              />
            </div>

            <div className="flex items-center gap-1 border-l border-border-subtle pl-4 ml-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-8 h-8 text-text-tertiary hover:text-text-primary"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-text-tertiary hover:text-text-primary relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-primary rounded-full border border-background" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 max-w-[1280px] w-full mx-auto p-8">
          {children}
        </div>
        <CommandMenu />
      </main>
    </div>
  )
}
