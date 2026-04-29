import Image from "next/image";
import { partnerLogos, principles } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { Eyebrow } from "@/components/home/home-ui";

export function PartnersSection() {
  return (
    <section className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl" from="left">
            <Eyebrow>Partners</Eyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Trusted by project teams.
            </h2>
          </Reveal>
          <Reveal className="max-w-3xl text-base leading-8 text-[#536059] sm:text-lg" delay={90}>
            Partner proof and operating method sit together here so the user sees both who Dasehn
            works with and how the work is executed.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {partnerLogos.map((partner, index) => (
            <Reveal
              key={partner.name}
              delay={index * 50}
              className="flex h-24 items-center justify-center rounded-xl border border-black/10 bg-white px-5"
            >
              <Image
                src={partner.image}
                alt={`${partner.name} logo`}
                width={160}
                height={90}
                className="max-h-16 w-auto object-contain"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <Reveal
                key={principle.title}
                delay={index * 70}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <Icon size={22} className="text-[#8b1d57]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-[#17211d]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#536059] sm:text-base">
                  {principle.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
