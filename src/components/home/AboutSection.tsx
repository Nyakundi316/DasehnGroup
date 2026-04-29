import Image from "next/image";
import { Check } from "lucide-react";
import { contactDetails } from "@/components/site-data";
import { companyValues } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { Eyebrow } from "@/components/home/home-ui";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal className="max-w-2xl" from="left">
          <Eyebrow>About Dasehn</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Built for dependable construction delivery.
          </h2>
        </Reveal>

        <Reveal className="max-w-3xl text-base leading-8 text-[#536059] sm:text-lg" delay={90}>
          Founded in April 2020, Dasehn Group brings field experience in supplying and transporting
          construction materials across Kenya. The company combines practical fleet operations with
          responsive planning for project teams that need speed, quality and flexibility.
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#d5d0c6]" from="left">
          <Image
            src="/images/about-fleet.jpg"
            alt="Dasehn Group trucks on site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="grid gap-4">
          <Reveal className="rounded-2xl border border-black/10 bg-white p-6" delay={60}>
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 text-base leading-8 text-[#536059]">
              To become a preferred integrated logistics and infrastructure partner in East and
              Central Africa through higher quality goods and service.
            </p>
          </Reveal>

          <Reveal className="rounded-2xl border border-black/10 bg-white p-6" delay={120}>
            <Eyebrow>Values</Eyebrow>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {companyValues.map((value) => (
                <div key={value} className="flex items-start gap-3 text-sm font-medium text-[#26322c]">
                  <Check size={16} className="mt-1 shrink-0 text-[#8b1d57]" aria-hidden="true" />
                  <span>{value}</span>
                </div>
                ))}
              </div>
          </Reveal>

          <Reveal className="rounded-2xl bg-[#17211d] p-6 text-white" delay={180}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f3c557]">Office</p>
            <p className="mt-4 text-lg font-semibold">{contactDetails.office}</p>
            <p className="mt-2 text-sm leading-7 text-white/76">{contactDetails.address}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
