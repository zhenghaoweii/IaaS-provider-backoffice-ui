"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    Terminal,
    Search,
    MoreVertical,
    Zap,
    Shield,
    Clock,
    Server as ServerIcon,
    Globe
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { mockServers } from "@/lib/mock-data"
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

export default function TerminalsPage() {
    const [searchQuery, setSearchQuery] = React.useState("")

    const filteredServers = mockServers.filter(server =>
        server.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.ipAddress.includes(searchQuery) ||
        server.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between relative z-10">
                <div>
                    <h1 className="text-3xl font-bold text-foreground text-glow flex items-center gap-3">
                        <Terminal className="h-8 w-8 text-primary" />
                        Terminal Hub
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Secure command center for all your infrastructure
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search hosts..."
                            className="pl-8 bg-secondary/50 border-white/10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Host Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredServers.map((server) => (
                    <motion.div key={server.id} variants={item}>
                        <Link href={`/terminal/${server.id}`} target="_blank">
                            <Card className="bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <CardContent className="p-5 space-y-4 relative z-10">
                                    {/* Card Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "h-10 w-10 rounded-lg flex items-center justify-center transition-colors",
                                                server.status === "running" ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
                                            )}>
                                                <Terminal className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{server.hostname}</h3>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mt-0.5">
                                                    <Globe className="h-3 w-3" />
                                                    {server.ipAddress}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Dot */}
                                        <div className="relative flex h-3 w-3">
                                            {server.status === "running" && (
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            )}
                                            <span className={cn(
                                                "relative inline-flex rounded-full h-3 w-3",
                                                server.status === "running" ? "bg-green-500" : "bg-red-500"
                                            )}></span>
                                        </div>
                                    </div>

                                    {/* Server Info / Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <Badge variant="secondary" className="bg-white/5 border-white/10 text-xs font-normal">
                                            <ServerIcon className="h-3 w-3 mr-1" />
                                            {server.os}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-white/5 border-white/10 text-xs font-normal">
                                            <Clock className="h-3 w-3 mr-1" />
                                            Start: {new Date(server.lastBackup).toLocaleDateString()} {/* Using lastBackup as uptime mock for now */}
                                        </Badge>
                                    </div>

                                    {/* Quick Actions Footer - Visual Only on Card */}
                                    <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-white/5 mt-2">
                                        <div className="flex items-center gap-1.5">
                                            <Shield className="h-3 w-3 text-green-500" />
                                            <span>SSH Key auth</span>
                                        </div>
                                        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                                            Connect <Zap className="h-3 w-3 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {filteredServers.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                    <Search className="h-10 w-10 mb-4 opacity-20" />
                    <p>No hosts found matching "{searchQuery}"</p>
                </div>
            )}
        </motion.div>
    )
}
