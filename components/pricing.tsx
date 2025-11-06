import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Quant Teams",
    price: "$1,490",
    period: "/month",
    description: "Launch advanced analytics for lean teams and fast-moving funds.",
    features: [
      "AetherGPT Copilot with 30M tokens",
      "Live market matrix & signal reactor",
      "Workflow automations & alerts",
      "Exchange & wallet integrations",
      "SOC II aligned observability"
    ],
    highlighted: false
  },
  {
    name: "Institutional",
    price: "$4,900",
    period: "/month",
    description: "Full-stack intelligence for institutional desks and digital asset banks.",
    features: [
      "Unlimited AI playbooks & agents",
      "Custom execution & latency routing",
      "Dedicated quant success partner",
      "24/7 premium support",
      "Governance & compliance module"
    ],
    highlighted: true
  },
  {
    name: "Syndicate",
    price: "Talk to us",
    period: "",
    description: "Tailored deployments for consortiums, sovereign funds, and exchanges.",
    features: [
      "On-premise or hybrid deployment",
      "Extended data lake & archival nodes",
      "Custom AI agent fleet",
      "White-labeled intelligence hub",
      "Strategic innovation workshops"
    ],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-100/70">Pricing</span>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold text-white md:text-5xl">
            Engineered for desks who refuse to settle for delayed signals and brittle analytics.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60">
            Deploy the intelligence layer that aligns with your mission—from agile quant pods to multi-market institutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className={cn(
                "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 shadow-surface",
                tier.highlighted && "border-brand-400/60 bg-gradient-to-br from-brand-500/15 via-black/40 to-indigo-500/20"
              )}
            >
              {tier.highlighted && (
                <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-100">
                  Most Popular
                </div>
              )}
              <div className="relative space-y-5">
                <div className="text-xs uppercase tracking-[0.35em] text-white/40">{tier.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white">{tier.price}</span>
                  {tier.period && <span className="text-sm text-white/40">{tier.period}</span>}
                </div>
                <p className="text-sm text-white/60">{tier.description}</p>
              </div>
              <ul className="relative mt-6 space-y-3 text-sm text-white/60">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={cn(
                  "relative mt-8 flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition",
                  tier.highlighted
                    ? "bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500 text-white shadow-primary hover:shadow-neon"
                    : "hover:border-brand-400/40 hover:text-brand-100"
                )}
              >
                {tier.highlighted ? "Start Deployment" : "Talk With Us"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
