"use client"

import { Bell, Search, Terminal, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/components/sidebar-context"

export function Header() {
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6 relative z-10">
      <div className="flex flex-1 items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 hover:bg-secondary"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Terminal className="h-3 w-3 text-primary" />
          <span className="hidden md:inline">SYSTEM_READY</span>
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
          <Input
            type="search"
            placeholder="Search infrastructure..."
            className="pl-9 bg-secondary border-border focus:border-primary focus:ring-primary/20 font-mono text-xs"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary glow-cyan-sm" />
        </Button>
      </div>
    </header>
  )
}
