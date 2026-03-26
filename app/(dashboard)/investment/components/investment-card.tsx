import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Metric from "./metric";

export default function InvestmentCard({
  year,
  type,
  name,
  subtitle,
  price,
  estimatedSellingPrice,
  roi,
  amountLeft,
  endDate,
  funded,
  image,
}: {
  year: number;
  type: string;
  name: string;
  subtitle: string;
  price: string;
  estimatedSellingPrice: string;
  roi: string;
  amountLeft: string;
  endDate: string;
  funded: number;
  image: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/6 bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <div className="grid gap-5 lg:grid-cols-[350px_minmax(0,1fr)]">
        <div className="relative overflow-hidden">
          <div className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-violet-700 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            Open for Investment
          </div>

          <div className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {type}
          </div>

          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="border-b border-white/6 pb-5">
            <div className="text-sm text-white/40">
              {year} • {type}
            </div>

            <h2 className="mt-1 text-4xl font-semibold tracking-tight">
              {name}
            </h2>

            <p className="mt-2 text-lg text-white/35">{subtitle}</p>
          </div>

          <div className="grid gap-5 border-b border-white/6 py-5 sm:grid-cols-2 xl:grid-cols-4">
            <Metric label="Price" value={price} />
            <Metric
              label="Estimated Selling Price"
              value={estimatedSellingPrice}
              accent
            />
            <Metric label="Est. ROI" value={roi} roi />
            <Metric label="Amount Left" value={amountLeft} />
          </div>

          <div className="py-5">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-4 w-4 text-white/40" />
              <div>
                <div className="text-sm text-white/35">Investment End Date</div>
                <div className="text-2xl font-semibold tracking-tight">
                  {endDate}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white/45">Funding Progress</span>
              <span className="font-medium text-white/75">
                {funded}% funded
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                style={{ width: `${funded}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-base text-violet-300 transition hover:text-violet-200">
                Click to view investment details
              </button>

              <button className="text-violet-300 transition hover:text-violet-200">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
