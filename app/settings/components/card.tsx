import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-[24px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm lg:p-7">
      {children}
    </section>
  );
}
