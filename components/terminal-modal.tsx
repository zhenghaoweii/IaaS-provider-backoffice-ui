"use client"

import * as React from "react"
import { X, Minus, Square, Terminal as TerminalIcon } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TerminalModalProps {
    isOpen: boolean
    onClose: () => void
    hostname: string
    ipAddress: string
}

type TerminalLine = {
    type: "command" | "output" | "system" | "error"
    content: string
    timestamp?: number
}

// Hook for terminal logic - Separated for future WebSocket integration
function useTerminal(hostname: string, ipAddress: string, isOpen: boolean) {
    const [history, setHistory] = React.useState<TerminalLine[]>([])
    const [input, setInput] = React.useState("")
    const [isConnected, setIsConnected] = React.useState(false)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    // Reset and start connection sequence on open
    React.useEffect(() => {
        if (isOpen) {
            setHistory([])
            setInput("")
            setIsConnected(false)
            startConnectionSequence()
        }
    }, [isOpen, hostname, ipAddress])

    // Auto-scroll to bottom
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history])

    const startConnectionSequence = async () => {
        const addLine = (content: string, type: TerminalLine["type"] = "system", delay = 0) => {
            return new Promise<void>(resolve => {
                setTimeout(() => {
                    setHistory(prev => [...prev, { type, content, timestamp: Date.now() }])
                    resolve()
                }, delay)
            })
        }

        await addLine(`Connecting to ${hostname} (${ipAddress})...`, "system", 500)
        await addLine(`Verifying host key for ${ipAddress}...`, "system", 800)
        await addLine("Host key verification passed.", "system", 600)
        await addLine("Authenticating...", "system", 800)
        await addLine(`Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-31-generic x86_64)`, "output", 600)
        await addLine("", "output")
        await addLine(" * Documentation:  https://help.ubuntu.com", "output", 100)
        await addLine(" * Management:     https://landscape.canonical.com", "output", 100)
        await addLine(" * Support:        https://ubuntu.com/pro", "output", 100)
        await addLine("", "output")
        await addLine(`Last login: ${new Date().toUTCString()} from 10.0.8.2`, "output", 200)
        setIsConnected(true)
    }

    const handleCommand = (cmd: string) => {
        if (!cmd.trim()) {
            setHistory(prev => [...prev, { type: "command", content: "" }])
            return
        }

        const newHistory = [...history, { type: "command" as const, content: cmd }]
        const command = cmd.toLowerCase().trim()

        let response: TerminalLine[] = []

        switch (command) {
            case "help":
                response = [
                    { type: "output", content: "Available commands:" },
                    { type: "output", content: "  help      Show this help message" },
                    { type: "output", content: "  clear     Clear terminal output" },
                    { type: "output", content: "  list      List directory contents (ls)" },
                    { type: "output", content: "  top       Display system processes" },
                    { type: "output", content: "  neofetch  Show system info" },
                    { type: "output", content: "  exit      Close terminal session" },
                ]
                break
            case "clear":
                setHistory([])
                setInput("")
                return
            case "ls":
            case "list":
                response = [
                    { type: "output", content: "drwxr-xr-x  4 root root 4096 Dec 14 10:00 ." },
                    { type: "output", content: "drwxr-xr-x 20 root root 4096 Dec 14 09:00 .." },
                    { type: "output", content: "-rw-r--r--  1 root root  220 Dec 14 09:00 .bash_logout" },
                    { type: "output", content: "-rw-r--r--  1 root root 3771 Dec 14 09:00 .bashrc" },
                    { type: "output", content: "-rw-r--r--  1 root root  807 Dec 14 09:00 .profile" },
                    { type: "output", content: "-rw-r--r--  1 root root    0 Dec 14 10:00 docker-compose.yml" },
                ]
                break
            case "top":
                response = [
                    { type: "output", content: "top - 16:45:22 up 14 days,  2:15,  1 user,  load average: 0.05, 0.02, 0.03" },
                    { type: "output", content: "Tasks: 184 total,   1 running, 183 sleeping,   0 stopped,   0 zombie" },
                    { type: "output", content: "%Cpu(s):  0.5 us,  0.2 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st" },
                    { type: "output", content: "MiB Mem :   7952.0 total,   4215.3 free,   1254.2 used,   2482.5 buff/cache" },
                    { type: "output", content: "MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   6345.8 avail Mem" },
                    { type: "output", content: "" },
                    { type: "output", content: "  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND" },
                    { type: "output", content: "    1 root      20   0  168432  12432   8432 S   0.0   0.2   0:04.22 systemd" },
                    { type: "output", content: "  842 root      20   0 1345532  84432  32432 S   1.2   1.1   5:42.12 containerd" },
                ]
                break
            case "neofetch":
                response = [
                    { type: "output", content: `            .-/+oossssoo+/-.               root@${hostname}` },
                    { type: "output", content: "        `:+ssssssssssssssssss+:`           -----------------" },
                    { type: "output", content: "      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 24.04.1 LTS x86_64" },
                    { type: "output", content: "    .ossssssssssssssssssdMMMNysssso.       Host: KVM/QEMU (Standard PC)" },
                    { type: "output", content: "   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 6.8.0-31-generic" },
                    { type: "output", content: "  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 14 days, 2 hours, 15 mins" },
                    { type: "output", content: " /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 1243 (dpkg), 6 (snap)" },
                    { type: "output", content: ".ssssssssdMMMNhssssssssssNMMMdssssssss.    Shell: bash 5.1.16" },
                    { type: "output", content: "+sssshhhyNMMNyssssssssssswMMMdssssssss+    CPU: AMD EPYC 7763 (4) @ 2.445GHz" },
                    { type: "output", content: "osyhhhhhhdMMhssssssssssssNMMMNhssssssso    Memory: 1254MiB / 7952MiB" },
                ]
                break
            case "exit":
                // Returning a specific signal could handle close, but we can't call onClose from here directly if we want clean separation.
                // For now we'll just output a message.
                // In a real app the parent would handle 'exit' command detection or listen to a state.
                response = [{ type: "system", content: "Connection to host closed." }]
                break
            default:
                response = [{ type: "error", content: `bash: ${command}: command not found` }]
        }

        setHistory([...newHistory, ...response])
        setInput("")
    }

    return {
        history,
        input,
        setInput,
        isConnected,
        handleCommand,
        scrollRef
    }

}

