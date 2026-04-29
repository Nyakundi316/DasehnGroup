import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, navItems } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#17211d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_1.4fr] lg:px-8">
        <div className="max-w-xl">
          <Image
            src="/images/logo.png"
            alt="Dasehn Group Limited"
            width={148}
            height={64}
            className="h-12 w-auto rounded-md bg-white p-1 object-contain"
          />
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Transport, construction materials and equipment support for infrastructure teams in
            Kenya.
          </p>
        </div>

        <div>
          <nav aria-label="Footer navigation" className="grid gap-3 sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md border border-white/12 px-4 py-3 text-sm font-bold text-white/82 transition hover:border-[#f3c557]/60 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              className="flex min-h-14 items-center gap-3 rounded-md bg-white/8 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/12"
              href={`tel:${contactDetails.phoneHref}`}
            >
              <Phone size={18} className="text-[#f3c557]" aria-hidden="true" />
              {contactDetails.phoneLabel}
            </a>
            <a
              className="flex min-h-14 items-center gap-3 rounded-md bg-white/8 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/12"
              href={`mailto:${contactDetails.email}`}
            >
              <Mail size={18} className="text-[#f3c557]" aria-hidden="true" />
              Email team
            </a>
            <a
              className="flex min-h-14 items-center gap-3 rounded-md bg-[#f3c557] px-4 py-3 text-sm font-black text-[#17211d] transition hover:bg-[#f7d376]"
              href="#contact"
            >
              Request quote <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-md border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/78">
            <MapPin size={19} className="mt-0.5 shrink-0 text-[#f3c557]" aria-hidden="true" />
            <span>
              <span className="block font-black text-white">{contactDetails.office}</span>
              <span className="mt-1 block leading-6">{contactDetails.address}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/60">
        (c) 2026 Dasehn Group Limited. All rights reserved.
      </div>
    </footer>
  );
}
