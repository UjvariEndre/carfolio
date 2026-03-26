import AppBrand from "./components/app-brand";

export default function Logo() {
  return (
    <div className="mb-8 flex justify-center">
      <AppBrand
        subtitle="Automotive Investments"
        markClassName="h-11 w-11 rounded-md border border-white/10 bg-white/[0.03] text-lg"
        titleClassName="text-xl tracking-[0.14em]"
        subtitleClassName="mt-1 tracking-[0.28em] text-white/40"
      />
    </div>
  );
}
