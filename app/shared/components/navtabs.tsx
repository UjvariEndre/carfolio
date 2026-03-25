import Link from "next/link";

export default function NavTabs() {
  return (
    <div className="mx-auto max-w-[1180px] px-6">
      <nav className="flex gap-8 overflow-x-auto">
        <NavTab href="/investment" active>
          Investment
        </NavTab>
        <NavTab href="/portfolio">Portfolio</NavTab>
        <NavTab href="/roi">ROI</NavTab>
        <NavTab href="/my-investments">My Investments</NavTab>
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