export function TerminalModal({ isOpen, onClose, hostname, ipAddress }: TerminalModalProps) {
    const { history, input, setInput, isConnected, handleCommand, scrollRef } = useTerminal(hostname, ipAddress, isOpen)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Focus input on click anywhere in terminal
    const handleTerminalClick = () => {
        if (isConnected) {
            inputRef.current?.focus()
        }
    }

    React.useEffect(() => {
        if (isConnected && isOpen) {
            inputRef.current?.focus()
        }
    }, [isConnected, isOpen])

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-[80vw] w-[900px] p-0 gap-0 bg-transparent border-none shadow-none text-transparent">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-[600px] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/10 glass-panel ring-1 ring-white/5 bg-[#0D0D15]/95 backdrop-blur-xl"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 select-none">
                        <div className="flex items-center gap-2">
                            <TerminalIcon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-mono text-muted-foreground">root@{hostname}:~</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-primary/50 flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
                                {isConnected ? "SSH CONNECTED" : "CONNECTING..."}
                            </span>
                            <div className="flex items-center gap-2">
                                <Minus className="w-4 h-4 text-white/20 hover:text-white cursor-pointer transition-colors" />
                                <Square className="w-3 h-3 text-white/20 hover:text-white cursor-pointer transition-colors" />
                                <X className="w-4 h-4 text-white/20 hover:text-destructive cursor-pointer transition-colors" onClick={onClose} />
                            </div>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        className="flex-1 overflow-auto p-4 font-mono text-sm"
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
                                            className="w-full bg-transparent border-none outline-none text-foreground p-0 m-0 cursor-text"
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
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
