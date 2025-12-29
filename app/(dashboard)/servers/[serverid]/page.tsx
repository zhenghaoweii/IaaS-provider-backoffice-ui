"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import {
    ArrowLeft,
    Power,
    Settings,
    Terminal,
    HardDrive,
    Cpu,
    MemoryStick,
    Activity,
    Server as ServerIcon,
    Globe,
    Clock,
    ShieldAlert,
    LayoutDashboard,
    FileText,
    Save,
    Trash2,
    AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { mockServers, mockMaintenanceLogs } from "@/lib/mock-data"
import { ServerStatusBadge } from "@/components/server-status-badge"
import { ResourceMetrics } from "@/components/resource-metrics"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

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

export default function ServerDetailPage() {
    const params = useParams()
    const router = useRouter()
    const serverId = params.serverid as string
    const server = mockServers.find((s) => s.id === serverId)

    if (!server) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <h1 className="text-2xl font-bold text-foreground">Server Not Found</h1>
                <Button onClick={() => router.back()} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Servers
                </Button>
            </div>
        )
    }

    const serverLogs = mockMaintenanceLogs.filter(log => log.serverId === server.id)

    return (
        <motion.div
            className="space-y-6 h-[calc(100vh-6rem)]"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Header */}
            <motion.div variants={item} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between relative z-10 shrink-0">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Button variant="ghost" size="sm" onClick={() => router.back()} className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <h1 className="text-3xl font-bold text-foreground text-glow">{server.hostname}</h1>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground pl-8">
                        <span className="flex items-center gap-1.5 text-sm font-mono">
                            <Globe className="h-3.5 w-3.5" />
                            {server.ipAddress}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1.5 text-sm">
                            <ServerIcon className="h-3.5 w-3.5" />
                            ID: {server.proxmoxVmid}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <ServerStatusBadge status={server.status} />
                    </div>
                </div>

                <div className="flex items-center gap-3 pl-8 md:pl-0">
                    <Link href={`/terminal/${server.id}`} target="_blank">
                        <Button
                            className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                        >
                            <Terminal className="mr-2 h-4 w-4" />
                            Console
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Main Layout */}
            <Tabs defaultValue="resources" className="flex flex-col lg:flex-row gap-8 h-full">
                {/* Side Navigation */}
                <motion.div variants={item} className="lg:w-64 shrink-0 space-y-4">
                    <TabsList className="flex flex-row lg:flex-col h-auto w-full bg-transparent gap-2 p-0 justify-start">
                        <TabsTrigger
                            value="overview"
                            className="w-full justify-start px-4 py-3 border-l-2 border-transparent transition-all duration-200 hover:bg-white/5 hover:text-foreground text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-transparent data-[state=active]:text-primary font-medium"
                        >
                            <LayoutDashboard className="mr-3 h-4 w-4" />
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="resources"
                            className="w-full justify-start px-4 py-3 border-l-2 border-transparent transition-all duration-200 hover:bg-white/5 hover:text-foreground text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-transparent data-[state=active]:text-primary font-medium"
                        >
                            <Activity className="mr-3 h-4 w-4" />
                            Resources
                        </TabsTrigger>
                        <TabsTrigger
                            value="logs"
                            className="w-full justify-start px-4 py-3 border-l-2 border-transparent transition-all duration-200 hover:bg-white/5 hover:text-foreground text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-transparent data-[state=active]:text-primary font-medium"
                        >
                            <FileText className="mr-3 h-4 w-4" />
                            Logs
                        </TabsTrigger>
                        <TabsTrigger
                            value="settings"
                            className="w-full justify-start px-4 py-3 border-l-2 border-transparent transition-all duration-200 hover:bg-white/5 hover:text-foreground text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-transparent data-[state=active]:text-primary font-medium"
                        >
                            <Settings className="mr-3 h-4 w-4" />
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20 mt-6 hidden lg:block">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-primary">Need Help?</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-muted-foreground">
                            Check the documentation for advanced server configuration and troubleshooting.
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="text-xs p-0 text-primary h-auto">View Docs &rarr;</Button>
                        </CardFooter>
                    </Card>
                </motion.div>

                {/* Content Area */}
                <div className="flex-1 pb-10">
                    <TabsContent value="overview" className="space-y-6 m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Summary Cards */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">CPU</CardTitle>
                                    <Cpu className="h-4 w-4 text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-foreground">{server.cpuCores} vCPU</div>
                                    <p className="text-xs text-muted-foreground mt-1">High Performance</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-green-500/30 transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">RAM</CardTitle>
                                    <MemoryStick className="h-4 w-4 text-green-500" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-foreground">{server.ramGb} GB</div>
                                    <p className="text-xs text-muted-foreground mt-1">DDR4 ECC</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-blue-500/30 transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">Storage</CardTitle>
                                    <HardDrive className="h-4 w-4 text-blue-500" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-foreground">{server.diskGb} GB</div>
                                    <p className="text-xs text-muted-foreground mt-1">NVMe SSD</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* System Details */}
                        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                            <CardHeader>
                                <CardTitle>System Information</CardTitle>
                                <CardDescription>Technical specifications and network details.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Operating System</Label>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Terminal className="h-4 w-4 text-primary" />
                                                <span className="text-sm font-medium">{server.os}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Kernel Version</Label>
                                            <div className="mt-1 text-sm font-medium">5.15.0-76-generic</div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Architecture</Label>
                                            <div className="mt-1 text-sm font-medium">x86_64</div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Virtualization</Label>
                                            <div className="mt-1 text-sm font-medium">KVM</div>
                                        </div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-full bg-white/5" />
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Public IP</Label>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Globe className="h-4 w-4 text-blue-500" />
                                                <span className="text-sm font-medium">{server.ipAddress}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Private IP</Label>
                                            <div className="mt-1 text-sm font-medium">10.0.0.{server.proxmoxVmid}</div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Hostname</Label>
                                            <div className="mt-1 text-sm font-medium">{server.hostname}</div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-muted-foreground">Region</Label>
                                            <div className="mt-1 text-sm font-medium">US-East (N. Virginia)</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="resources" className="space-y-6 m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <ResourceMetrics server={server} />
                    </TabsContent>

                    <TabsContent value="logs" className="space-y-6 m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                            <CardHeader>
                                <CardTitle>Maintenance & Activity Logs</CardTitle>
                                <CardDescription>Historical record of all events regarding this server.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {serverLogs.length > 0 ? (
                                    <div className="space-y-4">
                                        {serverLogs.map(log => (
                                            <div key={log.id} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50 items-start hover:bg-secondary/50 transition-colors">
                                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <Activity className="h-4 w-4 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm text-foreground">{log.action.replace("_", " ").toUpperCase()}</p>
                                                    <p className="text-sm text-muted-foreground mt-1">{log.description}</p>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {new Date(log.performedAt).toLocaleString()}
                                                        </span>
                                                        <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-0.5 rounded">
                                                            User: {log.performedBy}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                                        <FileText className="h-12 w-12 mb-4 opacity-20" />
                                        <p>No activity logs found for this server.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6 m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                            <CardHeader>
                                <CardTitle>General Settings</CardTitle>
                                <CardDescription>Manage basic server configuration.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="hostname">Server Hostname</Label>
                                    <div className="flex gap-2">
                                        <Input id="hostname" defaultValue={server.hostname} className="bg-black/20 border-white/10" />
                                        <Button variant="secondary">
                                            <Save className="w-4 h-4 mr-2" />
                                            Update
                                        </Button>
                                    </div>
                                </div>

                                <Separator className="bg-white/5 my-4" />

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label className="text-base">Maintenance Mode</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Disable public access while performing maintenance.
                                        </p>
                                    </div>
                                    <Switch checked={server.isMaintenance} />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-red-500/5 border-red-500/20">
                            <CardHeader>
                                <CardTitle className="text-red-500 flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5" />
                                    Danger Zone
                                </CardTitle>
                                <CardDescription className="text-red-500/70">
                                    Destructive actions that cannot be undone.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                                    <div>
                                        <h4 className="font-medium text-foreground">Rebuild Server</h4>
                                        <p className="text-sm text-muted-foreground">Reinstall the operating system and wipe all data.</p>
                                    </div>
                                    <Button variant="destructive" size="sm">Rebuild</Button>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                                    <div>
                                        <h4 className="font-medium text-foreground">Delete Server</h4>
                                        <p className="text-sm text-muted-foreground">Permanently delete this server and all associated resources.</p>
                                    </div>
                                    <Button variant="destructive" size="sm">
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete Forever
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </motion.div>
    )
}
