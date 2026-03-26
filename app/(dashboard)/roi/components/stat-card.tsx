export default function StatCard({
  title,
  value,
  subtitle,
  valueClassName = "text-white",
}: {
  title: string;
  value: string;
  subtitle: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <p className="text-lg text-white/45">{title}</p>
      <p
        className={`mt-4 text-5xl font-semibold tracking-tight ${valueClassName}`}
      >
        {value}
      </p>
      <p className="mt-3 text-base text-white/30">{subtitle}</p>
    </div>
  );
}
