"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LogoutButton } from "@/components/logout-button"
import { LayoutDashboard, Server, Database, HardDrive, Settings, LogOut, Terminal, Activity, Globe, Save } from "lucide-react"

const navigationGroups = [
  {
    title: "Platform",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Datacenters", href: "/datacenters", icon: Database },
      { name: "Nodes", href: "/nodes", icon: HardDrive },
      { name: "Servers", href: "/servers", icon: Server },
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Terminal Hub", href: "/terminals", icon: Terminal },
      { name: "Storage", href: "/storage", icon: Save, disabled: true },
      { name: "Network", href: "/network", icon: Globe, disabled: true },
    ]
  },
  {
    title: "System",
    items: [
      { name: "Activity", href: "/activity", icon: Activity },
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col border-r border-border bg-sidebar/50 backdrop-blur-xl relative z-10 transition-all duration-300">
      <div className="flex h-16 items-center border-b border-border px-6 group cursor-pointer shrink-0">
        <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/50 glow-cyan-sm">
            <Server className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-foreground font-mono">CLOUDOPS</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Pro</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {navigationGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 font-mono select-none">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href)
                const LinkComponent = item.disabled ? 'div' : Link

                return (
                  <LinkComponent
                    key={item.name}
                    href={item.disabled ? '#' : item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 font-mono tracking-wide text-xs overflow-hidden",
                      item.disabled && "opacity-50 cursor-not-allowed",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-primary glow-cyan-sm opacity-100 z-0" />
                    )}

                    <item.icon className={cn(
                      "relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110",
                      isActive && "text-primary-foreground"
                    )} />
                    <span className="relative z-10">{item.name}</span>

                    {isActive && (
                      <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white animate-pulse z-10" />
                    )}
                  </LinkComponent>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-4 shrink-0 flex items-center gap-2">
        <Link href="/settings" className="flex-1 min-w-0">
          <div className="group flex items-center gap-3 rounded-md bg-secondary/50 hover:bg-secondary px-3 py-3 border border-border/50 hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground font-mono glow-cyan-sm ring-2 ring-background group-hover:ring-primary/50 transition-all">
              A
            </div>
            <div className="flex-1 transition-opacity min-w-0 overflow-hidden">
              <p className="text-sm font-semibold text-foreground font-mono group-hover:text-primary transition-colors truncate">ADMIN</p>
              <p className="text-[10px] text-muted-foreground font-mono truncate">SYSTEM_ACCESS</p>
            </div>
            <Settings className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <LogoutButton variant="ghost" className="h-full aspect-square bg-secondary/30 hover:bg-destructive/10 hover:text-destructive border border-transparent hover:border-destructive/20" />
      </div>
    </div>
  )
}
