import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AetherIQ re-invented how our desk operates. From narrative discovery to execution, latency is gone—our alpha capture window doubled.",
    name: "Sophia Leclerc",
    role: "Chief Investment Officer, Helix Digital",
    avatar: "/avatars/avatar-1.svg"
  },
  {
    quote:
      "The AI copilot anticipates volatility before our analysts even surface the alert. It changes our relationship with risk entirely.",
    name: "Marcus Finlay",
    role: "Head of Trading, Polaris Labs",
    avatar: "/avatars/avatar-2.svg"
  },
  {
    quote:
      "Compliance, execution, research—every layer is tracked and auditable. This is the future of institutional crypto intelligence.",
    name: "Alana Reyes",
    role: "Managing Partner, NovaX Capital",
    avatar: "/avatars/avatar-3.svg"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-brand-500/10 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-brand-100/70">Trusted Desks</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
              Selected voices from institutional pioneers.
            </h2>
          </div>
          <Quote className="hidden h-14 w-14 text-brand-200/70 md:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/0 via-brand-400/10 to-indigo-400/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/40">
                <span>Alpha Network</span>
                <span>{index + 1}</span>
              </div>
              <p className="relative mt-5 text-sm text-white/70">
                “{testimonial.quote}”
              </p>
              <div className="relative mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
