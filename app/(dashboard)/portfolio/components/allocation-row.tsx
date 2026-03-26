export function AllocationRow({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/70">{name}</span>
        <span className="font-medium text-white">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
