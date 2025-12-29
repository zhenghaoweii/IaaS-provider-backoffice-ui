"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LogoutButton({ className, variant = "ghost", size = "icon", showLabel = false }: { className?: string, variant?: "ghost" | "destructive" | "default" | "outline" | "secondary" | "link", size?: "default" | "sm" | "lg" | "icon", showLabel?: boolean }) {
    const router = useRouter()

    const handleLogout = () => {
        // In a real app, this would clear tokens/cookies
        router.push("/login")
    }

    return (
        <Button
            variant={variant}
            size={size}
            className={className}
            onClick={handleLogout}
            title="Log Out"
        >
            <LogOut className={showLabel ? "mr-2 h-4 w-4" : "h-4 w-4"} />
            {showLabel && "Log Out"}
        </Button>
    )
}
