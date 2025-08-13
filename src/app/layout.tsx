'use client'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 p-6 mt-16 md:ml-48">{children}</main>
      </div>
    </div>
  )
}
