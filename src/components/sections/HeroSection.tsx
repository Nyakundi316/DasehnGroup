import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Boxes, ChevronRight, Shovel, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeroPillar = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

const heroPillars: HeroPillar[] = [
  { label: "Fleet logistics", detail: "Road freight, routing and site support", icon: Truck },
  { label: "Material supply", detail: "Quarry sand, ballast, gravel and asphalt", icon: Boxes },
  { label: "Plant hire", detail: "Excavators, tippers, graders and pavers", icon: Shovel },
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#101713] text-white">
      <Image
        src="/images/hero-roadworks.jpg"
        alt="Road construction project supported by Dasehn Group"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#101713]/68" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,19,0.98)_0%,rgba(16,23,19,0.94)_44%,rgba(16,23,19,0.58)_72%,rgba(16,23,19,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101713] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-4xl border-l-4 border-[#f3c557] pl-5 sm:pl-7">
          <p className="text-sm font-black uppercase text-[#f3c557]">Dasehn Group Limited</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Reliable construction logistics for Kenya&apos;s infrastructure teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white sm:text-xl">
            Transport, quarry materials and equipment leasing coordinated for road works, civil
            construction and demanding field operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#services" variant="light">
              Explore services <ChevronRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Request quote <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid max-w-5xl gap-3 sm:grid-cols-3">
          {heroPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.label}
                className="flex min-h-24 items-start gap-4 rounded-md border border-white/18 bg-[#101713]/82 p-4 shadow-2xl shadow-black/20 backdrop-blur"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f3c557] text-[#17211d]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-black text-white">{pillar.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/78">{pillar.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
