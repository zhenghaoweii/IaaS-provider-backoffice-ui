"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockMaintenanceLogs, mockServers } from "@/lib/mock-data"
import { Activity, Settings, Power } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ActivityPage() {
  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="relative z-10" variants={item}>
        <h1 className="text-4xl font-bold text-foreground text-glow">Activity Log</h1>
        <p className="mt-1 text-muted-foreground">Track all maintenance and server operations</p>
      </motion.div>

      <motion.div variants={item}>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
          <CardHeader className="relative z-10">
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {mockMaintenanceLogs.map((log) => {
                const server = mockServers.find((s) => s.id === log.serverId)
                const icon = getActivityIcon(log.action)
                const isMaintenance = log.action.includes("maintenance")
                const isReboot = log.action === "reboot"

                return (
                  <div key={log.id} className="flex gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0 hover:bg-secondary/30 p-4 rounded-lg transition-colors group">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 transition-all group-hover:scale-110 ${isMaintenance ? "bg-yellow-500/10 ring-yellow-500/20 text-yellow-500" :
                      isReboot ? "bg-destructive/10 ring-destructive/20 text-destructive" :
                        "bg-primary/10 ring-primary/20 text-primary"
                      }`}>
                      {icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-foreground font-mono uppercase text-sm tracking-wide">{log.action.replace("_", " ")}</p>
                          <p className="text-sm text-muted-foreground mt-1">{log.description}</p>
                          {server && (
                            <p className="mt-2 text-xs text-muted-foreground flex items-center gap-2">
                              <span className="bg-secondary px-1.5 py-0.5 rounded border border-border">Server</span>
                              <span className="text-foreground">{server.hostname}</span>
                              <span className="font-mono text-muted-foreground/70">({server.ipAddress})</span>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        <span>{new Date(log.performedAt).toLocaleString()}</span>
                        <span>•</span>
                        <span className="text-primary">{log.performedBy}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function getActivityIcon(action: string) {
  switch (action) {
    case "maintenance_start":
      return <Settings className="h-5 w-5" />
    case "reboot":
      return <Power className="h-5 w-5" />
    default:
      return <Activity className="h-5 w-5" />
  }
}
