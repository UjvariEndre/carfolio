export default function Logo() {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-lg font-extrabold text-white">
          CF
        </div>

        <div className="leading-none">
          <p className="text-xl font-semibold uppercase tracking-[0.14em]">
            Carfolio
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/40">
            Automotive Investments
          </p>
        </div>
      </div>
    </div>
  );
}
