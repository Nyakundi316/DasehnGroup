import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  "Customer commitment",
  "Professional standards",
  "Health and safety",
  "Accountability",
  "Long-term business relationships",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-md bg-[#d5d0c6]">
          <Image
            src="/images/about-fleet.jpg"
            alt="Dasehn Group trucks on site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About Dasehn"
            title="Built for dependable construction delivery."
            description="Founded in April 2020, Dasehn Group brings field experience in supplying and transporting construction materials across Kenya. The company combines practical fleet operations with responsive planning for project teams that need speed, quality and flexibility."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex items-start gap-3 rounded-md border border-black/10 bg-white p-4">
                <ShieldCheck className="mt-0.5 text-[#8b1d57]" size={20} aria-hidden="true" />
                <p className="font-bold text-[#26322c]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-[#8b1d57] pl-5">
            <p className="text-lg font-bold text-[#17211d]">Vision</p>
            <p className="mt-2 leading-8 text-[#536059]">
              To become a preferred integrated logistics and infrastructure partner in East and
              Central Africa through higher quality goods and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
