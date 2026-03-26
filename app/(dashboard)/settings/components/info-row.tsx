export default function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6 px-6 py-5">
      <span className="text-lg text-white/45">{label}</span>
      <span className="text-right text-lg font-medium text-white">{value}</span>
    </div>
  );
}
