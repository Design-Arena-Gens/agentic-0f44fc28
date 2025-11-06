import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const highlightCards = [
  {
    title: "Hyper-Accurate Signals",
    description: "Dynamic on-chain + market sentiment fusion delivers 92% precision swing trade signals.",
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "Neural Narrative Insights",
    description: "AetherGPT distills billions of data points into human-grade narratives instantly.",
    icon: <Sparkles className="h-5 w-5" />
  }
];

const heroTokens = [
  { symbol: "BTC", name: "Bitcoin", price: "$65,342", change: "+3.4%", chart: "/charts/btc.svg" },
  { symbol: "ETH", name: "Ethereum", price: "$3,421", change: "+1.8%", chart: "/charts/eth.svg" },
  { symbol: "SOL", name: "Solana", price: "$168.40", change: "+6.2%", chart: "/charts/sol.svg" }
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-32 pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] hero-gradient blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
            <span className="flex items-center gap-2 text-white/70">
              <Sparkles className="h-4 w-4" />
              Introducing AetherGPT
            </span>
          </div>
          <h1 className="max-w-3xl bg-gradient-to-br from-white via-white to-brand-200 bg-clip-text text-5xl font-medium tracking-tight text-transparent md:text-6xl">
            Decoding Crypto Chaos with an Autonomous AI Quant Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Forecast volatility spikes, surface hidden alpha, and orchestrate automated trade strategies.
            AetherIQ merges deep neural insights with institutional-grade analytics—designed for visionary crypto desks.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className={cn(
                "flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-indigo-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-primary transition",
                "hover:shadow-neon"
              )}
            >
              Launch Intelligence Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#ai"
              className="flex items-center justify-center gap-3 rounded-full border border-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Experience the AI Copilot
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative w-full"
        >
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-black/60 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-black/60 shadow-surface backdrop-blur-2xl">
            <div className="flex flex-col gap-6 px-10 pb-10 pt-12 md:px-16 md:pt-14">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.36em] text-brand-200/80">Live Market Matrix</p>
                  <p className="mt-2 text-3xl font-medium text-white">
                    AI-Synced Top Movers
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-white/60">
                    Neural data streams active
                  </span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {heroTokens.map((token, index) => (
                  <motion.div
                    key={token.symbol}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-brand-400/40"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.12, duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-400/0 via-brand-400/5 to-brand-500/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <span className="text-base font-semibold text-white">{token.symbol}</span>
                          <span className="text-xs uppercase tracking-widest text-white/50">{token.name}</span>
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-white">{token.price}</p>
                        <p className="mt-1 text-sm font-medium text-emerald-400">{token.change}</p>
                      </div>
                      <div className="relative flex h-20 w-24 items-center justify-center overflow-hidden rounded-xl bg-black/40">
                        <Image
                          src={token.chart}
                          alt={`${token.name} chart`}
                          fill
                          className="object-cover object-right"
                        />
                      </div>
                    </div>
                    <div className="relative mt-6 flex items-center justify-between text-xs text-white/50">
                      <span>Risk Score</span>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-16 overflow-hidden rounded-full bg-white/10">
                          <span className="block h-full bg-gradient-to-r from-emerald-400 via-brand-400 to-indigo-500" />
                        </span>
                        <span>17</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
