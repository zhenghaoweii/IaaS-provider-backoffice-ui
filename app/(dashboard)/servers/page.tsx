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

export default function ServersPage() {
  const [servers] = useState(mockServers)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Virtual Machines</h1>
          <p className="mt-1 text-muted-foreground">Manage all provisioned VMs across nodes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add VM
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Virtual Machines ({servers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Hostname</th>
                  <th className="pb-3 font-medium">Node</th>
                  <th className="pb-3 font-medium">IP Address</th>
                  <th className="pb-3 font-medium">Resources</th>
                  <th className="pb-3 font-medium">OS</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
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
    </div>
  )
}

function ServerRow({ server }: { server: Server }) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-4">
        <div>
          <p className="font-medium text-foreground">{server.hostname}</p>
          {server.proxmoxVmid && <p className="text-xs text-muted-foreground">VM ID: {server.proxmoxVmid}</p>}
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{server.nodeName}</td>
      <td className="py-4 text-sm text-muted-foreground">{server.ipAddress}</td>
      <td className="py-4">
        <div className="text-sm text-muted-foreground">
          {server.cpuCores}C / {server.ramGb}GB / {server.diskGb}GB
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{server.os}</td>
      <td className="py-4">
        <ServerStatusBadge status={server.status} />
      </td>
      <td className="py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Power className="mr-2 h-4 w-4" />
              {server.status === "running" ? "Stop" : "Start"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Maintenance Mode
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  )
}
