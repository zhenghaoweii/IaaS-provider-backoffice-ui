import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockMaintenanceLogs, mockServers } from "@/lib/mock-data"
import { Activity, Settings, Power } from "lucide-react"

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Activity Log</h1>
        <p className="mt-1 text-muted-foreground">Track all maintenance and server operations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMaintenanceLogs.map((log) => {
              const server = mockServers.find((s) => s.id === log.serverId)
              const icon = getActivityIcon(log.action)

              return (
                <div key={log.id} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">{icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-foreground">{log.action.replace("_", " ").toUpperCase()}</p>
                        <p className="text-sm text-muted-foreground">{log.description}</p>
                        {server && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Server: {server.hostname} ({server.ipAddress})
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{new Date(log.performedAt).toLocaleString()}</span>
                      <span>•</span>
                      <span>{log.performedBy}</span>
                    </div>
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

function getActivityIcon(action: string) {
  switch (action) {
    case "maintenance_start":
      return <Settings className="h-5 w-5 text-yellow-500" />
    case "reboot":
      return <Power className="h-5 w-5 text-primary" />
    default:
      return <Activity className="h-5 w-5 text-muted-foreground" />
  }
}
