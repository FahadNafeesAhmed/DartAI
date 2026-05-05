import { Badge, type BadgeProps } from "./badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps extends Omit<BadgeProps, "variant"> {
  status: "success" | "warning" | "danger" | "info" | "neutral"
}

export function StatusBadge({ status, className, children, ...props }: StatusBadgeProps) {
  let variant: BadgeProps["variant"] = "default"
  
  if (status === "success") variant = "success"
  else if (status === "warning") variant = "warning"
  else if (status === "danger") variant = "destructive"
  else if (status === "neutral") variant = "secondary"

  return (
    <Badge variant={variant} className={className} {...props}>
      {children}
    </Badge>
  )
}
