import PageHeader from "@/app/shared/components/page-header";
import { investments } from "@/app/shared/data/investment-data";
import InvestmentCard from "./components/investment-card";

export default function InvestmentPageContent() {
  return (
    <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
      <PageHeader
        title="Investment Opportunities"
        description="8 vehicles available for investment"
      />

      <div className="space-y-5">
        {investments.map((item) => (
          <InvestmentCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
