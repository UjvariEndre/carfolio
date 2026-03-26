import { ReactNode } from "react";

export default function CardTitle({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-3xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
}
