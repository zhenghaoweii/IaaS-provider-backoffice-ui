export type DatacenterProvider = "proxmox" | "vmware" | "openstack"

export type DatacenterStatus = "active" | "maintenance" | "offline"

export type NodeStatus = "online" | "offline" | "maintenance"

export type ServerStatus = "running" | "stopped" | "maintenance" | "error"

export interface Datacenter {
  id: string
  name: string
  provider: DatacenterProvider
  location: string
  apiEndpoint: string
  status: DatacenterStatus
  createdAt: string
  updatedAt: string
}

export interface Node {
  id: string
  datacenterId: string
  datacenterName?: string
  name: string
  hostname: string
  ipAddress: string
  status: NodeStatus
  cpuCores: number
  cpuUsagePercent: number
  ramGb: number
  ramUsageGb: number
  diskGb: number
  diskUsageGb: number
  proxmoxNodeName?: string
  clusterId?: string
  clusterName?: string
  isClusterMaster?: boolean
  createdAt: string
  updatedAt: string
}

export interface Server {
  id: string
  nodeId: string
  nodeName?: string
  hostname: string
  ipAddress: string
  status: ServerStatus
  cpuCores: number
  ramGb: number
  diskGb: number
  os: string
  proxmoxVmid?: number
  isMaintenance: boolean
  createdAt: string
  updatedAt: string
}

export interface MaintenanceLog {
  id: string
  serverId: string
  action: string
  description: string
  performedBy: string
  performedAt: string
}

export interface Cluster {
  id: string
  name: string
  datacenterId: string
  datacenterName?: string
  type: "ha" | "ceph" | "corosync"
  status: "healthy" | "degraded" | "offline"
  nodeCount: number
  quorum: boolean
  createdAt: string
  updatedAt: string
}
