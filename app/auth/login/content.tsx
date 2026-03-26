"use client";

import Field from "@/app/shared/components/field";
import Input from "@/app/shared/components/input";
import Logo from "@/app/shared/logo";
import { ArrowLeft, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPageContent() {
  return (
    <>
      <div className="mb-8 flex flex-col items-center">
        <Logo />

        <h1 className="text-xl font-medium text-white/80">
          Sign in to your account
        </h1>
      </div>

      <form className="space-y-5">
        <Field label="Email">
          <Input placeholder="Enter your email" type="email" />
        </Field>

        <Field label="Password">
          <div className="relative">
            <Input
              className="pr-12"
              placeholder="Enter your password"
              type="password"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 transition hover:text-white/65"
              aria-label="Toggle password visibility"
            >
              <EyeOff className="h-5 w-5" />
            </button>
          </div>
        </Field>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-white/45 transition hover:text-white/75"
          >
            Forgot password?
          </Link>
        </div>

        <Link
          href="/investment"
          className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-purple-700 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,40,217,0.35)] transition hover:scale-[1.01] hover:brightness-110"
        >
          Sign In
        </Link>
      </form>

      <div className="mt-8 text-center text-sm text-white/40">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-white/75 transition hover:text-white"
        >
          Create Account
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white/70"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </>
  );
}
