import Image from "next/image";

const partnerLogos = [
  { name: "STECOL", image: "/images/partners/stecol.jpg" },
  { name: "AVIC", image: "/images/partners/avic.jpg" },
  { name: "CCC", image: "/images/partners/ccc.jpg" },
  { name: "Premier", image: "/images/partners/premier.jpg" },
  { name: "Aerospace", image: "/images/partners/aerospace.jpg" },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-[#8b1d57]">Partners</p>
            <h2 className="mt-3 text-3xl font-black text-[#17211d]">Trusted by project teams.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex h-24 items-center justify-center rounded-md border border-black/10 bg-[#fbfaf7] px-5"
              >
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={90}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
