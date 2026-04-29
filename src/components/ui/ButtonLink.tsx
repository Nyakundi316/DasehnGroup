import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary:
      "bg-[#8b1d57] text-white hover:bg-[#6f1746] focus:ring-[#8b1d57] focus:ring-offset-[#f6f4ef]",
    light:
      "bg-white text-[#17211d] hover:bg-[#f6f4ef] focus:ring-white focus:ring-offset-[#17211d]",
    outline:
      "border border-white/55 text-white hover:border-white hover:bg-white/10 focus:ring-white focus:ring-offset-[#17211d]",
  };

  return (
    <a className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </a>
  );
}
