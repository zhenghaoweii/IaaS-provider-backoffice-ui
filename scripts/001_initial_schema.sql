-- Updated schema to include nodes table for proper hierarchy: Datacenter → Nodes → VMs
-- Datacenters table to track Proxmox instances and future providers
CREATE TABLE IF NOT EXISTS datacenters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  provider VARCHAR(50) NOT NULL DEFAULT 'proxmox',
  location VARCHAR(255),
  api_endpoint TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Nodes table to track physical/hypervisor nodes in each datacenter
CREATE TABLE IF NOT EXISTS nodes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  datacenter_id UUID REFERENCES datacenters(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  hostname VARCHAR(255) NOT NULL,
  ip_address VARCHAR(45),
  status VARCHAR(20) DEFAULT 'online',
  cpu_cores INTEGER,
  cpu_usage_percent DECIMAL(5,2),
  ram_gb INTEGER,
  ram_usage_gb DECIMAL(10,2),
  disk_gb INTEGER,
  disk_usage_gb DECIMAL(10,2),
  proxmox_node_name VARCHAR(255),
  -- Added cluster fields for HA support
  cluster_id UUID REFERENCES clusters(id) ON DELETE SET NULL,
  is_cluster_master BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Servers/VMs table to track all provisioned servers on nodes
CREATE TABLE IF NOT EXISTS servers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  node_id UUID REFERENCES nodes(id) ON DELETE CASCADE,
  hostname VARCHAR(255) NOT NULL,
  ip_address VARCHAR(45),
  status VARCHAR(20) DEFAULT 'running',
  cpu_cores INTEGER,
  ram_gb INTEGER,
  disk_gb INTEGER,
  os VARCHAR(100),
  proxmox_vmid INTEGER,
  is_maintenance BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Maintenance logs table
CREATE TABLE IF NOT EXISTS maintenance_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id UUID REFERENCES servers(id) ON DELETE CASCADE,
  action VARCHAR(50) NOT NULL,
  description TEXT,
  performed_by VARCHAR(255),
  performed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Added clusters table for HA node grouping
CREATE TABLE IF NOT EXISTS clusters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  datacenter_id UUID REFERENCES datacenters(id) ON DELETE CASCADE,
  type VARCHAR(50) DEFAULT 'ha',
  status VARCHAR(20) DEFAULT 'healthy',
  node_count INTEGER DEFAULT 0,
  quorum BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clusters_datacenter ON clusters(datacenter_id);
CREATE INDEX IF NOT EXISTS idx_nodes_datacenter ON nodes(datacenter_id);
-- Added index for cluster queries
CREATE INDEX IF NOT EXISTS idx_nodes_cluster ON nodes(cluster_id);
CREATE INDEX IF NOT EXISTS idx_servers_node ON servers(node_id);
CREATE INDEX IF NOT EXISTS idx_servers_status ON servers(status);
CREATE INDEX IF NOT EXISTS idx_maintenance_logs_server ON maintenance_logs(server_id);
