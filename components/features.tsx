import { motion } from "framer-motion";
import { Activity, BarChart4, BrainCircuit, CircleDotDashed, Cog, GaugeCircle } from "lucide-react";

const features = [
  {
    title: "Signal Reactor",
    description: "Predictive models fuse 5 billion data points daily, recalibrating in real time for unrivaled accuracy.",
    icon: BrainCircuit,
    metrics: [{ label: "Alpha Lift", value: "32%" }, { label: "False Positives", value: "↓73%" }]
  },
  {
    title: "Execution Orchestrator",
    description: "Deploy multi-venue strategies with latency-aware routing and smart order slicing built-in.",
    icon: Activity,
    metrics: [{ label: "Latency", value: "14ms" }, { label: "Slippage", value: "↓41%" }]
  },
  {
    title: "Risk Sentinel",
    description: "Automated guardrails and stress-tested playbooks ensure every move aligns with governance.",
    icon: GaugeCircle,
    metrics: [{ label: "VaR Alerts", value: "Real-time" }, { label: "Coverage", value: "99.2%" }]
  },
  {
    title: "Narrative Heatmaps",
    description: "Detect emerging themes across social, developer, and venture ecosystems before they trend.",
    icon: BarChart4,
    metrics: [{ label: "Coverage", value: "63 Chains" }, { label: "Update Cycle", value: "3m" }]
  },
  {
    title: "AI Research Pod",
    description: "Spin up autonomous agents to scout tokenomics, governance, and counterparty health.",
    icon: Cog,
    metrics: [{ label: "Reports", value: "Instant" }, { label: "Sources", value: "117+" }]
  },
  {
    title: "Trust by Design",
    description: "Enterprise-grade encryption, SOC II compliance, and audit-ready transparency by default.",
    icon: CircleDotDashed,
    metrics: [{ label: "Encryption", value: "E2E" }, { label: "Uptime", value: "99.99%" }]
  }
];

export function Features() {
  return (
    <section id="platform" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-100/70">Platform Stack</span>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold text-white md:text-5xl">
            Everything you need to move faster than the market—engineered into a single intelligence layer.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60">
            Modular infrastructure powers your desk with trading, research, and compliance superpowers. Every surface
            is orchestrated by AetherIQ to keep teams focused on strategy, not spreadsheets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/0 via-brand-400/10 to-indigo-400/10 opacity-0 transition group-hover:opacity-100" />
              <feature.icon className="relative mb-6 h-10 w-10 text-brand-200" />
              <h3 className="relative text-xl font-semibold text-white">{feature.title}</h3>
              <p className="relative mt-4 text-sm text-white/60">
                {feature.description}
              </p>
              <div className="relative mt-6 flex items-center gap-4 text-sm text-white/60">
                {feature.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em]"
                  >
                    <span className="text-white/40">{metric.label} · </span>
                    <span className="text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
