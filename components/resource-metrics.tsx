"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { subHours, subDays, format } from "date-fns"
import { cn } from "@/lib/utils"
import { Cpu, HardDrive, Network, Activity } from "lucide-react"

import { Server } from "@/lib/types"

type TimeRange = "1h" | "6h" | "24h" | "7d" | "30d"

interface MetricData {
    timestamp: number
    cpu: number
    memory: number
    diskRead: number
    diskWrite: number
    netIn: number
    netOut: number
}

// Generate mock data based on time range
const generateData = (range: TimeRange): MetricData[] => {
    const data: MetricData[] = []
    const now = new Date()
    let points = 0
    let interval = 0 // in minutes

    switch (range) {
        case "1h":
            points = 60
            interval = 1
            break
        case "6h":
            points = 72 // every 5 mins
            interval = 5
            break
        case "24h":
            points = 96 // every 15 mins
            interval = 15
            break
        case "7d":
            points = 84 // every 2 hours
            interval = 120
            break
        case "30d":
            points = 90 // every 8 hours
            interval = 480
            break
    }

    for (let i = points; i >= 0; i--) {
        const time = new Date(now.getTime() - i * interval * 60000)

        // Base load simulating daily patterns
        const hour = time.getHours()
        const isPeak = hour >= 9 && hour <= 17
        const baseLoad = isPeak ? 40 : 15

        // Add randomness
        const random = Math.random() * 20
        const spike = Math.random() > 0.95 ? 30 : 0

        data.push({
            timestamp: time.getTime(),
            cpu: Math.min(100, Math.floor(baseLoad + random + spike)),
            memory: Math.min(100, Math.floor(baseLoad * 1.2 + random)),
            diskRead: Math.floor(Math.random() * 50), // MB/s
            diskWrite: Math.floor(Math.random() * 20), // MB/s
            netIn: Math.floor(Math.random() * 100), // Mbps
            netOut: Math.floor(Math.random() * 100), // Mbps
        })
    }

    return data
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border border-white/10 bg-black/80 backdrop-blur-md p-3 shadow-xl">
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {format(new Date(label), "MMM d, HH:mm")}
                </p>
                {payload.map((p: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="text-muted-foreground">{p.name}:</span>
                        <span className="font-mono font-medium text-foreground">
                            {p.value}{p.unit}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
    return null
}

export function ResourceMetrics({ server }: { server?: Server }) {
    const [range, setRange] = React.useState<TimeRange>("1h")
    const [data, setData] = React.useState<MetricData[]>([])

    React.useEffect(() => {
        setData(generateData(range))
    }, [range])

    const formatXAxis = (tick: number) => {
        const date = new Date(tick)
        switch (range) {
            case "1h":
            case "6h":
            case "24h":
                return format(date, "HH:mm")
            case "7d":
                return format(date, "MMM d, HH:mm")
            case "30d":
                return format(date, "MMM d")
            default:
                return format(date, "HH:mm")
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Resource Usage {server && <span className="text-muted-foreground text-sm font-normal">({server.hostname})</span>}
                </h3>
                <Tabs defaultValue="1h" onValueChange={(v) => setRange(v as TimeRange)} className="w-full sm:w-auto">
                    <TabsList className="grid w-full grid-cols-5 bg-secondary/50 border border-white/5">
                        <TabsTrigger value="1h">1H</TabsTrigger>
                        <TabsTrigger value="6h">6H</TabsTrigger>
                        <TabsTrigger value="24h">24H</TabsTrigger>
                        <TabsTrigger value="7d">7D</TabsTrigger>
                        <TabsTrigger value="30d">30D</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* CPU Usage */}
                <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Cpu className="h-4 w-4" /> CPU Usage
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="timestamp"
                                        tickFormatter={formatXAxis}
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        minTickGap={30}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        unit="%"
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="cpu"
                                        name="CPU"
                                        unit="%"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorCpu)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Memory Usage */}
                <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Activity className="h-4 w-4" /> Memory Usage
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="timestamp"
                                        tickFormatter={formatXAxis}
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        minTickGap={30}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        unit="%"
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="memory"
                                        name="Memory"
                                        unit="%"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorMem)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Disk I/O */}
                <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <HardDrive className="h-4 w-4" /> Disk I/O
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorRead" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorWrite" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="timestamp"
                                        tickFormatter={formatXAxis}
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        minTickGap={30}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        unit=" MB/s"
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="diskRead"
                                        name="Read"
                                        unit=" MB/s"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorRead)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="diskWrite"
                                        name="Write"
                                        unit=" MB/s"
                                        stroke="#f59e0b"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorWrite)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Network Trafic */}
                <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Network className="h-4 w-4" /> Public Network
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorNetIn" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorNetOut" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="timestamp"
                                        tickFormatter={formatXAxis}
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        minTickGap={30}
                                    />
                                    <YAxis
                                        stroke="rgba(255,255,255,0.3)"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        unit=" Mbps"
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="netIn"
                                        name="Inbound"
                                        unit=" Mbps"
                                        stroke="#ec4899"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorNetIn)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="netOut"
                                        name="Outbound"
                                        unit=" Mbps"
                                        stroke="#06b6d4"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorNetOut)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
