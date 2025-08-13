"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Desktop (>= md) standardmäßig offen
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setOpen(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  return (
    <>
      <Header onToggle={() => setOpen(v => !v)} />
      <Sidebar open={open} />

      {/* Backdrop nur auf Mobile, schließt beim Klick */}
      {open && (
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-16 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Content – bleibt stabil, springt nicht */}
      <div className="pt-16 min-h-screen bg-gray-50">
        <main className="px-6 py-6">{children}</main>
      </div>
    </>
  );
}

