
import { cn } from "@/lib/utils"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { useState } from "react"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className={cn("flex-1 flex flex-col transition-all", sidebarOpen ? "lg:ml-64" : "ml-0")}>
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}