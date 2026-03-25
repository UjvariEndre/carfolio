export default function StatCard({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <div
        className={`text-4xl font-semibold tracking-tight ${
          highlight
            ? "bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {value}
      </div>
      <p className="mt-2 text-sm text-white/40">{label}</p>
    </div>
  );
}
