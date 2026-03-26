import { ReactNode } from "react";

export function StatCard({
  icon,
  title,
  value,
  subtitle,
  valueClassName = "text-white",
}: {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm text-white/45">{title}</p>
      </div>
      <p
        className={`mt-4 text-4xl font-semibold tracking-tight ${valueClassName}`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm text-white/30">{subtitle}</p>
    </div>
  );
}
