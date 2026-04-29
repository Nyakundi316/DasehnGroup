import type { ReactNode } from "react";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.24em] ${
        dark ? "text-[#f3c557]" : "text-[#8b1d57]"
      }`}
    >
      {children}
    </p>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const base =
    "font-display inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition";
  const styles = {
    primary: "bg-[#8b1d57] text-white hover:bg-[#75184a]",
    secondary:
      "border border-[#17211d]/12 bg-transparent text-[#17211d] hover:border-[#8b1d57]/40 hover:text-[#8b1d57]",
    dark: "border border-white/18 bg-white/8 text-white hover:bg-white/14",
  };

  return (
    <a className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </a>
  );
}

export function ExpandableCard({
  eyebrow,
  title,
  summary,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <details
      className={`rounded-2xl border p-5 sm:p-6 ${
        dark ? "border-white/10 bg-[#17211d] text-white" : "border-black/10 bg-[#fbfaf7] text-[#17211d]"
      }`}
    >
      <summary className="flex cursor-pointer items-start justify-between gap-4">
        <div>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
          <h3
            className={`mt-3 text-xl font-black leading-tight sm:text-2xl ${
              dark ? "text-white" : "text-[#17211d]"
            }`}
          >
            {title}
          </h3>
          <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/74" : "text-[#536059]"}`}>
            {summary}
          </p>
        </div>
        <span
          className={`font-display shrink-0 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark
              ? "border-white/14 bg-white/8 text-white/82"
              : "border-black/10 bg-white text-[#536059]"
          }`}
        >
          Read more
        </span>
      </summary>

      <div className={`mt-5 border-t pt-5 ${dark ? "border-white/10" : "border-black/10"}`}>
        {children}
      </div>
    </details>
  );
}
