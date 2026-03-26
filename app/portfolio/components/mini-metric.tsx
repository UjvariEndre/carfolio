export function MiniMetric({
  label,
  value,
  valueClassName = "text-white",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/30">
        {label}
      </p>
      <p className={`mt-2 text-lg font-semibold ${valueClassName}`}>{value}</p>
    </div>
  );
}
