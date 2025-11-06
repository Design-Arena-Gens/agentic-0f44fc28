"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AiConsole } from "@/components/ai-console";
import { TokenGrid } from "@/components/token-grid";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const stats = [
  { label: "Signals Deployed", value: "18,420+" },
  { label: "Capital Protected", value: "$12.7B" },
  { label: "Latency Advantage", value: "45ms" },
  { label: "Desk Uptime", value: "99.99%" }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />

      <section className="relative -mt-20 pb-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-500/20 via-transparent to-transparent blur-3xl" />
        <div className="relative mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-surface"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/10 to-indigo-500/10 opacity-0 transition-[opacity] duration-500 hover:opacity-100" />
              <p className="relative text-3xl font-semibold text-white">{stat.value}</p>
              <p className="relative mt-2 text-xs uppercase tracking-[0.35em] text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Features />
      <AiConsole />
      <TokenGrid />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
