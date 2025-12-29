"use client"

import { useState } from "react"
import { Search, Plus, Filter, X, MoreVertical, Settings, Power, Trash2, Network, HardDrive, Cpu, Edit, Activity, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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

  // Filter nodes
  const filteredNodes = nodes.filter((node) => {
    const matchesSearch =
      node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.ipAddress.includes(searchQuery)
    const matchesStatus = statusFilter === "all" || node.status === statusFilter
    const matchesDatacenter = datacenterFilter === "all" || node.datacenterId === datacenterFilter
    return matchesSearch && matchesStatus && matchesDatacenter
  })

  const hasActiveFilters = searchQuery !== "" || statusFilter !== "all" || datacenterFilter !== "all"

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
      cpuCores: Number.parseInt(nodeForm.cpuCores) || 0,
      cpuUsagePercent: 0,
      ramGb: Number.parseInt(nodeForm.ramGb) || 0,
      ramUsageGb: 0,
      diskGb: Number.parseInt(nodeForm.diskGb) || 0,
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
            cpuCores: Number.parseInt(nodeForm.cpuCores) || 0,
            ramGb: Number.parseInt(nodeForm.ramGb) || 0,
            diskGb: Number.parseInt(nodeForm.diskGb) || 0,
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

  const handleDeleteNode = (nodeId: string) => {
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

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex items-center justify-between relative z-10" variants={item}>
        <div>
          <h1 className="text-4xl font-bold text-foreground text-glow">Nodes</h1>
          <p className="mt-1 text-muted-foreground">Manage physical/hypervisor nodes across datacenters</p>
        </div>
        <Button onClick={() => setIsAddNodeOpen(true)} className="glow-cyan hover:scale-[1.02] transition-transform">
          <Plus className="mr-2 h-4 w-4" />
          Add Node
        </Button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={item} className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <HardDrive className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total Nodes</p>
              <p className="text-2xl font-bold font-mono">{nodes.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <Activity className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Online</p>
              <p className="text-2xl font-bold font-mono">{nodes.filter(n => n.status === 'online').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Cpu className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total Cores</p>
              <p className="text-2xl font-bold font-mono">{nodes.reduce((acc, n) => acc + n.cpuCores, 0)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Network className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Clusters</p>
              <p className="text-2xl font-bold font-mono">{clusters.length}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center relative z-10">
        <div className="flex flex-1 items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:max-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-secondary/50 border-white/10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] bg-secondary/50 border-white/10">
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
            <SelectTrigger className="w-[160px] bg-secondary/50 border-white/10">
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
            <Button variant="ghost" size="icon" onClick={clearFilters} className="hover:bg-destructive/20 hover:text-destructive shrink-0">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 bg-secondary/30 p-1 rounded-lg border border-white/5 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode("grid")}
            className={`h-8 w-8 p-0 ${viewMode === 'grid' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode("list")}
            className={`h-8 w-8 p-0 ${viewMode === 'list' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <motion.div key="grid" variants={item} className="space-y-6">
          {mockClusters.map((cluster) => {
            const clusterNodes = filteredNodes.filter((node) => node.clusterId === cluster.id)
            if (clusterNodes.length === 0) return null

            const totalVMs = clusterNodes.reduce((acc, node) => {
              return acc + mockServers.filter((s) => s.nodeId === node.id).length
            }, 0)

            return (
              <motion.div key={cluster.id} variants={item}>
                <h3 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
                  <Network className="h-5 w-5 text-accent" />
                  {cluster.name}
                  <span className="text-sm font-normal text-muted-foreground ml-2">({clusterNodes.length} nodes)</span>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded border ${cluster.status === 'healthy' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>
                    {cluster.status.toUpperCase()}
                  </span>
                </h3>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {clusterNodes.map((node) => {
                    const vmCount = mockServers.filter((s) => s.nodeId === node.id).length
                    return (
                      <Card
                        key={node.id}
                        className="group hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
                        onClick={() => {
                          setSelectedNode(node)
                          setIsViewNodeOpen(true)
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:glow-cyan-sm">
                                <HardDrive className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{node.name}</h3>
                                <p className="text-sm text-muted-foreground">{node.datacenterName}</p>
                              </div>
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border ${node.status === "online"
                                ? "bg-accent/10 text-accent border-accent/20"
                                : node.status === "offline"
                                  ? "bg-red-500/10 text-red-500 border-red-500/20"
                                  : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full shadow-[0_0_5px_currentColor] ${node.status === "online"
                                  ? "bg-accent"
                                  : node.status === "offline"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                                  }`}
                              />
                              {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
                            </span>
                          </div>

                          {node.isClusterMaster && (
                            <div className="mt-2">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">
                                Cluster Master
                              </span>
                            </div>
                          )}

                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="mb-1 flex items-center justify-between text-xs font-mono">
                                <span className="text-muted-foreground">CPU</span>
                                <span className="text-foreground">{node.cpuUsagePercent.toFixed(1)}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500" style={{ width: `${node.cpuUsagePercent}%` }} />
                              </div>
                            </div>

                            <div>
                              <div className="mb-1 flex items-center justify-between text-xs font-mono">
                                <span className="text-muted-foreground">RAM</span>
                                <span className="text-foreground">
                                  {node.ramUsageGb.toFixed(1)} / {node.ramGb} GB
                                </span>
                              </div>
                              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                                  style={{ width: `${(node.ramUsageGb / node.ramGb) * 100}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary/50 p-3 group-hover:bg-secondary transition-colors">
                            <div>
                              <p className="text-xs text-muted-foreground font-mono uppercase">VMs</p>
                              <p className="text-lg font-bold text-foreground">{vmCount}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground font-mono uppercase">Cores</p>
                              <p className="text-lg font-bold text-foreground">{node.cpuCores}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}

          <motion.div variants={item} className="mt-8">
            <h3 className="mb-4 text-xl font-bold text-foreground">Standalone Nodes</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNodes.filter(n => !n.clusterId).map((node) => {
                const vmCount = mockServers.filter((s) => s.nodeId === node.id).length
                return (
                  <Card
                    key={node.id}
                    className="group hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
                    onClick={() => {
                      setSelectedNode(node)
                      setIsViewNodeOpen(true)
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:glow-cyan-sm">
                            <HardDrive className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{node.name}</h3>
                            <p className="text-sm text-muted-foreground">{node.datacenterName}</p>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border ${node.status === "online"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : node.status === "offline"
                              ? "bg-red-500/10 text-red-500 border-red-500/20"
                              : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                            }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full shadow-[0_0_5px_currentColor] ${node.status === "online" ? "bg-accent" : node.status === "offline" ? "bg-red-500" : "bg-yellow-500"
                              }`}
                          />
                          {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary/50 p-3 group-hover:bg-secondary transition-colors">
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase">VMs</p>
                          <p className="text-lg font-bold text-foreground">{vmCount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground font-mono uppercase">Cores</p>
                          <p className="text-lg font-bold text-foreground">{node.cpuCores}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div key="list" variants={item}>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left text-sm text-muted-foreground bg-secondary/20">
                      <th className="py-3 pl-4 font-medium">Name</th>
                      <th className="py-3 font-medium">Datacenter</th>
                      <th className="py-3 font-medium">IP Address</th>
                      <th className="py-3 font-medium">Resources Served</th>
                      <th className="py-3 font-medium">VMs</th>
                      <th className="py-3 font-medium">Status</th>
                      <th className="py-3 pr-4 text-right font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNodes.map((node) => (
                      <NodeRow
                        key={node.id}
                        node={node}
                        onEdit={openEditDialog}
                        onToggleMaintenance={handleToggleMaintenance}
                        onRemove={handleDeleteNode}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

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
            {/* ... other form fields similar to original ... */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ipAddress">IP Address</Label>
                <Input
                  id="ipAddress"
                  value={nodeForm.ipAddress}
                  onChange={(e) => setNodeForm({ ...nodeForm, ipAddress: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="datacenter">Datacenter</Label>
                <Select value={nodeForm.datacenterId} onValueChange={(val) => setNodeForm({ ...nodeForm, datacenterId: val })}>
                  <SelectTrigger><SelectValue placeholder="Select Datacenter" /></SelectTrigger>
                  <SelectContent>
                    {mockDatacenters.map(dc => <SelectItem key={dc.id} value={dc.id}>{dc.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddNodeOpen(false)}>Cancel</Button>
            <Button onClick={handleAddNode}>Add Node</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditNodeOpen} onOpenChange={setIsEditNodeOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Node</DialogTitle>
          </DialogHeader>
          {/* Simplified edit form reusing same structure */}
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={nodeForm.name} onChange={(e) => setNodeForm({ ...nodeForm, name: e.target.value })} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditNodeOpen(false)}>Cancel</Button>
            <Button onClick={handleEditNode}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={isViewNodeOpen} onOpenChange={setIsViewNodeOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Node Details</DialogTitle>
            <DialogDescription>{selectedNode?.name}</DialogDescription>
          </DialogHeader>
          {selectedNode && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Datacenter</Label>
                  <p>{selectedNode.datacenterName}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Status</Label>
                  <p>{selectedNode.status}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div >
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
    <tr className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors group">
      <td className="py-4 pl-4">
        <div>
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{node.name}</p>
          <p className="text-xs text-muted-foreground">{node.hostname}</p>
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground">{node.datacenterName}</td>
      <td className="py-4 text-sm font-mono text-muted-foreground">{node.ipAddress}</td>
      <td className="py-4">
        <div className="text-sm text-muted-foreground font-mono">
          {node.cpuCores}C / {node.ramGb}GB / {node.diskGb}GB
        </div>
      </td>
      <td className="py-4 text-sm text-muted-foreground font-mono">{vmCount}</td>
      <td className="py-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border ${node.status === "online"
            ? "bg-accent/10 text-accent border-accent/20"
            : node.status === "offline"
              ? "bg-red-500/10 text-red-500 border-red-500/20"
              : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
            }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full shadow-[0_0_5px_currentColor] ${node.status === "online" ? "bg-accent" : node.status === "offline" ? "bg-red-500" : "bg-yellow-500"
              }`}
          />
          {node.status.charAt(0).toUpperCase() + node.status.slice(1)}
        </span>
      </td>
      <td className="py-4 pr-4 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
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
