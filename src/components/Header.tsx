"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";

type HeaderProps = {
  onToggle: () => void;
};

export default function Header({ onToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16
      bg-gradient-to-r from-sky-400 to-gray-200 text-white shadow-md">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label="Toggle sidebar"
            className="p-2 rounded hover:bg-white/20"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <span className="text-lg font-bold">AI Video</span>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="/features" className="hover:text-sky-900">Features</a>
          <a href="/pricing"  className="hover:text-sky-900">Pricing</a>
          <a href="/login"    className="hover:text-sky-900">Login</a>
        </nav>
      </div>
    </header>
  );
}
