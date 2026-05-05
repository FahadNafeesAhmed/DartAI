import { Card, CardContent } from "./card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  trend?: "up" | "down" | "neutral"
  children?: React.ReactNode
  className?: string
}

export function StatCard({ title, value, change, trend = "neutral", children, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-lg shadow-none", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] uppercase tracking-[0.05em] text-muted-foreground font-semibold">
            {title}
          </span>
          <div className="text-[28px] font-semibold tracking-tight text-foreground mt-2">
            {value}
          </div>
          {change && (
            <div className="flex items-center gap-1 mt-1">
              <span
                className={cn(
                  "text-xs font-medium",
                  trend === "up" ? "text-[#10B981]" : trend === "down" ? "text-[#EF4444]" : "text-muted-foreground"
                )}
              >
                {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {change}
              </span>
            </div>
          )}
        </div>
        {children && <div className="mt-4">{children}</div>}
      </CardContent>
    </Card>
  )
}
