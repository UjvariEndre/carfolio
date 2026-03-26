"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/investment", label: "Investment" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/roi", label: "ROI" },
  { href: "/my-investments", label: "My Investments" },
  { href: "/settings", label: "Settings" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-[1180px] px-6">
      <nav className="flex gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <NavTab
            key={tab.href}
            href={tab.href}
            active={pathname === tab.href}
          >
            {tab.label}
          </NavTab>
        ))}
      </nav>
    </div>
  );
}

function NavTab({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative inline-flex h-10 items-center whitespace-nowrap text-sm font-medium transition ${
        active ? "text-white" : "text-white/50 hover:text-white/80"
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white" />
      )}
    </Link>
  );
}
