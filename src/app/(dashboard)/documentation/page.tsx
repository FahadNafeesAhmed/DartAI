"use client"

import * as React from "react"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  FileText, 
  ChevronRight, 
  Search, 
  RotateCw, 
  Download, 
  ExternalLink,
  Folder,
  Code
} from "lucide-react"
import { cn } from "@/lib/utils"

const docs = [
  { id: "1", title: "Authentication Flow", path: "lib/auth/README.md", lastGenerated: "2h ago" },
  { id: "2", title: "Checkout Widget", path: "lib/ui/checkout/DOCS.md", lastGenerated: "1d ago" },
  { id: "3", title: "API Client v2", path: "lib/api/CLIENT.md", lastGenerated: "3h ago" },
  { id: "4", title: "Riverpod Providers", path: "lib/providers/GUIDE.md", lastGenerated: "5h ago" },
  { id: "5", title: "Database Schema", path: "docs/SCHEMA.md", lastGenerated: "1w ago" },
]

const previewMarkdown = `
# Authentication Flow

This document describes the AI-generated authentication flow for the DartCodeAI platform.

## Overview
The authentication uses Clerk for user management and MFA.

\`\`\`dart
// AI-Generated Auth Guard
class AuthGuard extends StatelessWidget {
  final Widget child;

  const AuthGuard({required this.child});

  @override
  Widget build(BuildContext context) {
    return AuthConsumer(
      builder: (context, state) {
        if (state.isAuthenticated) return child;
        return const LoginScreen();
      },
    );
  }
}
\`\`\`

## Security Rules
- All requests must contain a valid JWT.
- MFA is required for organization administrators.
`

export default function DocumentationPage() {
  const [selectedDoc, setSelectedDoc] = React.useState(docs[0])

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="AI Documentation" 
        subtitle="Auto-generated documentation for your Flutter codebase."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 h-9 border-border-emphasis">
              <RotateCw className="w-4 h-4" />
              Regenerate All
            </Button>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium gap-2 h-9">
              <FileText className="w-4 h-4" />
              Generate New
            </Button>
          </div>
        }
      />

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Tree Pane */}
        <Card className="w-[320px] flex flex-col shadow-none border-border-default overflow-hidden">
          <div className="p-4 border-b border-border-subtle">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-tertiary" />
              <Input placeholder="Search docs..." className="h-8 pl-9 text-xs border-border-subtle bg-surface-1" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-semibold text-text-tertiary uppercase tracking-widest mb-1">
                  <Folder className="w-3 h-3" />
                  Source Docs
                </div>
                <div className="space-y-[1px]">
                  {docs.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc)}
                      className={cn(
                        "w-full flex flex-col items-start gap-0.5 px-3 py-2 rounded-md transition-colors text-left group",
                        selectedDoc.id === doc.id 
                          ? "bg-surface-2 border border-border-subtle" 
                          : "hover:bg-surface-1"
                      )}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <FileText className={cn("w-3.5 h-3.5", selectedDoc.id === doc.id ? "text-brand-primary" : "text-text-tertiary")} />
                        <span className={cn("text-[13px] font-medium truncate", selectedDoc.id === doc.id ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary")}>
                          {doc.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-text-tertiary font-mono ml-5 truncate w-full">
                        {doc.path}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Preview Pane */}
        <Card className="flex-1 flex flex-col shadow-none border-border-default overflow-hidden">
          <div className="px-6 py-4 border-b border-border-subtle flex items-center justify-between bg-surface-1/50">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold">{selectedDoc.title}</h3>
                <span className="text-xs text-text-tertiary font-mono">Last generated {selectedDoc.lastGenerated}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary hover:text-text-primary gap-2">
                <Download className="w-3.5 h-3.5" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm" className="h-8 text-xs border-border-emphasis gap-2">
                <RotateCw className="w-3.5 h-3.5" />
                Regenerate
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-12 bg-background">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold tracking-tight">{selectedDoc.title}</h1>
                <p className="text-text-secondary leading-relaxed">
                  This document describes the AI-generated {selectedDoc.title.toLowerCase()} for the DartCodeAI platform. 
                  It includes core architectural decisions, implementation details, and relevant code samples.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <Code className="w-4 h-4 text-brand-primary" />
                  Code Implementation
                </div>
                <div className="rounded-lg border border-border-default bg-surface-1 p-6 font-mono text-[13px] text-text-secondary leading-relaxed relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-7 text-[11px]">Copy</Button>
                  </div>
                  <pre className="whitespace-pre-wrap overflow-x-auto">
{`// AI-Generated Auth Guard
class AuthGuard extends StatelessWidget {
  final Widget child;

  const AuthGuard({required this.child});

  @override
  Widget build(BuildContext context) {
    return AuthConsumer(
      builder: (context, state) {
        if (state.isAuthenticated) return child;
        return const LoginScreen();
      },
    );
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="pt-8 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-text-tertiary">
                  <span>Created: April 2026</span>
                  <span>Author: DartCodeAI Bot</span>
                </div>
                <Button variant="link" className="text-xs text-brand-primary p-0 h-auto gap-1">
                  View source on GitHub
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
