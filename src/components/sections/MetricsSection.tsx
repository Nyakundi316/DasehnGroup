const metrics = [
  { value: "2020", label: "Established" },
  { value: "3", label: "Core business lines" },
  { value: "24h", label: "Response target" },
];

export function MetricsSection() {
  return (
    <section className="bg-[#f3c557]">
      <div className="mx-auto grid max-w-7xl gap-px bg-[#17211d]/20 px-5 sm:grid-cols-3 sm:px-6 lg:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[#f3c557] py-7 sm:px-6">
            <p className="text-4xl font-black text-[#17211d]">{metric.value}</p>
            <p className="mt-1 text-sm font-bold uppercase text-[#5f4b16]">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
