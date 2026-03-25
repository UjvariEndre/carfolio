export default function Metric({
  label,
  value,
  accent = false,
  roi = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
  roi?: boolean;
}) {
  return (
    <div>
      <div className="text-sm text-white/35">{label}</div>
      <div
        className={`mt-2 text-2xl font-semibold tracking-tight ${
          roi ? "text-emerald-400" : accent ? "text-violet-300" : "text-white"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
