import { ArrowRight, Check } from "lucide-react";
import { permitRequirements, supportModels } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { ActionLink, ExpandableCard, Eyebrow } from "@/components/home/home-ui";

export function SupportSection() {
  return (
    <section id="sacco" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl" from="left">
          <Eyebrow>Support models</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#17211d] sm:text-4xl">
            Support models for mobilization and ongoing operations.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
          {supportModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 70}>
              <ExpandableCard
                key={model.title}
                eyebrow={model.label}
                title={model.title}
                summary={model.description}
              >
                <div className="grid gap-3">
                  {model.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-medium text-[#26322c]">
                      <Check size={16} className="shrink-0 text-[#8b1d57]" aria-hidden="true" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <ActionLink href="#contact">
                    Request support <ArrowRight size={15} aria-hidden="true" />
                  </ActionLink>
                </div>
              </ExpandableCard>
            </Reveal>
          ))}

          <Reveal delay={140}>
            <ExpandableCard
              eyebrow="Sacco support"
              title="Permit checklist"
              summary="Prepare the KENHA permit documents before contacting the team."
              dark
            >
              <div className="grid gap-3">
                {permitRequirements.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                    <Check size={16} className="mt-1 shrink-0 text-[#f3c557]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <ActionLink href="#contact" variant="dark">
                  Ask about Sacco <ArrowRight size={15} aria-hidden="true" />
                </ActionLink>
              </div>
            </ExpandableCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
