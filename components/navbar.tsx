import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "AI Copilot", href: "#ai" },
  { label: "Markets", href: "#markets" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-lg" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="#" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/80 via-brand-500 to-indigo-500 shadow-neon">
            <span className="text-2xl font-semibold">Λ</span>
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">AetherIQ</p>
            <p className="text-xs font-medium text-white/50">AI Crypto Intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition hover:text-white"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-brand-400 via-white to-brand-400 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className={cn(
              "rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/80 transition",
              "hover:border-white/30 hover:text-white"
            )}
          >
            Log in
          </Link>
          <Link
            href="#"
            className={cn(
              "rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-primary transition",
              "hover:shadow-neon"
            )}
          >
            Launch App
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuIcon className="h-5 w-5" />
        </button>

        <div
          className={cn(
            "absolute right-6 top-[4.5rem] min-w-[240px] origin-top rounded-2xl border border-white/10 bg-black/70 p-6 text-sm font-medium text-white/80 shadow-surface backdrop-blur-xl transition-all duration-300 md:hidden",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none -translate-y-5 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#"
              className="rounded-full border border-white/10 px-4 py-2 text-center text-white/80"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500 px-4 py-2 text-center font-semibold text-white shadow-primary"
            >
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
