import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { metrics } from "@/components/home/home-data";
import { ActionLink, Eyebrow } from "@/components/home/home-ui";
import { Reveal } from "@/components/home/Reveal";

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
      <div className="absolute inset-0 bg-[#101713]/72" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,19,0.96)_0%,rgba(16,23,19,0.9)_45%,rgba(16,23,19,0.52)_100%)]" />

      <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <Reveal className="max-w-3xl" from="left">
          <Eyebrow dark>Dasehn Group Limited</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            Reliable construction logistics for infrastructure teams.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Transport, quarry materials and equipment leasing coordinated for road works, civil
            construction and demanding field operations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#services" variant="dark">
              Explore services <ChevronRight size={15} aria-hidden="true" />
            </ActionLink>
            <ActionLink href="#contact" variant="dark">
              Speak to the team <Phone size={15} aria-hidden="true" />
            </ActionLink>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={120 + index * 70}
                className="rounded-md border border-white/14 bg-white/7 px-4 py-5 backdrop-blur"
              >
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/60">
                  {metric.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid gap-4 lg:justify-items-end" delay={140} from="right">
          <div className="hero-float w-full max-w-[28rem] overflow-hidden rounded-2xl border border-white/12 bg-white/8">
            <Image
              src="/images/hero-transport.jpg"
              alt="Dasehn equipment and truck fleet"
              width={1920}
              height={1080}
              className="aspect-[4/4.4] w-full object-cover"
            />
          </div>
          <div className="w-full max-w-[28rem] rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f3c557]">
              Integrated support
            </p>
            <p className="mt-3 text-base leading-7 text-white/78">
              One partner for movement, materials and site equipment instead of managing multiple
              disconnected suppliers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
