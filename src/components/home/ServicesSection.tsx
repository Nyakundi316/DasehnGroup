import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { permitRequirements, services } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { ActionLink, Eyebrow } from "@/components/home/home-ui";

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-black/8 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="max-w-2xl" from="left">
          <Eyebrow>Our solutions</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Transport, materials and equipment support in one flow.
          </h2>
        </Reveal>
        <Reveal className="max-w-3xl text-base leading-8 text-[#536059] sm:text-lg" delay={90}>
          Transport, aggregates and equipment support are presented as full-width sections so the
          page reads in a steadier rhythm instead of a dense grid of oversized blocks.
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6 lg:px-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          const textBlock = (
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#17211d] text-white">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <Eyebrow>{service.eyebrow}</Eyebrow>
              </div>
              <h3 className="mt-5 text-2xl font-black leading-tight text-[#17211d] sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-[#536059] sm:text-lg">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-medium text-[#26322c]">
                    <Check size={16} className="shrink-0 text-[#8b1d57]" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <ActionLink href="#contact">
                  Request support <ArrowRight size={15} aria-hidden="true" />
                </ActionLink>
              </div>
            </div>
          );

          const imageBlock = (
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#d5d0c6]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          );

          return (
            <Reveal
              key={service.title}
              delay={index * 70}
              className="grid gap-8 border-t border-black/10 py-12 first:border-t-0 lg:grid-cols-2 lg:items-center lg:gap-14"
            >
              {index % 2 === 0 ? (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              ) : (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              )}
            </Reveal>
          );
        })}

        <Reveal
          className="grid gap-8 border-t border-black/10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14"
          delay={120}
        >
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#d5d0c6]">
            <Image
              src="/images/sacco-bg.jpg"
              alt="Industrial equipment background"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#17211d] text-white">
                <ShieldCheck size={18} aria-hidden="true" />
              </span>
              <Eyebrow>Permit readiness</Eyebrow>
            </div>
            <h3 className="mt-5 text-2xl font-black leading-tight text-[#17211d] sm:text-3xl">
              KENHA permit requirements made straightforward.
            </h3>
            <p className="mt-5 text-base leading-8 text-[#536059] sm:text-lg">
              Drivers and truck owners can prepare permit documentation with a clear checklist
              before contacting the team.
            </p>
            <div className="mt-6 grid gap-3">
              {permitRequirements.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-medium text-[#26322c]">
                  <Check size={16} className="mt-1 shrink-0 text-[#8b1d57]" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
