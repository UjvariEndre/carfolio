import NavBar from "../shared/components/navbar";
import NavTabs from "../shared/components/navtabs";
import { investments } from "../shared/data/investment-data";
import InvestmentCard from "./components/investment-card";

export default function InvestmentPageContent() {
  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(120,80,255,0.12),transparent_30%)]" />
        <div className="absolute left-1/4 top-40 h-[420px] w-[420px] rounded-full bg-violet-700/10 blur-[140px]" />
        <div className="absolute right-1/4 top-[30%] h-[320px] w-[320px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <header className="relative z-10 border-b border-white/8 bg-black/20 backdrop-blur-sm">
        <NavBar />
        <NavTabs />
      </header>

      <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">
            Investment Opportunities
          </h1>
          <p className="mt-2 text-lg text-white/45">
            8 vehicles available for investment
          </p>
        </div>

        <div className="space-y-5">
          {investments.map((item) => (
            <InvestmentCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
