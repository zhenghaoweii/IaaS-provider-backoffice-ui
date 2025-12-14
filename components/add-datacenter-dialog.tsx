"use client"

import type React from "react"

import { useState } from "react"
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

interface AddDatacenterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddDatacenterDialog({ open, onOpenChange }: AddDatacenterDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    provider: "proxmox",
    location: "",
    apiEndpoint: "",
    apiToken: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would connect to your database to save the datacenter
    console.log("Datacenter form submitted:", formData)
    onOpenChange(false)
    setFormData({
      name: "",
      provider: "proxmox",
      location: "",
      apiEndpoint: "",
      apiToken: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Datacenter</DialogTitle>
            <DialogDescription>Connect a new Proxmox datacenter to manage servers</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Datacenter Name</Label>
              <Input
                id="name"
                placeholder="DC-US-EAST-1"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="provider">Provider</Label>
              <Select
                value={formData.provider}
                onValueChange={(value) => setFormData({ ...formData, provider: value })}
              >
                <SelectTrigger id="provider">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proxmox">Proxmox</SelectItem>
                  <SelectItem value="vmware" disabled>
                    VMware (Coming Soon)
                  </SelectItem>
                  <SelectItem value="openstack" disabled>
                    OpenStack (Coming Soon)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Virginia, USA"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="apiEndpoint">API Endpoint</Label>
              <Input
                id="apiEndpoint"
                type="url"
                placeholder="https://proxmox.example.com:8006"
                value={formData.apiEndpoint}
                onChange={(e) => setFormData({ ...formData, apiEndpoint: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="apiToken">API Token</Label>
              <Input
                id="apiToken"
                type="password"
                placeholder="PVEAPIToken=..."
                value={formData.apiToken}
                onChange={(e) => setFormData({ ...formData, apiToken: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">Generate an API token in your Proxmox datacenter</p>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Datacenter</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
