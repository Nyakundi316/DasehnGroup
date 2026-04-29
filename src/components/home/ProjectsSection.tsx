import Image from "next/image";
import { projects } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { Eyebrow } from "@/components/home/home-ui";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#17211d] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal className="max-w-2xl" from="left">
            <Eyebrow dark>Selected projects</Eyebrow>
            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
              Infrastructure support across Kenya.
            </h2>
          </Reveal>
          <Reveal className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base" delay={80}>
            A tighter project grid keeps this section easier to scan while still showing the range
            of corridors Dasehn supports.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 70}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="grid gap-4 sm:grid-cols-[8.5rem_1fr] sm:items-start">
                <div className="relative h-32 overflow-hidden rounded-lg bg-white/10 sm:h-24">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 11rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3c557]">
                    {String(index + 1).padStart(2, "0")} / {project.location}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-tight">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">{project.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
