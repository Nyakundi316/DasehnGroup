import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Boxes, Check, Shovel, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  title: string;
  eyebrow: string;
  image: string;
  icon: LucideIcon;
  description: string;
  points: string[];
};

const services: Service[] = [
  {
    title: "Transport and Logistics",
    eyebrow: "Fleet operations",
    image: "/images/services/transport.jpg",
    icon: Truck,
    description:
      "Road freight, warehousing and field support built for construction programs that need flexible capacity and reliable handling.",
    points: ["Road freight", "Warehousing", "Water tank installation", "Borehole support", "Grading"],
  },
  {
    title: "Construction Materials",
    eyebrow: "Aggregates supply",
    image: "/images/services/materials.jpg",
    icon: Boxes,
    description:
      "Quality quarry materials and aggregates for ready mix concrete, precast work, asphalt production and site preparation.",
    points: ["Quarry sand", "River sand", "Ballast", "Crushed stone", "Gravel", "Asphalt concrete"],
  },
  {
    title: "Equipment Leasing",
    eyebrow: "Earthworks support",
    image: "/images/services/equipment.jpg",
    icon: Shovel,
    description:
      "Modern machines and construction aids for excavation, drilling, backfilling, compaction and general site maintenance.",
    points: ["Excavators", "Backhoes", "Bulldozers", "Tipper trucks", "Graders", "Loaders", "Pavers"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Services that keep site work moving."
            description="Dasehn coordinates transport, aggregates and equipment so project teams can keep procurement, site preparation and movement under one operational partner."
          />
          <ButtonLink href="#contact">
            Book a consultation <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-md border border-black/10 bg-[#fbfaf7] shadow-sm"
              >
                <div className="relative aspect-[16/10] bg-[#d5d0c6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#174638] text-white">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase text-[#8b1d57]">{service.eyebrow}</p>
                      <h3 className="text-xl font-black text-[#17211d]">{service.title}</h3>
                    </div>
                  </div>
                  <p className="leading-7 text-[#536059]">{service.description}</p>
                  <ul className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-bold text-[#26322c]">
                        <Check size={16} className="text-[#8b1d57]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
