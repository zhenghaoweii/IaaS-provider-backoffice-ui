"use client"

import { useState } from "react"
import { Plus, MoreVertical, Power, Settings, Trash2, HardDrive, Network, Search, X, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { mockNodes, mockServers, mockClusters, mockDatacenters } from "@/lib/mock-data"
import type { Node } from "@/lib/types"

export default function NodesPage() {
  const [nodes, setNodes] = useState(mockNodes)
  const [clusters] = useState(mockClusters)

  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [datacenterFilter, setDatacenterFilter] = useState<string>("all")

  const [isAddNodeOpen, setIsAddNodeOpen] = useState(false)
  const [isEditNodeOpen, setIsEditNodeOpen] = useState(false)
  const [isViewNodeOpen, setIsViewNodeOpen] = useState(false)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)

  const [nodeForm, setNodeForm] = useState({
    name: "",
    hostname: "",
    ipAddress: "",
    datacenterId: "",
    cpuCores: "",
    ramGb: "",
    diskGb: "",
    clusterId: "",
  })

  const filteredNodes = nodes.filter((node) => {
    const matchesSearch =
      node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.ipAddress.includes(searchQuery)
    const matchesStatus = statusFilter === "all" || node.status === statusFilter
    const matchesDatacenter = datacenterFilter === "all" || node.datacenterId === datacenterFilter
    return matchesSearch && matchesStatus && matchesDatacenter
  })

  const handleAddNode = () => {
    const datacenter = mockDatacenters.find((dc) => dc.id === nodeForm.datacenterId)
    const cluster = nodeForm.clusterId !== "none" ? mockClusters.find((cl) => cl.id === nodeForm.clusterId) : undefined

    const newNode: Node = {
      id: `n${Date.now()}`,
      datacenterId: nodeForm.datacenterId,
      datacenterName: datacenter?.name,
      name: nodeForm.name,
      hostname: nodeForm.hostname,
      ipAddress: nodeForm.ipAddress,
      status: "online",
      cpuCores: Number.parseInt(nodeForm.cpuCores),
      cpuUsagePercent: 0,
      ramGb: Number.parseInt(nodeForm.ramGb),
      ramUsageGb: 0,
      diskGb: Number.parseInt(nodeForm.diskGb),
      diskUsageGb: 0,
      proxmoxNodeName: nodeForm.name,
      clusterId: nodeForm.clusterId !== "none" ? nodeForm.clusterId : undefined,
      clusterName: cluster?.name,
      isClusterMaster: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    setNodes([...nodes, newNode])
    setIsAddNodeOpen(false)
    resetForm()
  }

  const handleEditNode = () => {
    if (!selectedNode) return

    const datacenter = mockDatacenters.find((dc) => dc.id === nodeForm.datacenterId)
    const cluster = nodeForm.clusterId !== "none" ? mockClusters.find((cl) => cl.id === nodeForm.clusterId) : undefined

    setNodes(
      nodes.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              name: nodeForm.name,
              hostname: nodeForm.hostname,
              ipAddress: nodeForm.ipAddress,
              datacenterId: nodeForm.datacenterId,
              datacenterName: datacenter?.name,
              cpuCores: Number.parseInt(nodeForm.cpuCores),
              ramGb: Number.parseInt(nodeForm.ramGb),
              diskGb: Number.parseInt(nodeForm.diskGb),
              clusterId: nodeForm.clusterId !== "none" ? nodeForm.clusterId : undefined,
              clusterName: cluster?.name,
              updatedAt: new Date().toISOString(),
            }
          : node,
      ),
    )

    setIsEditNodeOpen(false)
    setSelectedNode(null)
    resetForm()
  }

  const handleToggleMaintenance = (nodeId: string) => {
    setNodes(
      nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              status: node.status === "maintenance" ? "online" : "maintenance",
              updatedAt: new Date().toISOString(),
            }
          : node,
      ),
    )
  }

  const handleRemoveNode = (nodeId: string) => {
    if (confirm("Are you sure you want to remove this node?")) {
      setNodes(nodes.filter((node) => node.id !== nodeId))
    }
  }

  const openEditDialog = (node: Node) => {
    setSelectedNode(node)
    setNodeForm({
      name: node.name,
      hostname: node.hostname,
      ipAddress: node.ipAddress,
      datacenterId: node.datacenterId,
      cpuCores: node.cpuCores.toString(),
      ramGb: node.ramGb.toString(),
      diskGb: node.diskGb.toString(),
      clusterId: node.clusterId || "none",
    })
    setIsEditNodeOpen(true)
  }

  const resetForm = () => {
    setNodeForm({
      name: "",
      hostname: "",
      ipAddress: "",
      datacenterId: "",
      cpuCores: "",
      ramGb: "",
      diskGb: "",
      clusterId: "",
    })
  }

  const clearFilters = () => {
    setSearchQuery("")
    setStatusFilter("all")
    setDatacenterFilter("all")
  }

  const hasActiveFilters = searchQuery || statusFilter !== "all" || datacenterFilter !== "all"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Nodes</h1>
          <p className="mt-1 text-muted-foreground">Manage physical/hypervisor nodes across datacenters</p>
        </div>
        <Button onClick={() => setIsAddNodeOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Node
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, hostname, or IP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Select value={datacenterFilter} onValueChange={setDatacenterFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Datacenter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Datacenters</SelectItem>
                  {mockDatacenters.map((dc) => (
                    <SelectItem key={dc.id} value={dc.id}>
                      {dc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {hasActiveFilters && (
                <Button variant="ghost" size="icon" onClick={clearFilters}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="mb-4 text-xl font-semibold text-foreground">HA Clusters</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clusters.map((cluster) => {
            const clusterNodes = nodes.filter((n) => n.clusterId === cluster.id)
            const totalVMs = clusterNodes.reduce((acc, node) => {
              return acc + mockServers.filter((s) => s.nodeId === node.id).length
            }, 0)

            return (
              <Card key={cluster.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                        <Network className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{cluster.name}</h3>
                        <p className="text-sm text-muted-foreground">{cluster.datacenterName}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        cluster.status === "healthy"
                          ? "bg-accent/10 text-accent"
                          : cluster.status === "degraded"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          cluster.status === "healthy"
                            ? "bg-accent"
                            : cluster.status === "degraded"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      />
                      {cluster.status.charAt(0).toUpperCase() + cluster.status.slice(1)}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground">Nodes</p>
                      <p className="text-lg font-semibold text-foreground">{cluster.nodeCount}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground">VMs</p>
                      <p className="text-lg font-semibold text-foreground">{totalVMs}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground">Quorum</p>
                      <p className="text-lg font-semibold text-foreground">{cluster.quorum ? "Yes" : "No"}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded bg-primary/10 px-2 py-1 font-medium text-primary">
                      {cluster.type.toUpperCase()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            All Nodes {filteredNodes.length !== nodes.length && `(${filteredNodes.length} of ${nodes.length})`}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNodes.map((node) => {
            const vmCount = mockServers.filter((s) => s.nodeId === node.id).length
            return (
              <Card
                key={node.id}
                className="hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => {
                  setSelectedNode(node)
                  setIsViewNodeOpen(true)
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <HardDrive className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{node.name}</h3>
                        <p className="text-sm text-muted-foreground">{node.datacenterName}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        node.status === "online"
                          ? "bg-accent/10 text-accent"
                          : node.status === "offline"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          node.status === "online"
                            ? "bg-accent"
                            : node.status === "offline"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
                    </span>
                  </div>

                  {node.clusterName && (
                    <div className="mt-3 flex items-center gap-2">
                      <Network className="h-3.5 w-3.5 text-accent" />
                      <span className="text-xs text-muted-foreground">{node.clusterName}</span>
                      {node.isClusterMaster && (
                        <span className="rounded bg-accent/20 px-1.5 py-0.5 text-xs font-medium text-accent">
                          Master
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">CPU Usage</span>
                        <span className="font-medium text-foreground">{node.cpuUsagePercent.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${node.cpuUsagePercent}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">RAM Usage</span>
                        <span className="font-medium text-foreground">
                          {node.ramUsageGb.toFixed(1)} / {node.ramGb} GB
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(node.ramUsageGb / node.ramGb) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Disk Usage</span>
                        <span className="font-medium text-foreground">
                          {node.diskUsageGb.toFixed(1)} / {node.diskGb} GB
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(node.diskUsageGb / node.diskGb) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary p-3">
                    <div>
                      <p className="text-xs text-muted-foreground">VMs Running</p>
                      <p className="text-lg font-semibold text-foreground">{vmCount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Total Cores</p>
                      <p className="text-lg font-semibold text-foreground">{node.cpuCores}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            All Nodes {filteredNodes.length !== nodes.length && `(${filteredNodes.length} of ${nodes.length})`}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNodes.map((node) => {
            const vmCount = mockServers.filter((s) => s.nodeId === node.id).length
            return (
              <Card
                key={node.id}
                className="hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => {
                  setSelectedNode(node)
                  setIsViewNodeOpen(true)
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <HardDrive className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{node.name}</h3>
                        <p className="text-sm text-muted-foreground">{node.datacenterName}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        node.status === "online"
                          ? "bg-accent/10 text-accent"
                          : node.status === "offline"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          node.status === "online"
                            ? "bg-accent"
                            : node.status === "offline"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
                    </span>
                  </div>

                  {node.clusterName && (
                    <div className="mt-3 flex items-center gap-2">
                      <Network className="h-3.5 w-3.5 text-accent" />
                      <span className="text-xs text-muted-foreground">{node.clusterName}</span>
                      {node.isClusterMaster && (
                        <span className="rounded bg-accent/20 px-1.5 py-0.5 text-xs font-medium text-accent">
                          Master
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">CPU Usage</span>
                        <span className="font-medium text-foreground">{node.cpuUsagePercent.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${node.cpuUsagePercent}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">RAM Usage</span>
                        <span className="font-medium text-foreground">
                          {node.ramUsageGb.toFixed(1)} / {node.ramGb} GB
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(node.ramUsageGb / node.ramGb) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Disk Usage</span>
                        <span className="font-medium text-foreground">
                          {node.diskUsageGb.toFixed(1)} / {node.diskGb} GB
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(node.diskUsageGb / node.diskGb) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary p-3">
                    <div>
                      <p className="text-xs text-muted-foreground">VMs Running</p>
                      <p className="text-lg font-semibold text-foreground">{vmCount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Total Cores</p>
                      <p className="text-lg font-semibold text-foreground">{node.cpuCores}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Node Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Datacenter</th>
                  <th className="pb-3 font-medium">IP Address</th>
                  <th className="pb-3 font-medium">Resources</th>
                  <th className="pb-3 font-medium">VMs</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredNodes.map((node) => (
                  <NodeRow
                    key={node.id}
                    node={node}
                    onEdit={openEditDialog}
                    onToggleMaintenance={handleToggleMaintenance}
                    onRemove={handleRemoveNode}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isAddNodeOpen} onOpenChange={setIsAddNodeOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Node</DialogTitle>
            <DialogDescription>Add a new physical node to your infrastructure</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Node Name</Label>
                <Input
                  id="name"
                  placeholder="pve-us-01"
                  value={nodeForm.name}
                  onChange={(e) => setNodeForm({ ...nodeForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hostname">Hostname</Label>
                <Input
                  id="hostname"
                  placeholder="pve-us-01.internal"
                  value={nodeForm.hostname}
                  onChange={(e) => setNodeForm({ ...nodeForm, hostname: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ipAddress">IP Address</Label>
                <Input
                  id="ipAddress"
                  placeholder="10.0.0.10"
                  value={nodeForm.ipAddress}
                  onChange={(e) => setNodeForm({ ...nodeForm, ipAddress: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="datacenter">Datacenter</Label>
                <Select
                  value={nodeForm.datacenterId}
                  onValueChange={(value) => setNodeForm({ ...nodeForm, datacenterId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select datacenter" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockDatacenters.map((dc) => (
                      <SelectItem key={dc.id} value={dc.id}>
                        {dc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cpuCores">CPU Cores</Label>
                <Input
                  id="cpuCores"
                  type="number"
                  placeholder="64"
                  value={nodeForm.cpuCores}
                  onChange={(e) => setNodeForm({ ...nodeForm, cpuCores: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ramGb">RAM (GB)</Label>
                <Input
                  id="ramGb"
                  type="number"
                  placeholder="256"
                  value={nodeForm.ramGb}
                  onChange={(e) => setNodeForm({ ...nodeForm, ramGb: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="diskGb">Disk (GB)</Label>
                <Input
                  id="diskGb"
                  type="number"
                  placeholder="4000"
                  value={nodeForm.diskGb}
                  onChange={(e) => setNodeForm({ ...nodeForm, diskGb: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cluster">Cluster (Optional)</Label>
              <Select
                value={nodeForm.clusterId}
                onValueChange={(value) => setNodeForm({ ...nodeForm, clusterId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="No cluster" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No cluster</SelectItem>
                  {clusters.map((cluster) => (
                    <SelectItem key={cluster.id} value={cluster.id}>
                      {cluster.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddNodeOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddNode}>Add Node</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditNodeOpen} onOpenChange={setIsEditNodeOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Node</DialogTitle>
            <DialogDescription>Update node configuration</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Node Name</Label>
                <Input
                  id="edit-name"
                  value={nodeForm.name}
                  onChange={(e) => setNodeForm({ ...nodeForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-hostname">Hostname</Label>
                <Input
                  id="edit-hostname"
                  value={nodeForm.hostname}
                  onChange={(e) => setNodeForm({ ...nodeForm, hostname: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-ipAddress">IP Address</Label>
                <Input
                  id="edit-ipAddress"
                  value={nodeForm.ipAddress}
                  onChange={(e) => setNodeForm({ ...nodeForm, ipAddress: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-datacenter">Datacenter</Label>
                <Select
                  value={nodeForm.datacenterId}
                  onValueChange={(value) => setNodeForm({ ...nodeForm, datacenterId: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockDatacenters.map((dc) => (
                      <SelectItem key={dc.id} value={dc.id}>
                        {dc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-cpuCores">CPU Cores</Label>
                <Input
                  id="edit-cpuCores"
                  type="number"
                  value={nodeForm.cpuCores}
                  onChange={(e) => setNodeForm({ ...nodeForm, cpuCores: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-ramGb">RAM (GB)</Label>
                <Input
                  id="edit-ramGb"
                  type="number"
                  value={nodeForm.ramGb}
                  onChange={(e) => setNodeForm({ ...nodeForm, ramGb: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-diskGb">Disk (GB)</Label>
                <Input
                  id="edit-diskGb"
                  type="number"
                  value={nodeForm.diskGb}
                  onChange={(e) => setNodeForm({ ...nodeForm, diskGb: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-cluster">Cluster</Label>
              <Select
                value={nodeForm.clusterId}
                onValueChange={(value) => setNodeForm({ ...nodeForm, clusterId: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No cluster</SelectItem>
                  {clusters.map((cluster) => (
                    <SelectItem key={cluster.id} value={cluster.id}>
                      {cluster.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditNodeOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditNode}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isViewNodeOpen} onOpenChange={setIsViewNodeOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Node Details</DialogTitle>
            <DialogDescription>{selectedNode?.name}</DialogDescription>
          </DialogHeader>
          {selectedNode && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-muted-foreground">Node Name</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.name}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Hostname</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.hostname}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">IP Address</Label>
                    <p className="mt-1 font-mono text-sm font-medium text-foreground">{selectedNode.ipAddress}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Datacenter</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.datacenterName}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-muted-foreground">Status</Label>
                    <div className="mt-1">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          selectedNode.status === "online"
                            ? "bg-accent/10 text-accent"
                            : selectedNode.status === "offline"
                              ? "bg-red-500/10 text-red-500"
                              : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            selectedNode.status === "online"
                              ? "bg-accent"
                              : selectedNode.status === "offline"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                          }`}
                        />
                        {selectedNode.status.charAt(0).toUpperCase() + selectedNode.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">CPU Cores</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.cpuCores} Cores</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">RAM</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.ramGb} GB</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Disk</Label>
                    <p className="mt-1 font-medium text-foreground">{selectedNode.diskGb} GB</p>
                  </div>
                </div>
              </div>

              {selectedNode.clusterName && (
                <div className="rounded-lg border border-border bg-secondary/50 p-4">
                  <Label className="text-muted-foreground">Cluster Information</Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Network className="h-4 w-4 text-accent" />
                    <span className="font-medium text-foreground">{selectedNode.clusterName}</span>
                    {selectedNode.isClusterMaster && (
                      <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">Master</span>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Label>Resource Usage</Label>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">CPU Usage</span>
                      <span className="font-medium text-foreground">{selectedNode.cpuUsagePercent.toFixed(1)}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${selectedNode.cpuUsagePercent}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">RAM Usage</span>
                      <span className="font-medium text-foreground">
                        {selectedNode.ramUsageGb.toFixed(1)} / {selectedNode.ramGb} GB
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${(selectedNode.ramUsageGb / selectedNode.ramGb) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Disk Usage</span>
                      <span className="font-medium text-foreground">
                        {selectedNode.diskUsageGb.toFixed(1)} / {selectedNode.diskGb} GB
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${(selectedNode.diskUsageGb / selectedNode.diskGb) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">Created At</Label>
                    <p className="mt-1 font-medium text-foreground">
                      {new Date(selectedNode.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Last Updated</Label>
                    <p className="mt-1 font-medium text-foreground">
                      {new Date(selectedNode.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewNodeOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function NodeRow({
  node,
  onEdit,
  onToggleMaintenance,
  onRemove,
}: {
  node: Node
  onEdit: (node: Node) => void
  onToggleMaintenance: (nodeId: string) => void
  onRemove: (nodeId: string) => void
}) {
  const vmCount = mockServers.filter((s) => s.nodeId === node.id).length

  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-4">
        <div>
          <p className="font-medium text-foreground">{node.name}</p>
          <p className="text-xs text-muted-foreground">{node.hostname}</p>
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{node.datacenterName}</td>
      <td className="py-4 text-sm font-mono text-muted-foreground">{node.ipAddress}</td>
      <td className="py-4">
        <div className="text-sm text-muted-foreground">
          {node.cpuCores}C / {node.ramGb}GB / {node.diskGb}GB
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{vmCount}</td>
      <td className="py-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            node.status === "online"
              ? "bg-accent/10 text-accent"
              : node.status === "offline"
                ? "bg-red-500/10 text-red-500"
                : "bg-yellow-500/10 text-yellow-500"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              node.status === "online" ? "bg-accent" : node.status === "offline" ? "bg-red-500" : "bg-yellow-500"
            }`}
          />
          {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
        </span>
      </td>
      <td className="py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(node)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Power className="mr-2 h-4 w-4" />
              Reboot
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onToggleMaintenance(node.id)}>
              <Settings className="mr-2 h-4 w-4" />
              {node.status === "maintenance" ? "Exit Maintenance" : "Maintenance Mode"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={() => onRemove(node.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  )
}
