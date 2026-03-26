import Link from "next/link";

type AppBrandProps = {
  href?: string;
  subtitle: string;
  subtitleClassName?: string;
  markClassName?: string;
  titleClassName?: string;
  className?: string;
};

export default function AppBrand({
  href = "/",
  subtitle,
  subtitleClassName = "text-white/40",
  markClassName = "h-10 w-10 rounded-md border border-white/10 bg-white/[0.03] text-sm",
  titleClassName = "text-sm tracking-[0.16em]",
  className = "flex items-center gap-3",
}: AppBrandProps) {
  return (
    <Link href={href} className={className}>
      <div
        className={`flex items-center justify-center font-extrabold text-white ${markClassName}`}
      >
        CF
      </div>

      <div className="leading-none text-white">
        <div className={`font-semibold uppercase ${titleClassName}`}>Carfolio</div>
        <div
          className={`text-[10px] uppercase tracking-[0.24em] ${subtitleClassName}`}
        >
          {subtitle}
        </div>
      </div>
    </Link>
  );
}
