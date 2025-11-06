import Link from "next/link";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Signal Reactor", href: "#" },
      { label: "AI Copilot", href: "#ai" },
      { label: "Automation", href: "#" },
      { label: "Security", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Insights Deck", href: "#" },
      { label: "Market Briefings", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Status", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-indigo-500 shadow-primary">
                <span className="text-2xl font-semibold text-white">Λ</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">AetherIQ</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Autonomous Crypto Intelligence
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Designed for desks redefining crypto markets. Built with love between Singapore, Paris, and Toronto.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">{section.title}</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} AetherIQ Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
