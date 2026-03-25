"use client";

import Field from "@/app/shared/components/field";
import Input from "@/app/shared/components/input";
import Logo from "@/app/shared/logo";
import { LucideArrowLeft, LucideChevronDown, LucideEyeOff } from "lucide-react";
import Link from "next/link";

export default function SignupPageContent() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05060b] px-6 py-10 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-violet-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_35%)]" />
      </div>

      <section className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Logo />

        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-xl font-medium text-white/80">
            Create your account
          </h1>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First Name">
              <Input placeholder="John" />
            </Field>

            <Field label="Last Name">
              <Input placeholder="Doe" />
            </Field>
          </div>

          <Field label="Email">
            <Input placeholder="you@example.com" type="email" />
          </Field>

          <Field label="Phone Number">
            <div className="flex gap-3">
              <button
                type="button"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/85"
              >
                HU
                <span className="text-white/55">+36</span>
                <LucideChevronDown className="h-4 w-4 text-white/45" />
              </button>

              <Input className="flex-1" placeholder="501234567" />
            </div>
          </Field>

          <Field label="Password">
            <div className="relative">
              <Input
                className="pr-12"
                placeholder="Create a password"
                type="password"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 transition hover:text-white/65"
                aria-label="Toggle password visibility"
              >
                <LucideEyeOff className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-xs text-white/35">
              Min 8 chars, uppercase, lowercase, number & symbol
            </p>
          </Field>

          <button
            type="submit"
            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-purple-700 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,40,217,0.35)] transition hover:scale-[1.01] hover:brightness-110"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-white/75 transition hover:text-white"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white/70"
          >
            <LucideArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
