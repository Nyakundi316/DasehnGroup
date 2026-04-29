type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-[#17211d]";
  const descriptionClass = tone === "dark" ? "text-white/78" : "text-[#536059]";
  const eyebrowClass =
    tone === "dark"
      ? "text-sm font-bold uppercase text-[#f3c557]"
      : "text-sm font-bold uppercase text-[#8b1d57]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
