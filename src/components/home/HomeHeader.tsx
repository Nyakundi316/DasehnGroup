import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { navItems } from "@/components/site-data";
import { ActionLink } from "@/components/home/home-ui";

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[#f6f4ef]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Dasehn Group home">
          <Image
            src="/images/logo.png"
            alt="Dasehn Group Limited"
            width={152}
            height={60}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display rounded-md px-3 py-2 text-sm font-medium text-[#36423c] transition hover:text-[#8b1d57]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ActionLink href="#contact">
            Request quote <ArrowRight size={15} aria-hidden="true" />
          </ActionLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-black/10 bg-white text-[#17211d]">
            <Menu size={18} aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </summary>
          <nav
            className="absolute right-0 top-12 grid w-60 gap-1 rounded-xl border border-black/10 bg-white p-2 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display rounded-md px-4 py-3 text-sm font-medium text-[#36423c] transition hover:bg-[#f3eee7]"
              >
                {item.label}
              </a>
            ))}
            <ActionLink href="#contact">
              Request quote <ArrowRight size={15} aria-hidden="true" />
            </ActionLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
