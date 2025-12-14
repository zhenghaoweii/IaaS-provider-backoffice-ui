"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDatacenters, mockNodes } from "@/lib/mock-data"
import { DatacenterCard } from "@/components/datacenter-card"
import { AddDatacenterDialog } from "@/components/add-datacenter-dialog"

export default function DatacentersPage() {
  const [datacenters] = useState(mockDatacenters)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Datacenters</h1>
          <p className="mt-1 text-muted-foreground">Manage Proxmox datacenters and infrastructure</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Datacenter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {datacenters.map((datacenter) => {
          const nodeCount = mockNodes.filter((n) => n.datacenterId === datacenter.id).length
          return <DatacenterCard key={datacenter.id} datacenter={datacenter} nodeCount={nodeCount} />
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datacenter Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Provider</th>
                  <th className="pb-3 font-medium">Location</th>
                  <th className="pb-3 font-medium">API Endpoint</th>
                  <th className="pb-3 font-medium">Nodes</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {datacenters.map((dc) => (
                  <tr key={dc.id} className="border-b border-border last:border-0">
                    <td className="py-4 font-medium text-foreground">{dc.name}</td>
                    <td className="py-4 text-sm capitalize text-muted-foreground">{dc.provider}</td>
                    <td className="py-4 text-sm text-muted-foreground">{dc.location}</td>
                    <td className="py-4 text-sm text-muted-foreground">{dc.apiEndpoint}</td>
                    <td className="py-4 text-sm text-muted-foreground">
                      {mockNodes.filter((n) => n.datacenterId === dc.id).length}
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          dc.status === "active" ? "bg-accent/10 text-accent" : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            dc.status === "active" ? "bg-accent" : "bg-yellow-500"
                          }`}
                        />
                        {dc.status.charAt(0).toUpperCase() + dc.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <AddDatacenterDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
    </div>
  )
}
