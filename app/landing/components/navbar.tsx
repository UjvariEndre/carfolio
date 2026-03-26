import Link from "next/link";
import AppBrand from "@/app/shared/components/app-brand";

export function TopNavbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#05060b]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <AppBrand
          subtitle="Luxury Portfolio"
          markClassName="h-9 w-9 rounded-md border border-white/10 bg-white/5 text-sm tracking-tight"
          titleClassName="text-sm tracking-[0.22em]"
          subtitleClassName="tracking-[0.28em] text-white/35"
        />

        <nav className="flex items-center gap-6">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Sign in
          </Link>

          <Link
            href="/auth/signup"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
