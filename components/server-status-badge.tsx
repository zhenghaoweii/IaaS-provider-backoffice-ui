import { cn } from "@/lib/utils"
import type { ServerStatus } from "@/lib/types"

interface ServerStatusBadgeProps {
  status: ServerStatus
}

export function ServerStatusBadge({ status }: ServerStatusBadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", {
        "bg-accent/10 text-accent": status === "running",
        "bg-muted text-muted-foreground": status === "stopped",
        "bg-yellow-500/10 text-yellow-500": status === "maintenance",
        "bg-destructive/10 text-destructive": status === "error",
      })}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", {
          "bg-accent": status === "running",
          "bg-muted-foreground": status === "stopped",
          "bg-yellow-500": status === "maintenance",
          "bg-destructive": status === "error",
        })}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
