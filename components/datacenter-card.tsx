import { Database, MapPin, HardDrive, Zap, TrendingUp, MoreVertical, Pencil, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Datacenter } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DatacenterCardProps {
  datacenter: Datacenter
  nodeCount: number
  onEdit: (datacenter: Datacenter) => void
  onDelete: (id: string) => void
}

export function DatacenterCard({ datacenter, nodeCount, onEdit, onDelete }: DatacenterCardProps) {
  // Mock capacity based on node count (assuming 50 nodes max per DC for viz)
  const capacity = 50
  const utilization = Math.min(Math.round((nodeCount / capacity) * 100), 100)

  // Mock power usage based on node count
  const powerUsage = (nodeCount * 0.4 + 12).toFixed(1)

  return (
    <Card className="group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] bg-card/50 backdrop-blur-sm relative overflow-visible cursor-pointer border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] overflow-hidden rounded-xl" />

      <CardContent className="p-6 relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-500 group-hover:glow-cyan-md shadow-inner">
              <Database className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{datacenter.name}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <Badge variant="secondary" className="px-1.5 py-0 h-5 text-[10px] uppercase font-bold tracking-wider bg-white/5 border-white/10 group-hover:border-primary/30 transition-colors">
                  {datacenter.provider}
                </Badge>

                {datacenter.infrastructureType === "rented" && (
                  <Badge variant="outline" className="px-1.5 py-0 h-5 text-[10px] uppercase font-bold tracking-wider border-blue-500/50 text-blue-500 bg-blue-500/5">
                    Rented
                  </Badge>
                )}

                {datacenter.infrastructureType === "self-hosted" && (
                  <Badge variant="outline" className="px-1.5 py-0 h-5 text-[10px] uppercase font-bold tracking-wider border-orange-500/50 text-orange-500 bg-orange-500/5">
                    Self-Hosted
                  </Badge>
                )}

                {datacenter.hardwareVendor && (
                  <Badge variant="secondary" className="px-1.5 py-0 h-5 text-[10px] uppercase font-bold tracking-wider bg-white/5 border-white/10 group-hover:border-primary/30 transition-colors">
                    {datacenter.hardwareVendor}
                  </Badge>
                )}

                {datacenter.managementType === "manual" && (
                  <Badge variant="outline" className="px-1.5 py-0 h-5 text-[10px] uppercase font-bold tracking-wider border-yellow-500/50 text-yellow-500 bg-yellow-500/5">
                    Manual
                  </Badge>
                )}

                <div className="flex items-center gap-1 text-xs text-muted-foreground ml-1">
                  <MapPin className="h-3 w-3" />
                  {datacenter.location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span
              className={`flex h-3 w-3 rounded-full shadow-[0_0_10px_currentColor] transition-all duration-300 mt-2 ${datacenter.status === "active" ? "bg-accent text-accent group-hover:scale-125" : "bg-yellow-500 text-yellow-500"
                }`}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onEdit(datacenter); }}>
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={(e) => { e.stopPropagation(); onDelete(datacenter.id); }}>
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5 p-3 rounded-lg bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-colors group/metric">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <HardDrive className="h-3.5 w-3.5 text-primary/70" />
              <span className="font-mono uppercase tracking-wider text-[10px]">Active Nodes</span>
            </div>
            <div className="text-xl font-bold font-mono text-foreground flex items-baseline gap-1">
              {nodeCount}
              <span className="text-xs text-muted-foreground font-normal">/ {capacity}</span>
            </div>
          </div>

          <div className="space-y-1.5 p-3 rounded-lg bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-colors group/metric">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-yellow-500/70" />
              <span className="font-mono uppercase tracking-wider text-[10px]">Power Draw</span>
            </div>
            <div className="text-xl font-bold font-mono text-foreground flex items-baseline gap-1">
              {powerUsage}
              <span className="text-xs text-muted-foreground font-normal">kW</span>
            </div>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground font-medium">Capacity Utilization</span>
            <span className={`font-mono font-bold ${utilization > 90 ? 'text-red-400' : 'text-primary'}`}>{utilization}%</span>
          </div>
          <Progress value={utilization} className="h-1.5 bg-secondary" />
        </div>

        {/* Footer info */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted-foreground border-t border-white/5">
          <span className="truncate max-w-[150px] opacity-70 hover:opacity-100 transition-opacity">{datacenter.apiEndpoint}</span>
          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 flex items-center gap-1">
            Manage <TrendingUp className="h-3 w-3" />
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
