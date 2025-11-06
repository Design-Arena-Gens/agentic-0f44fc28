import { motion } from "framer-motion";
import { Flame, TrendingUp, Waves } from "lucide-react";

const tokens = [
  {
    symbol: "ARB",
    name: "Arbitrum",
    price: "$1.88",
    change: "+12.4%",
    volume: "$420M",
    score: "A",
    trend: "Breakout",
    icon: TrendingUp
  },
  {
    symbol: "INJ",
    name: "Injective",
    price: "$28.12",
    change: "+7.8%",
    volume: "$108M",
    score: "A-",
    trend: "Momentum",
    icon: Flame
  },
  {
    symbol: "ENA",
    name: "Ethena",
    price: "$1.36",
    change: "+19.6%",
    volume: "$510M",
    score: "A+",
    trend: "Narrative Surge",
    icon: Waves
  }
];

export function TokenGrid() {
  return (
    <section id="markets" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-500/15 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-100/70">Market Depth</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white">
              AI-surfaced narratives, sectors, and breakout velocity.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-white/60">
            AetherIQ continuously maps liquidity rotation, capital efficiency, and social velocity. Each score fuses 112 signals to spotlight where asymmetric opportunity is building next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tokens.map((token, index) => (
            <motion.div
              key={token.symbol}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-surface"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/0 via-brand-400/10 to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold text-white">{token.symbol}</p>
                  <p className="text-sm text-white/60">{token.name}</p>
                </div>
                <token.icon className="h-7 w-7 text-brand-200" />
              </div>
              <div className="relative mt-8 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-semibold text-white">{token.price}</p>
                  <p className="mt-2 text-sm font-medium text-emerald-400">{token.change}</p>
                </div>
                <div className="text-right text-sm text-white/50">
                  <p>Volume</p>
                  <p className="text-white/80">{token.volume}</p>
                </div>
              </div>
              <div className="relative mt-8 rounded-2xl border border-white/5 bg-black/50 p-4 text-sm text-white/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.45em] text-white/40">Alpha Score</span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-400">{token.score}</span>
                </div>
                <p className="mt-3 text-sm text-white">
                  {token.trend}: liquidity inflows align with on-chain CEX delta and derivative skew.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
