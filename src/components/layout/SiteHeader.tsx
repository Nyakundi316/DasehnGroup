import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { navItems } from "@/components/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Dasehn Group home">
          <Image
            src="/images/logo.png"
            alt="Dasehn Group Limited"
            width={148}
            height={64}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-bold text-[#26322c] transition hover:bg-[#f1ece4] hover:text-[#8b1d57]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contact">
            Request quote <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-black/10 bg-[#f6f4ef] text-[#17211d]">
            <Menu size={22} aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <nav
            className="absolute right-0 top-14 w-64 rounded-md border border-black/10 bg-white p-2 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-4 py-3 text-sm font-bold text-[#26322c] hover:bg-[#f1ece4]"
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#8b1d57] px-4 py-3 text-sm font-bold text-white"
              href="#contact"
            >
              Request quote <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
