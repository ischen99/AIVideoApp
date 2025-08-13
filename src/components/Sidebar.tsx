"use client";
import { VideoCameraIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={[
        "fixed top-16 left-0 z-50 h-[calc(100vh-64px)] w-64",
        "bg-gradient-to-b from-sky-300 to-gray-200 text-slate-800 shadow-lg",
        "border-r border-white/30",
        "transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div className="p-4 space-y-2 text-sm">
        <a href="/create"   className="flex items-center gap-2 hover:bg-white/30 p-2 rounded">
          <VideoCameraIcon className="w-5 h-5" /> Create
        </a>
        <a href="/account"  className="flex items-center gap-2 hover:bg-white/30 p-2 rounded">
          Account
        </a>
        <a href="/profile"  className="flex items-center gap-2 hover:bg-white/30 p-2 rounded">
          <UserCircleIcon className="w-5 h-5" /> Your Profile
        </a>
      </div>
    </aside>
  );
}

