"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Server, Globe, Key, ShieldCheck, Loader2, Building2, Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Datacenter } from "@/lib/types"

interface DatacenterFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  datacenter?: Datacenter | null
  onSubmit: (data: Partial<Datacenter>) => void
}

export function DatacenterFormDialog({ open, onOpenChange, datacenter, onSubmit }: DatacenterFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    provider: "proxmox",
    location: "",
    apiEndpoint: "",
    infrastructureType: "rented",
    hardwareVendor: "",
    managementType: "managed",
  })
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "success" | "error">("idle")

  // Reset or pre-fill form when dialog opens or datacenter changes
  useEffect(() => {
    setConnectionStatus("idle")
    if (datacenter) {
      setFormData({
        name: datacenter.name,
        provider: datacenter.provider,
        location: datacenter.location,
        apiEndpoint: datacenter.apiEndpoint,
        infrastructureType: datacenter.infrastructureType || "rented",
        hardwareVendor: datacenter.hardwareVendor || "",
        managementType: datacenter.managementType || "managed",
      })
    } else {
      setFormData({
        name: "",
        provider: "proxmox",
        location: "",
        apiEndpoint: "",
        infrastructureType: "rented",
        hardwareVendor: "",
        managementType: "managed",
      })
    }
  }, [datacenter, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData as Partial<Datacenter>)
    onOpenChange(false)
  }

  const testConnection = async () => {
    setIsTestingConnection(true)
    setConnectionStatus("idle")
    // Mock connection test
    setTimeout(() => {
      setIsTestingConnection(false)
      setConnectionStatus("success")
    }, 1500)
  }

  const isEdit = !!datacenter

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-xl border-white/10 shadow-2xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-4">
            <DialogTitle className="flex items-center gap-2 text-xl">
              {isEdit ? <Settings className="w-5 h-5 text-primary" /> : <Server className="w-5 h-5 text-primary" />}
              {isEdit ? "Edit Datacenter" : "Connect New Datacenter"}
            </DialogTitle>
            <DialogDescription>
              {isEdit ? "Update configuration details for this datacenter." : "Add a new Proxmox cluster or standalone node to your dashboard."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Section: General Info */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-primary" />
                General Information
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <div className="relative">
                    <Server className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="DC-US-EAST-1"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="pl-9 bg-secondary/50 border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Physical Location</Label>
                  <div className="relative">
                    <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      className="pl-9 bg-secondary/50 border-white/10 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Infrastructure */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-blue-500" />
                Infrastructure
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="infra-type">Source Type</Label>
                  <Select
                    value={formData.infrastructureType}
                    onValueChange={(value) => setFormData({ ...formData, infrastructureType: value })}
                  >
                    <SelectTrigger id="infra-type" className="bg-secondary/50 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rented">Rented Dedicated</SelectItem>
                      <SelectItem value="self-hosted">Self-Hosted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vendor">Hardware Vendor</Label>
                  <div className="relative">
                    <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="vendor"
                      placeholder={formData.infrastructureType === "rented" ? "OVH, Hetzner..." : "Internal Lab..."}
                      value={formData.hardwareVendor}
                      onChange={(e) => setFormData({ ...formData, hardwareVendor: e.target.value })}
                      className="pl-9 bg-secondary/50 border-white/10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="provider">Platform Provider</Label>
                  <Select
                    value={formData.provider}
                    onValueChange={(value) => setFormData({ ...formData, provider: value })}
                  >
                    <SelectTrigger id="provider" className="bg-secondary/50 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proxmox">Proxmox VE</SelectItem>
                      <SelectItem value="vmware" disabled>VMware (Coming Soon)</SelectItem>
                      <SelectItem value="openstack" disabled>OpenStack (Coming Soon)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mgmt-type">Management Level</Label>
                  <Select
                    value={formData.managementType}
                    onValueChange={(value) => setFormData({ ...formData, managementType: value })}
                  >
                    <SelectTrigger id="mgmt-type" className="bg-secondary/50 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="managed">Fully Managed</SelectItem>
                      <SelectItem value="manual">Manual Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Section: Connection */}
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
                  <span className="w-1 h-3 rounded-full bg-green-500" />
                  Connection Details
                </h4>
                {connectionStatus === "success" && (
                  <span className="text-xs font-bold text-green-500 flex items-center gap-1 animate-in fade-in slide-in-from-right-2">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiEndpoint">API Endpoint</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="apiEndpoint"
                      type="url"
                      placeholder="https://192.168.1.100:8006"
                      value={formData.apiEndpoint}
                      onChange={(e) => setFormData({ ...formData, apiEndpoint: e.target.value })}
                      required
                      className="pl-9 bg-black/20 border-white/10 font-mono text-xs"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className={`min-w-[100px] border-white/10 ${connectionStatus === 'success' ? 'text-green-500 border-green-500/30 bg-green-500/10' : ''}`}
                    onClick={testConnection}
                    disabled={isTestingConnection || !formData.apiEndpoint}
                  >
                    {isTestingConnection ? <Loader2 className="w-4 h-4 animate-spin" /> : "Test"}
                  </Button>
                </div>
              </div>

              {!isEdit && (
                <div className="space-y-2">
                  <Label htmlFor="apiToken">API Token / Password</Label>
                  <div className="relative">
                    <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="apiToken"
                      type="password"
                      placeholder="PVEAPIToken=..."
                      className="pl-9 bg-black/20 border-white/10"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)} className="hover:bg-white/5">
              Cancel
            </Button>
            <Button
              type="submit"
              className="glow-cyan min-w-[140px]"
              disabled={isTestingConnection}
            >
              {isEdit ? "Save Changes" : "Connect Datacenter"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
