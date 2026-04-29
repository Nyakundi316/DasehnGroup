import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

const permitRequirements = [
  "Color scan of the logbook copy",
  "Valid insurance sticker",
  "NTSA inspection report",
  "Truck photos from the front, side and rear with the number plate clearly visible",
];

export function SaccoSection() {
  return (
    <section id="sacco" className="bg-[#17211d] text-white">
      <div className="relative overflow-hidden">
        <Image
          src="/images/sacco-bg.jpg"
          alt="Industrial equipment background"
          fill
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Sacco support"
            title="KENHA permit requirements made simple."
            description="Drivers and truck owners can prepare permit documentation with a short checklist before contacting the team."
            tone="dark"
          />
          <div className="rounded-md border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <ul className="grid gap-4">
              {permitRequirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f3c557] text-[#17211d]">
                    <Check size={16} aria-hidden="true" />
                  </span>
                  <span className="leading-7 text-white/86">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="#contact" variant="light">
                Ask about Sacco <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
