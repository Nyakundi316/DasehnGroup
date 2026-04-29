import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/components/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f6f4ef] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch with Dasehn Group."
            description="For transport, material supply, equipment leasing or Sacco questions, send the team the project details and preferred response channel."
          />
          <div className="mt-8 grid gap-4">
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="flex items-center gap-4 rounded-md border border-black/10 bg-white p-5 text-[#17211d] transition hover:border-[#8b1d57]/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#174638] text-white">
                <Phone size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-[#536059]">Phone</span>
                <span className="font-black">{contactDetails.phoneLabel}</span>
              </span>
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-4 rounded-md border border-black/10 bg-white p-5 text-[#17211d] transition hover:border-[#8b1d57]/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#8b1d57] text-white">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-[#536059]">Email</span>
                <span className="font-black">{contactDetails.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-md border border-black/10 bg-white p-5 text-[#17211d]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#f3c557] text-[#17211d]">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-[#536059]">Office</span>
                <span className="font-black">{contactDetails.office}</span>
                <span className="block text-sm text-[#536059]">{contactDetails.address}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          action={`mailto:${contactDetails.email}`}
          method="post"
          encType="text/plain"
          className="rounded-md border border-black/10 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#26322c]">
              Name
              <input
                className="min-h-12 rounded-md border border-black/15 bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/20"
                name="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#26322c]">
              Phone
              <input
                className="min-h-12 rounded-md border border-black/15 bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/20"
                name="phone"
                type="tel"
                required
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-[#26322c]">
            Email
            <input
              className="min-h-12 rounded-md border border-black/15 bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/20"
              name="email"
              type="email"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-[#26322c]">
            Service
            <select
              className="min-h-12 rounded-md border border-black/15 bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/20"
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
          <label className="mt-5 grid gap-2 text-sm font-bold text-[#26322c]">
            Message
            <textarea
              className="min-h-36 resize-y rounded-md border border-black/15 bg-[#fbfaf7] px-4 py-3 text-base font-normal outline-none transition focus:border-[#8b1d57] focus:ring-2 focus:ring-[#8b1d57]/20"
              name="message"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#8b1d57] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6f1746] focus:outline-none focus:ring-2 focus:ring-[#8b1d57] focus:ring-offset-2 sm:w-auto"
          >
            Send enquiry <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
