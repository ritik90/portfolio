"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-[#080b12]/75 px-4 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-sm font-semibold text-white">
            RS
          </span>
          <span className="text-sm font-semibold text-white">Ritik Saxena</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-white/58 transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={profile.resume}
            target="_blank"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white/75 transition hover:border-cyan/35 hover:text-white"
          >
            Resume
          </Link>

          <Link
            href="#contact"
            className="rounded-xl bg-cyan px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
          >
            Contact
          </Link>
        </div>

        <button
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]/95 backdrop-blur-xl transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={profile.resume}
            target="_blank"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white"
          >
            Resume
          </Link>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm text-cyan hover:bg-white/[0.05]"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.header>
  );
}