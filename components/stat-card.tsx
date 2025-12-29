import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: string
  trendUp?: boolean
}

export function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <Card className="overflow-hidden relative group hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider font-mono">{title}</p>
            <p className="mt-2 text-3xl font-bold text-foreground tracking-tight">{value}</p>
            {trend && (
              <div className="flex items-center mt-1">
                <span className={`text-xs font-mono px-1.5 py-0.5 rounded-sm ${trendUp ? "text-accent bg-accent/10" : "text-destructive bg-destructive/10"}`}>
                  {trend}
                </span>
              </div>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:glow-cyan-sm">
            <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
