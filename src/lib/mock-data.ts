export const mockStats = [
  { title: "Releases", value: "128", change: "+12.5%", trend: "up" as const },
  { title: "Tests Passed", value: "99.4%", change: "+0.2%", trend: "up" as const },
  { title: "Documentation", value: "4.2k", change: "+84", trend: "up" as const },
  { title: "CLI Latency", value: "142ms", change: "-12ms", trend: "up" as const },
];

export const recentPRs = [
  {
    id: "PR-1240",
    title: "feat: add riverpod state tracking",
    repo: "dartcodeai/core",
    status: "Reviewing",
    author: "Sienna",
    time: "4m ago",
  },
  {
    id: "PR-1239",
    title: "fix: buildcontext async gap",
    repo: "dartcodeai/core",
    status: "Approved",
    author: "Max",
    time: "1h ago",
  },
  {
    id: "PR-1238",
    title: "docs: update auth guidelines",
    repo: "dartcodeai/docs",
    status: "Approved",
    author: "Jules",
    time: "3h ago",
  },
  {
    id: "PR-1237",
    title: "test: flaky navigation test",
    repo: "dartcodeai/app",
    status: "Failed",
    author: "Sienna",
    time: "5h ago",
  },
];

export const pendingRequests = [
  {
    id: "REQ-001",
    title: "Generate API Reference",
    type: "Documentation",
    requester: "Fahad",
    repository: "dart-sdk-tools",
    requestedAt: "2026-05-05 10:30",
  },
  {
    id: "REQ-002",
    title: "QA Smoke Test Suite",
    type: "QA Testing",
    requester: "Sienna",
    repository: "flutter-ui-kit",
    requestedAt: "2026-05-05 11:15",
  },
  {
    id: "REQ-003",
    title: "Stable Release v2.4.0",
    type: "Release",
    requester: "Max",
    repository: "core-engine",
    requestedAt: "2026-05-05 12:00",
  },
];

export const integrations = [
  { name: "GitHub", category: "Source control", status: "Connected", lastSync: "2m ago" },
  { name: "Slack", category: "Communication", status: "Connected", lastSync: "1h ago" },
  { name: "Linear", category: "Project management", status: "Not connected", lastSync: "N/A" },
  { name: "Jira", category: "Project management", status: "Not connected", lastSync: "N/A" },
  { name: "AWS", category: "Cloud", status: "Connected", lastSync: "5h ago" },
  { name: "Discord", category: "Communication", status: "Not connected", lastSync: "N/A" },
];
