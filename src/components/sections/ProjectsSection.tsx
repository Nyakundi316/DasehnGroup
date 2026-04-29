import Image from "next/image";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    name: "Dagoretti Corner Road",
    location: "Nairobi, Kenya",
    image: "/images/projects/dagoretti.jpg",
    summary:
      "Supply and logistics support for the corridor running from Dagoretti Corner toward Karen Shopping Centre.",
  },
  {
    name: "Dongo Kundu Bypass",
    location: "Mombasa, Kenya",
    image: "/images/projects/dongo-kundu.jpg",
    summary:
      "Materials and transport coordination for the highway linking Mombasa mainland routes without passing through the island.",
  },
  {
    name: "Eastern Bypass",
    location: "Nairobi, Kenya",
    image: "/images/projects/eastern-bypass.jpg",
    summary:
      "Construction logistics for a key route helping regional traffic move around Nairobi's central business district.",
  },
  {
    name: "Kwa Jomvu A109",
    location: "Mombasa, Kenya",
    image: "/images/projects/kwa-jomvu.jpg",
    summary:
      "Fleet and site support for the Mombasa to Mariakani A109 road works around the Kwa Jomvu section.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected projects"
          title="Infrastructure support across Kenya."
          description="Dasehn supports road and bypass works with reliable supply, hauling and site coordination across major Kenyan construction corridors."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="grid overflow-hidden rounded-md border border-black/10 bg-white shadow-sm md:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-64 bg-[#d5d0c6]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <p className="flex items-center gap-2 text-sm font-bold text-[#8b1d57]">
                  <MapPin size={16} aria-hidden="true" />
                  {project.location}
                </p>
                <h3 className="mt-3 text-2xl font-black text-[#17211d]">{project.name}</h3>
                <p className="mt-4 leading-7 text-[#536059]">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
