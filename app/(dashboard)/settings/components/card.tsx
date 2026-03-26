import type { ReactNode } from "react";
import SurfaceCard from "@/app/shared/components/surface-card";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <SurfaceCard as="section" className="lg:p-7">
      {children}
    </SurfaceCard>
  );
}
