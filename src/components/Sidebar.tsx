'use client'
import Link from 'next/link'
import clsx from 'clsx'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={clsx(
      "fixed top-16 left-0 h-full w-48 bg-gradient-to-b from-blue-50 to-gray-100 p-4 shadow-md transform transition-transform duration-300 z-40",
      {
        "-translate-x-full md:translate-x-0": !isOpen,
        "translate-x-0": isOpen,
      }
    )}>
      <ul className="space-y-4 text-blue-900 font-medium">
        <li><Link href="/create">Create</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </aside>
  )
}
