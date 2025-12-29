"use client"

import { useState } from "react"
import { Plus, MapPin, Database, Zap, TrendingUp, Search, LayoutGrid, List, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDatacenters, mockNodes } from "@/lib/mock-data"
import { DatacenterCard } from "@/components/datacenter-card"
import { DatacenterFormDialog } from "@/components/datacenter-form-dialog"
import { DeleteDatacenterAlert } from "@/components/delete-datacenter-alert"
import { motion } from "framer-motion"
import { Datacenter } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

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

export default function DatacentersPage() {
  const { toast } = useToast()
  const [datacenters, setDatacenters] = useState<Datacenter[]>(mockDatacenters)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingDatacenter, setEditingDatacenter] = useState<Datacenter | null>(null)
  const [deletingDatacenterId, setDeletingDatacenterId] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDatacenters = datacenters.filter(dc =>
    dc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dc.hardwareVendor?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handlers
  const handleCreate = (data: Partial<Datacenter>) => {
    const newDatacenter: Datacenter = {
      id: `dc-${Date.now()}`,
      name: data.name!,
      provider: data.provider as any,
      location: data.location!,
      apiEndpoint: data.apiEndpoint!,
      status: "active",
      infrastructureType: data.infrastructureType as any || "rented",
      hardwareVendor: data.hardwareVendor || "Unknown",
      managementType: data.managementType as any || "managed",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setDatacenters([...datacenters, newDatacenter])
    toast({
      title: "Datacenter Connected",
      description: `${newDatacenter.name} has been successfully added to your fleet.`,
    })
  }

  const handleUpdate = (data: Partial<Datacenter>) => {
    if (!editingDatacenter) return
    const updatedList = datacenters.map(dc =>
      dc.id === editingDatacenter.id
        ? { ...dc, ...data, updatedAt: new Date().toISOString() }
        : dc
    )
    setDatacenters(updatedList as Datacenter[])
    setEditingDatacenter(null)
    toast({
      title: "Configuration Updated",
      description: "Datacenter settings have been saved.",
    })
  }

  const confirmDelete = () => {
    if (deletingDatacenterId) {
      setDatacenters(datacenters.filter(dc => dc.id !== deletingDatacenterId))
      toast({
        title: "Datacenter Removed",
        description: "The datacenter and its nodes have been removed.",
        variant: "destructive",
      })
      setDeletingDatacenterId(null)
    }
  }

  const openAddDialog = () => {
    setEditingDatacenter(null)
    setIsDialogOpen(true)
  }

  const openEditDialog = (dc: Datacenter) => {
    setEditingDatacenter(dc)
    setIsDialogOpen(true)
  }

  const initiateDelete = (id: string) => {
    setDeletingDatacenterId(id)
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
          <h1 className="text-4xl font-bold text-foreground text-glow">Datacenters</h1>
          <p className="mt-1 text-muted-foreground">Manage Proxmox datacenters and infrastructure</p>
        </div>
        <Button onClick={openAddDialog} className="glow-cyan hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(var(--primary),0.3)]">
          <Plus className="mr-2 h-4 w-4" />
          Add Datacenter
        </Button>
      </motion.div>

      {/* Global Stats Strip */}
      <motion.div variants={item} className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total Regions</p>
              <p className="text-2xl font-bold font-mono">{datacenters.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Database className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Active Nodes</p>
              <p className="text-2xl font-bold font-mono">{mockNodes.filter(n => n.status === "online").length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Power Usage</p>
              <p className="text-2xl font-bold font-mono">1.2 MW</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Avg Uptime</p>
              <p className="text-2xl font-bold font-mono">99.99%</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center relative z-10">
        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search datacenters..."
            className="pl-9 bg-secondary/50 border-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-secondary/30 p-1 rounded-lg border border-white/5">
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

      {filteredDatacenters.length === 0 ? (
        <motion.div variants={item} className="flex flex-col items-center justify-center py-12 text-center">
          <div className="h-16 w-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground">No datacenters found</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm">
            No results for "{searchQuery}". Try adjusting your search query.
          </p>
          <Button
            variant="link"
            onClick={() => setSearchQuery("")}
            className="mt-4 text-primary"
          >
            Clear Search
          </Button>
        </motion.div>
      ) : (
        <>
          {viewMode === 'grid' ? (
            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={item}>
              {filteredDatacenters.map((datacenter) => {
                const nodeCount = mockNodes.filter((n) => n.datacenterId === datacenter.id).length
                return (
                  <DatacenterCard
                    key={datacenter.id}
                    datacenter={datacenter}
                    nodeCount={nodeCount}
                    onEdit={openEditDialog}
                    onDelete={initiateDelete}
                  />
                )
              })}
            </motion.div>
          ) : (
            <motion.div variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 text-left text-sm text-muted-foreground font-mono uppercase tracking-wider bg-black/20">
                          <th className="py-3 px-4 font-medium">Name</th>
                          <th className="py-3 px-4 font-medium">Provider</th>
                          <th className="py-3 px-4 font-medium">Location</th>
                          <th className="py-3 px-4 font-medium">Infrastructure</th>
                          <th className="py-3 px-4 font-medium flex items-center justify-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDatacenters.map((dc) => (
                          <tr key={dc.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                            <td className="py-3 px-4">
                              <div className="flex flex-col">
                                <span className="font-bold text-foreground">{dc.name}</span>
                                <span className="text-xs text-muted-foreground font-mono">{dc.apiEndpoint}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary/50 border border-white/10 uppercase">
                                {dc.provider}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3 h-3" /> {dc.location}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                {dc.infrastructureType === 'rented' ?
                                  <span className="text-xs text-blue-400 border border-blue-400/30 px-1.5 rounded bg-blue-400/10">Rented</span> :
                                  <span className="text-xs text-orange-400 border border-orange-400/30 px-1.5 rounded bg-orange-400/10">Self-Hosted</span>
                                }
                                {dc.hardwareVendor && <span className="text-xs text-muted-foreground border border-white/10 px-1.5 rounded">{dc.hardwareVendor}</span>}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => openEditDialog(dc)}>
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive" onClick={() => initiateDelete(dc.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </>
      )}

      <DatacenterFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        datacenter={editingDatacenter}
        onSubmit={editingDatacenter ? handleUpdate : handleCreate}
      />

      <DeleteDatacenterAlert
        open={!!deletingDatacenterId}
        onOpenChange={(open) => !open && setDeletingDatacenterId(null)}
        onConfirm={confirmDelete}
        datacenterName={datacenters.find(dc => dc.id === deletingDatacenterId)?.name || 'this datacenter'}
      />
    </motion.div>
  )
}
