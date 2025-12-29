"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { mockServers } from "@/lib/mock-data"
import { TerminalView } from "@/components/terminal-view"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TerminalPage() {
    const params = useParams()
    const serverId = params.serverid as string
    const server = mockServers.find((s) => s.id === serverId)

    if (!server) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white gap-4">
                <h1 className="text-2xl font-bold">Server Not Found</h1>
                <Link href="/servers">
                    <Button variant="outline">Back to Servers</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen bg-[#0D0D15] relative flex flex-col">


            {/* Terminal View */}
            <div className="flex-1 min-h-0 relative">
                <TerminalView
                    hostname={server.hostname}
                    ipAddress={server.ipAddress}
                    isFullScreen={true}
                    headerAction={
                        <div className="flex items-center gap-4">
                            <Link href={`/servers/${serverId}`}>
                                <Button variant="ghost" className="text-muted-foreground hover:text-white hover:bg-white/10">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Server
                                </Button>
                            </Link>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
