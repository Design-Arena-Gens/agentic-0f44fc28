import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Command, Cpu, LineChart, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const aiPrompts = [
  {
    id: "01",
    label: "Proactive Advisory",
    prompt: "Where will BTC’s macro liquidity inflection likely occur over the next 72 hours?",
    response:
      "AetherGPT projects two volatility clusters anchored to Friday’s macro data window. Weighted probability suggests a positive liquidity shock with 68% confidence; execute laddered entries at $62.4K, $61.9K."
  },
  {
    id: "02",
    label: "Sentiment Watch",
    prompt: "Track SOL’s social acceleration and whale behaviour.",
    response:
      "Social sentiment turned net positive (+21 bps) while top 40 wallets accumulated 1.8M SOL. Expect a momentum continuation window within 6 hours."
  },
  {
    id: "03",
    label: "Risk Firewall",
    prompt: "Notify me if ETH funding flips extreme positive.",
    response:
      "Funding ≥ 0.08 detected on Binance & Bybit. Deploying partial hedge via options calendar spread and trimming per risk profile Sigma-3."
  }
];

const aiCapabilities = [
  {
    title: "Multi-Modal Ingestion",
    description: "On-chain flows, derivatives, stablecoin velocity, news, and social sentiment unified into a living knowledge graph.",
    icon: Cpu
  },
  {
    title: "Autonomous Playbooks",
    description: "Compose and execute multi-layered trade routines with guardrails, execution venues, and risk parameters in one prompt.",
    icon: Command
  },
  {
    title: "Institutional Governance",
    description: "Audit trails, risk approvals, and compliance snapshots generated instantly for stakeholders.",
    icon: Shield
  }
];

export function AiConsole() {
  return (
    <section id="ai" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-500/20 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-brand-100/70">
            <Bot className="h-4 w-4" />
            Meet your AI Supernode
          </div>
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            AetherGPT orchestrates markets with self-optimizing intelligence.
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Every query becomes an executable strategy. Feed it objectives, constraints, or even raw curiosity—AetherGPT fuses institutional analytics with conversational agility to deliver answers, projections, or trade-ready playbooks instantly.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {aiCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-500 hover:border-brand-400/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/10 to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
                <capability.icon className="relative mb-4 h-9 w-9 text-brand-200" />
                <h3 className="relative text-lg font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="relative mt-2 text-sm text-white/60">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-28 right-10 h-60 w-60 rounded-full bg-brand-400/30 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/70 shadow-surface backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-indigo-500">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AetherGPT Copilot</p>
                  <p className="text-xs text-white/50">Latency avg. 1.2s</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                <LineChart className="h-4 w-4 text-brand-200" />
                <span>Strategy Mode</span>
              </div>
            </div>
            <div className="space-y-6 px-8 py-8">
              {aiPrompts.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/10 to-indigo-500/10 opacity-0 transition hover:opacity-100" />
                  <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/40">
                    <span>{item.label}</span>
                    <span>{item.id}</span>
                  </div>
                  <p className="relative mt-4 text-sm font-medium text-white/80">
                    {item.prompt}
                  </p>
                  <div className="relative mt-4 rounded-2xl bg-black/60 p-4 text-sm text-white/60">
                    {item.response}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-8 py-6 text-sm text-white/60">
              <span>Adaptive alpha feed refreshed every 2 minutes.</span>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition",
                  "hover:border-brand-400 hover:text-brand-200"
                )}
              >
                Open Console
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
