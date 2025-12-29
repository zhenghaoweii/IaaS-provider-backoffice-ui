"use client"

import { Server, Database, AlertTriangle, HardDrive } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockServers, mockDatacenters, mockMaintenanceLogs, mockNodes } from "@/lib/mock-data"
import { ServerStatusBadge } from "@/components/server-status-badge"

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

export default function DashboardPage() {
  const runningServers = mockServers.filter((s) => s.status === "running").length
  const maintenanceServers = mockServers.filter((s) => s.isMaintenance).length
  const activeDatacenters = mockDatacenters.filter((d) => d.status === "active").length
  const onlineNodes = mockNodes.filter((n) => n.status === "online").length
  const recentLogs = mockMaintenanceLogs.slice(0, 5)

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <h1 className="text-4xl font-bold text-foreground text-glow">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Overview of your cloud infrastructure</p>
      </motion.div>

      <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" variants={item}>
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
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={item}>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-6 bg-primary rounded-full" />
                Recent Servers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockServers.slice(0, 5).map((server) => (
                  <div
                    key={server.id}
                    className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0 group hover:bg-secondary/30 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                        <Server className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{server.hostname}</p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {server.nodeName} • {server.ipAddress}
                        </p>
                      </div>
                    </div>
                    <ServerStatusBadge status={server.status} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-6 bg-accent rounded-full" />
                Activity Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div key={log.id} className="border-b border-border/50 pb-4 last:border-0 last:pb-0 hover:bg-secondary/30 p-2 rounded-lg transition-colors relative pl-4">
                    <div className="absolute left-0 top-3 w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-foreground font-mono text-sm uppercase tracking-wide">{log.action.replace("_", " ")}</p>
                        <p className="text-sm text-muted-foreground">{log.description}</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                      {new Date(log.performedAt).toLocaleString()} • {log.performedBy}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={item}>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full" />
              Datacenter Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {mockDatacenters.map((dc) => {
                const nodeCount = mockNodes.filter((n) => n.datacenterId === dc.id).length
                return (
                  <div key={dc.id} className="rounded-lg border border-border/50 bg-secondary/30 p-4 hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-default group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{dc.name}</p>
                        <p className="text-xs text-muted-foreground font-mono uppercase">{dc.location}</p>
                      </div>
                      <span
                        className={`inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_5px_currentColor] ${dc.status === "active" ? "bg-accent text-accent" : "bg-yellow-500 text-yellow-500"
                          }`}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize px-1.5 py-0.5 rounded bg-background/50 border border-border">{dc.provider}</span>
                      <span>•</span>
                      <span className="font-mono">{nodeCount} nodes</span>
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
