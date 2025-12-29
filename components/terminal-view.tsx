"use client"

import * as React from "react"
import { Terminal as TerminalIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTerminal } from "@/hooks/use-terminal"

interface TerminalViewProps {
    hostname: string
    ipAddress: string
    className?: string
    isFullScreen?: boolean
    headerAction?: React.ReactNode
}

export function TerminalView({ hostname, ipAddress, className, isFullScreen = false, headerAction }: TerminalViewProps) {
    const { history, input, setInput, isConnected, handleCommand, scrollRef } = useTerminal(hostname, ipAddress)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Focus input on click anywhere in terminal
    const handleTerminalClick = () => {
        if (isConnected) {
            inputRef.current?.focus()
        }
    }

    React.useEffect(() => {
        if (isConnected) {
            inputRef.current?.focus()
        }
    }, [isConnected])

    return (
        <div
            className={cn(
                "flex flex-col bg-[#0D0D15] font-mono",
                isFullScreen ? "w-full h-full" : "h-full w-full rounded-xl overflow-hidden border border-white/10",
                className
            )}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 select-none shrink-0 min-h-[48px]">
                <div className="flex items-center gap-4">
                    {headerAction}
                    <div className="flex items-center gap-2">
                        <TerminalIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">root@{hostname}:~</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs text-primary/50 flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
                        {isConnected ? "SSH CONNECTED" : "CONNECTING..."}
                    </span>
                </div>
            </div>

            {/* Terminal Body */}
            <div
                className="flex-1 overflow-auto p-4 text-sm"
                onClick={handleTerminalClick}
                ref={scrollRef}
            >
                <div className="space-y-1">
                    {history.map((line, i) => (
                        <div key={i} className="break-all whitespace-pre-wrap">
                            {line.type === 'command' ? (
                                <div className="flex gap-2">
                                    <span className="text-green-500 font-bold shrink-0">root@{hostname}:~#</span>
                                    <span className="text-foreground">{line.content}</span>
                                </div>
                            ) : line.type === 'system' ? (
                                <span className="text-primary/70">{line.content}</span>
                            ) : line.type === 'error' ? (
                                <span className="text-red-400">{line.content}</span>
                            ) : (
                                <span className="text-muted-foreground/90">{line.content}</span>
                            )}
                        </div>
                    ))}

                    {isConnected && (
                        <div className="flex gap-2">
                            <span className="text-green-500 font-bold shrink-0">root@{hostname}:~#</span>
                            <div className="relative flex-1">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleCommand(input)
                                        }
                                    }}
                                    className="w-full bg-transparent border-none outline-none text-foreground p-0 m-0 cursor-text font-inherit"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
