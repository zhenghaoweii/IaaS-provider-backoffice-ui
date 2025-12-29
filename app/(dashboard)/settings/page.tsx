"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Shield, Bell, LogOut, Save, Smartphone, Key, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

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

export default function SettingsPage() {
    const [loading, setLoading] = useState(false)

    const handleSave = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1000)
    }

    return (
        <motion.div
            className="space-y-6 max-w-5xl mx-auto pb-20"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Header */}
            <motion.div variants={item} className="space-y-1">
                <h1 className="text-3xl font-bold text-foreground text-glow">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </motion.div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-secondary/50 border border-white/5 p-1 h-auto w-full md:w-auto flex-col md:flex-row gap-1">
                    <TabsTrigger value="profile" className="px-6 py-2 md:w-40 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="security" className="px-6 py-2 md:w-40 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                        <Shield className="w-4 h-4 mr-2" />
                        Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="px-6 py-2 md:w-40 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                    </TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6 outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                        <CardHeader>
                            <CardTitle>Public Profile</CardTitle>
                            <CardDescription>This is how others will see you on the site.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex flex-col items-center gap-4">
                                    <Avatar className="w-24 h-24 border-2 border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                                        <AvatarImage src="/placeholder-avatar.jpg" />
                                        <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">AD</AvatarFallback>
                                    </Avatar>
                                    <Button variant="outline" size="sm" className="w-full">Change Avatar</Button>
                                </div>

                                <div className="flex-1 space-y-4 w-full">
                                    <div className="grid gap-2">
                                        <Label htmlFor="display-name">Display Name</Label>
                                        <Input id="display-name" defaultValue="Admin User" className="bg-secondary/50 border-white/10" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="email" defaultValue="admin@cloud-ops.internal" className="pl-9 bg-secondary/50 border-white/10" />
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <textarea
                                            className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-secondary/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Tell us about yourself"
                                            defaultValue="Senior DevOps Engineer managing the core infrastructure."
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-white/5 py-4 flex justify-end">
                            <Button onClick={handleSave} disabled={loading} className="w-32">
                                {loading ? "Saving..." : <><Save className="mr-2 h-4 w-4" /> Save Changes</>}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6 outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-6">
                        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>Change your password to keep your account secure.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="current-password">Current Password</Label>
                                    <Input id="current-password" type="password" className="bg-secondary/50 border-white/10" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="new-password">New Password</Label>
                                    <Input id="new-password" type="password" className="bg-secondary/50 border-white/10" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" type="password" className="bg-secondary/50 border-white/10" />
                                </div>
                            </CardContent>
                            <CardFooter className="border-t border-white/5 py-4 flex justify-end">
                                <Button>Change Password</Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-primary" />
                                    Two-Factor Authentication
                                </CardTitle>
                                <CardDescription>Add an extra layer of security to your account.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-white/5">
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-foreground">Authenticator App</div>
                                        <div className="text-sm text-muted-foreground">Use an app like Google Authenticator or Authy</div>
                                    </div>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-white/5">
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-foreground">Security Keys</div>
                                        <div className="text-sm text-muted-foreground">Use a physical security key (e.g. YubiKey)</div>
                                    </div>
                                    <Switch disabled />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end pt-4">
                            <Button variant="destructive" className="w-full md:w-auto">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log Out All Sessions
                            </Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Notifications Tab (Mock) */}
                <TabsContent value="notifications" className="space-y-6 outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Card className="bg-card/40 backdrop-blur-sm border-white/5">
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Choose what you want to be notified about.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium leading-none">Server Alerts</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="critical-alert" className="flex flex-col gap-1">
                                            <span>Critical Issues</span>
                                            <span className="font-normal text-muted-foreground text-xs">When a server goes down or resource usage &gt; 90%</span>
                                        </Label>
                                        <Switch id="critical-alert" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="warning-alert" className="flex flex-col gap-1">
                                            <span>Warnings</span>
                                            <span className="font-normal text-muted-foreground text-xs">When resource usage &gt; 75%</span>
                                        </Label>
                                        <Switch id="warning-alert" defaultChecked />
                                    </div>
                                </div>
                            </div>
                            <Separator className="bg-white/5" />
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium leading-none">Security</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="new-login" className="flex flex-col gap-1">
                                            <span>New Login Alerts</span>
                                            <span className="font-normal text-muted-foreground text-xs">When your account is accessed from a new IP</span>
                                        </Label>
                                        <Switch id="new-login" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </motion.div>
    )
}
