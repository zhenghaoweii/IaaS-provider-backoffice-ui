"use client"

import { useState } from "react"
import { Plus, MoreVertical, Power, Settings, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mockServers } from "@/lib/mock-data"
import { ServerStatusBadge } from "@/components/server-status-badge"
import type { Server } from "@/lib/types"

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

export default function ServersPage() {
  const [servers] = useState(mockServers)

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex items-center justify-between relative z-10" variants={item}>
        <div>
          <h1 className="text-4xl font-bold text-foreground text-glow">Virtual Machines</h1>
          <p className="mt-1 text-muted-foreground">Manage all provisioned VMs across nodes</p>
        </div>
        <Button className="glow-cyan hover:scale-[1.02] transition-transform">
          <Plus className="mr-2 h-4 w-4" />
          Add VM
        </Button>
      </motion.div>

      <motion.div variants={item}>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
          <CardHeader className="relative z-10">
            <CardTitle>All Virtual Machines ({servers.length})</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-left text-sm text-muted-foreground font-mono uppercase tracking-wider">
                    <th className="pb-3 font-medium pl-4">Hostname</th>
                    <th className="pb-3 font-medium">Node</th>
                    <th className="pb-3 font-medium">IP Address</th>
                    <th className="pb-3 font-medium">Resources</th>
                    <th className="pb-3 font-medium">OS</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium text-right pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {servers.map((server) => (
                    <ServerRow key={server.id} server={server} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

import { useRouter } from "next/navigation"

function ServerRow({ server }: { server: Server }) {
  const router = useRouter()
  return (
    <tr
      className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors group cursor-pointer"
      onClick={() => router.push(`/servers/${server.id}`)}
    >
      <td className="py-4 pl-4">
        <div>
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{server.hostname}</p>
          {server.proxmoxVmid && <p className="text-xs text-muted-foreground font-mono">ID: {server.proxmoxVmid}</p>}
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{server.nodeName}</td>
      <td className="py-4 text-sm text-muted-foreground font-mono">{server.ipAddress}</td>
      <td className="py-4">
        <div className="text-sm text-muted-foreground font-mono">
          {server.cpuCores}C / {server.ramGb}GB / {server.diskGb}GB
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">
        <span className="px-2 py-0.5 rounded bg-secondary border border-border text-xs uppercase font-medium">{server.os}</span>
      </td>
      <td className="py-4">
        <ServerStatusBadge status={server.status} />
      </td>
      <td className="py-4 pr-4 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
              <Power className="mr-2 h-4 w-4" />
              {server.status === "running" ? "Stop" : "Start"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
              <Settings className="mr-2 h-4 w-4" />
              Maintenance Mode
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={(e) => e.stopPropagation()}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  )
}
