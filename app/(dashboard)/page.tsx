import { Server, Database, AlertTriangle, HardDrive } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockServers, mockDatacenters, mockMaintenanceLogs, mockNodes } from "@/lib/mock-data"
import { ServerStatusBadge } from "@/components/server-status-badge"

export default function DashboardPage() {
  const runningServers = mockServers.filter((s) => s.status === "running").length
  const maintenanceServers = mockServers.filter((s) => s.isMaintenance).length
  const activeDatacenters = mockDatacenters.filter((d) => d.status === "active").length
  const onlineNodes = mockNodes.filter((n) => n.status === "online").length
  const recentLogs = mockMaintenanceLogs.slice(0, 5)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Overview of your cloud infrastructure</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Datacenters"
          value={mockDatacenters.length}
          icon={Database}
          trend={`${activeDatacenters} active`}
          trendUp
        />
        <StatCard title="Nodes" value={mockNodes.length} icon={HardDrive} trend={`${onlineNodes} online`} trendUp />
        <StatCard title="Total VMs" value={mockServers.length} icon={Server} trend="+2 this week" trendUp />
        <StatCard title="Maintenance" value={maintenanceServers} icon={AlertTriangle} trend="Scheduled" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Servers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockServers.slice(0, 5).map((server) => (
                <div
                  key={server.id}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{server.hostname}</p>
                    <p className="text-sm text-muted-foreground">
                      {server.nodeName} • {server.ipAddress}
                    </p>
                  </div>
                  <ServerStatusBadge status={server.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLogs.map((log) => (
                <div key={log.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-foreground">{log.action.replace("_", " ")}</p>
                      <p className="text-sm text-muted-foreground">{log.description}</p>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(log.performedAt).toLocaleString()} • {log.performedBy}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datacenter Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {mockDatacenters.map((dc) => {
              const nodeCount = mockNodes.filter((n) => n.datacenterId === dc.id).length
              return (
                <div key={dc.id} className="rounded-lg border border-border bg-secondary p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{dc.name}</p>
                      <p className="text-sm text-muted-foreground">{dc.location}</p>
                    </div>
                    <span
                      className={`inline-flex h-2 w-2 rounded-full ${
                        dc.status === "active" ? "bg-accent" : "bg-yellow-500"
                      }`}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="capitalize">{dc.provider}</span>
                    <span>•</span>
                    <span>{nodeCount} nodes</span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
