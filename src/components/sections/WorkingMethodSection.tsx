import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Clock3, Hammer } from "lucide-react";

type WorkStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const workSteps: WorkStep[] = [
  { icon: ClipboardCheck, title: "Scope", text: "Confirm material, machine and fleet needs." },
  { icon: Clock3, title: "Plan", text: "Coordinate timing, route and site access." },
  { icon: Hammer, title: "Deliver", text: "Execute with accountable field communication." },
];

export function WorkingMethodSection() {
  return (
    <section className="bg-[#17211d] py-16 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-[#f3c557]">Working method</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Quality control from dispatch to delivery.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {workSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="rounded-md border border-white/15 bg-white/8 p-5">
                <Icon className="text-[#f3c557]" size={24} aria-hidden="true" />
                <p className="mt-4 text-lg font-black">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
