import type { ElementType, ReactNode } from "react";

type SurfaceCardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export default function SurfaceCard<T extends ElementType = "div">({
  as,
  children,
  className = "",
}: SurfaceCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`rounded-[24px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
