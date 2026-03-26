import { CreditCard, Lock, User } from "lucide-react";
import PageHeader from "@/app/shared/components/page-header";
import Card from "./components/card";
import CardTitle from "./components/card-title";
import InfoRow from "./components/info-row";

export default function SettingsPageContent() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "";

  return (
    <section className="relative z-10 mx-auto max-w-[760px] px-6 pb-16 pt-10">
      <PageHeader
        title="Settings"
        description="Manage your account settings and preferences"
      />

      <div className="space-y-6">
        <Card>
          <CardTitle icon={<User className="h-5 w-5 text-violet-400" />}>
            Profile Information
          </CardTitle>

          <div className="mt-6 divide-y divide-white/6 rounded-2xl border border-white/6 bg-black/10">
            <InfoRow label="Email" value={email} />
            <InfoRow label="Account Type" value="Investor" />
          </div>
        </Card>

        <Card>
          <CardTitle icon={<Lock className="h-5 w-5 text-violet-400" />}>
            Change Password
          </CardTitle>

          <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
            <p className="text-lg text-white/45">
              Keep your account secure by using a strong password.
            </p>

            <button className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-white/10 px-6 text-lg font-medium text-white transition hover:bg-white/15">
              Change Password
            </button>
          </div>
        </Card>

        <Card>
          <CardTitle icon={<CreditCard className="h-5 w-5 text-violet-400" />}>
            Bank Account
          </CardTitle>

          <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
              <CreditCard className="h-8 w-8 text-white/35" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              No Bank Account Added
            </h2>

            <p className="mt-3 max-w-md text-lg leading-8 text-white/40">
              Add your bank account to receive returns on your investments. This
              is required before making any investments.
            </p>

            <button className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-purple-700 px-6 text-lg font-semibold text-white shadow-[0_0_30px_rgba(109,40,217,0.35)] transition hover:scale-[1.01] hover:brightness-110">
              Add Bank Account
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
