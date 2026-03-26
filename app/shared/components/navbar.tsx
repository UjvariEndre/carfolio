import { ChevronDown } from "lucide-react";
import AppBrand from "./app-brand";

export default function NavBar() {
  return (
    <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
      <AppBrand subtitle="Motors" />

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-xs font-bold text-cyan-300">
          EU
        </div>

        <div className="hidden sm:block leading-tight">
          <div className="text-sm font-medium text-white">Endre Ujvari</div>
          <div className="text-xs text-white/45">Investor</div>
        </div>

        <button className="text-white/45 transition hover:text-white">
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
