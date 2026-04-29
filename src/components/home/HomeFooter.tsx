import { navItems } from "@/components/site-data";

export function HomeFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#101713] text-white">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#8b1d57]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Dasehn Group Limited
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              Reliable logistics, material supply, plant hire and construction
              support for projects that need speed, strength and precision.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              <span>Fleet Logistics</span>
              <span className="text-white/25">/</span>
              <span>Material Supply</span>
              <span className="text-white/25">/</span>
              <span>Plant Hire</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
              Explore
            </p>

            <nav className="mt-4 flex flex-wrap gap-3 md:justify-end">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-[#8b1d57]/60 hover:bg-[#8b1d57] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dasehn Group Limited. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>
            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}