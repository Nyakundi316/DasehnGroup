import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/components/site-data";
import { faqs } from "@/components/home/home-data";
import { Reveal } from "@/components/home/Reveal";
import { Eyebrow } from "@/components/home/home-ui";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal from="left">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Get in touch with Dasehn Group.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#536059] sm:text-lg">
            For transport, material supply, equipment leasing or Sacco questions, send the team the
            project details and preferred response channel.
          </p>

          <div className="mt-8 grid gap-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-[#17211d]">
                  <span>{item.question}</span>
                  <span className="text-[#8b1d57]">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#536059] sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="rounded-xl border border-black/10 bg-white p-5 transition hover:border-[#8b1d57]/30"
            >
              <Phone size={18} className="text-[#8b1d57]" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#536059]">
                Phone
              </p>
              <p className="mt-2 text-lg font-black text-[#17211d]">{contactDetails.phoneLabel}</p>
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="rounded-xl border border-black/10 bg-white p-5 transition hover:border-[#8b1d57]/30"
            >
              <Mail size={18} className="text-[#8b1d57]" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#536059]">
                Email
              </p>
              <p className="mt-2 text-lg font-black text-[#17211d]">{contactDetails.email}</p>
            </a>
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8" delay={120}>
          <form action={`mailto:${contactDetails.email}`} method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#26322c]">
                Name
                <input
                  className="min-h-11 rounded-md border border-black/12 bg-[#fbfaf7] px-4 text-base outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/15"
                  name="name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#26322c]">
                Phone
                <input
                  className="min-h-11 rounded-md border border-black/12 bg-[#fbfaf7] px-4 text-base outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/15"
                  name="phone"
                  type="tel"
                  required
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-[#26322c]">
              Email
              <input
                className="min-h-11 rounded-md border border-black/12 bg-[#fbfaf7] px-4 text-base outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/15"
                name="email"
                type="email"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-medium text-[#26322c]">
              Service
              <select
                className="min-h-11 rounded-md border border-black/12 bg-[#fbfaf7] px-4 text-base outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/15"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Transport and logistics</option>
                <option>Construction materials</option>
                <option>Equipment leasing</option>
                <option>Sacco support</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-medium text-[#26322c]">
              Message
              <textarea
                className="min-h-36 resize-y rounded-md border border-black/12 bg-[#fbfaf7] px-4 py-3 text-base outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/15"
                name="message"
                required
              />
            </label>

            <button
              type="submit"
              className="font-display mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#8b1d57] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#75184a]"
            >
              Send enquiry <ArrowRight size={15} aria-hidden="true" />
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-[#17211d] p-6 text-white">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-[#f3c557]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f3c557]">
                  Office
                </p>
                <p className="mt-3 text-lg font-semibold">{contactDetails.office}</p>
                <p className="mt-2 text-sm leading-7 text-white/76">{contactDetails.address}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
