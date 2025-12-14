import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Server, ShieldCheck, Activity } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background p-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse delay-700" />
      </div>

      <Card className="w-full max-w-md relative z-10 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/80">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full glow-cyan-sm">
              <Server className="w-10 h-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access the console
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="admin@cloudprovider.com" className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" className="bg-background/50" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember test device
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full font-bold glow-cyan transition-all hover:scale-[1.02]" size="lg">
            Sign In
          </Button>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <ShieldCheck className="w-3 h-3 mr-1" />
              Secure Login
            </div>
            <div className="flex items-center">
              <Activity className="w-3 h-3 mr-1" />
              256-bit Encryption
            </div>
          </div>
        </CardFooter>
      </Card>
      
      <div className="absolute bottom-4 text-center w-full text-xs text-muted-foreground">
        © 2024 Cloud Provider Inc. All rights reserved.
      </div>
    </div>
  )
}
