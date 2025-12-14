import { Database, MapPin, HardDrive } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Datacenter } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface DatacenterCardProps {
  datacenter: Datacenter
  nodeCount: number
}

export function DatacenterCard({ datacenter, nodeCount }: DatacenterCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{datacenter.name}</h3>
              <Badge variant="secondary" className="mt-1 capitalize">
                {datacenter.provider}
              </Badge>
            </div>
          </div>
          <span className={`h-3 w-3 rounded-full ${datacenter.status === "active" ? "bg-accent" : "bg-yellow-500"}`} />
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {datacenter.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <HardDrive className="h-4 w-4" />
            {nodeCount} nodes
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-secondary p-3">
          <p className="text-xs text-muted-foreground">API Endpoint</p>
          <p className="mt-1 truncate text-sm text-foreground">{datacenter.apiEndpoint}</p>
        </div>
      </CardContent>
    </Card>
  )
}
