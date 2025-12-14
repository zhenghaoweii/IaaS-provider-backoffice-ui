"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Server, Database, Activity, HardDrive } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Datacenters", href: "/datacenters", icon: Database },
  { name: "Nodes", href: "/nodes", icon: HardDrive },
  { name: "Servers", href: "/servers", icon: Server },
  { name: "Activity", href: "/activity", icon: Activity },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col border-r border-border bg-sidebar relative z-10">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow-cyan-sm">
            <Server className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-foreground font-mono">CLOUDOPS</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Pro</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all font-mono uppercase tracking-wide text-xs",
                isActive
                  ? "bg-primary text-primary-foreground glow-cyan-sm shadow-lg"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-l-2 hover:border-primary",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-md bg-secondary px-3 py-3 border border-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground font-mono glow-cyan-sm">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground font-mono">ADMIN</p>
            <p className="text-[10px] text-muted-foreground font-mono">SYSTEM_ACCESS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
