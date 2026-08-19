import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldAlert, RefreshCw, Lock } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Subscription Plans — Smart Care TV" },
      {
        name: "description",
        content:
          "Transparent pricing for SmartCare TV. Subscription covers the number of device activations selected across 1-month, 3-month, 6-month, and 1-year plans.",
      },
      { property: "og:title", content: "Smart Care TV Subscription Plans" },
      {
        property: "og:description",
        content: "Transparent subscription pricing for the SmartCare TV player. Pure performance, zero content included.",
      },
    ],
  }),
  component: Pricing,
});

const PLANS = [
  {
    id: "1-month",
    label: "1 Month",
    duration: "Monthly License",
    highlight: false,
    features: [
      "UNLIMITED REMINDERS & NOTIFICATIONS",
      "CUSTOM DISPLAY DURATION PER REMINDER",
      "SEND REMINDERS INSTANTLY TO YOUR TV",
      "STANDARD SUPPORT",
    ],
    prices: [35, 55, 75, 100],
  },
  {
    id: "3-months",
    label: "3 Months",
    duration: "Quarterly License",
    highlight: false,
    features: [
      "UNLIMITED REMINDERS & NOTIFICATIONS",
      "CUSTOM DISPLAY DURATION PER REMINDER",
      "SEND REMINDERS INSTANTLY TO YOUR TV",
      "PRIORITY SUPPORT",
    ],
    prices: [100, 135, 150, 170],
  },
  {
    id: "6-months",
    label: "6 Months",
    duration: "Semi-Annual License",
    highlight: true,
    features: [
      "UNLIMITED REMINDERS & NOTIFICATIONS",
      "CUSTOM DISPLAY DURATION & SCHEDULING",
      "SEND REMINDERS INSTANTLY TO YOUR TV",
      "24/7 PRIORITY SUPPORT",
    ],
    prices: [180, 210, 240, 260],
  },
  {
    id: "1-year",
    label: "1 Year",
    duration: "Annual License",
    highlight: false,
    features: [
      "UNLIMITED REMINDERS & NOTIFICATIONS",
      "CUSTOM DISPLAY DURATION & SCHEDULING",
      "SEND REMINDERS INSTANTLY TO YOUR TV",
      "24/7 PRIORITY SUPPORT",
      "EARLY ACCESS TO NEW FEATURES",
    ],
    prices: [350, 500, 600, 700],
  },
];

const POLICIES = [
  {
    icon: RefreshCw,
    title: "7-Day Technical Refund Policy",
    text: "We offer a strict 7-day money-back guarantee for technical software malfunctions. If the SmartCare TV application fails to run on your verified hardware and our technical support cannot resolve it, a full refund will be issued. Please note: Refunds are NOT granted for external content source failures, stream lagging caused by third-party playlist providers, or internet connectivity issues.",
  },
  {
    icon: ShieldAlert,
    title: "Strict Anti-Chargeback & Friendly Fraud Policy",
    text: "By purchasing a digital license for SmartCare TV, you acknowledge that you are purchasing an intangible software product. You explicitly waive the right to claim unauthorized transactions or dispute charges via your banking institution. Any forced chargeback initiated without first opening a formal technical support ticket will be treated as contractual breach, resulting in immediate, permanent ban of the application license/hardware ID and submission of compliance records to credit card dispute networks.",
  },
  {
    icon: Lock,
    title: "Privacy & Data Handling",
    text: "SmartCare TV operates on a zero-logs, strict privacy model. Your stream credentials, URLs, and authentication keys are processed entirely locally on your device and are never transmitted to, or stored on, our servers.",
  },
];

function Pricing() {
  const [selectedDevices, setSelectedDevices] = useState<number>(1);

  return (
    <div className="bg-background">
      {/* Main Pricing Section */}
      <section id="plans" className="py-20 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-gradient-red">Subscription Plans</span>
              </h1>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Transparent pricing for SmartCare TV. Subscription covers the number of device activations selected.
              </p>
            </div>

            {/* Device Switcher */}
            <div className="glass rounded-full p-1.5 flex items-center gap-1 self-start lg:self-end shrink-0 shadow-sm">
              {[1, 2, 3, 4].map((num) => {
                const isActive = selectedDevices === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSelectedDevices(num)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-grad-primary shadow-glow text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {num} {num === 1 ? "Device" : "Devices"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Cards Grid - 4 in One Line on Desktop (lg:grid-cols-4) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {PLANS.map((p) => {
              const price = p.prices[selectedDevices - 1];

              return (
                <div
                  key={p.id}
                  className={`relative rounded-3xl p-6 sm:p-7 shadow-card bg-grad-card glass overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                    p.highlight ? "ring-red-glow border border-primary/50" : "border border-border/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 min-h-[26px]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground truncate">
                        {p.duration}
                      </span>
                      {p.highlight && (
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest bg-grad-primary rounded-full px-2.5 py-0.5 shadow-glow text-white">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-2xl font-bold font-display tracking-tight text-foreground">
                      {p.label}
                    </div>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-gradient-red">
                        ${price}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-muted-foreground mt-1.5">
                      {selectedDevices} {selectedDevices === 1 ? "device activation" : "device activations"}
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {p.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs font-bold uppercase tracking-wide">
                          <Check className="size-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                          <span className="text-foreground/90">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/checkout/$duration/$devices"
                    params={{ duration: p.id, devices: String(selectedDevices) }}
                    className={`mt-7 w-full block text-center rounded-xl py-3 text-sm font-medium transition-all duration-300 ${
                      p.highlight
                        ? "bg-grad-primary shadow-glow hover:opacity-90 text-white font-semibold"
                        : "bg-foreground text-background hover:bg-foreground/90 font-medium"
                    }`}
                  >
                    Activate {p.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal, Refund & Protection Policies Section */}
      <section id="legal" className="py-20 md:py-24 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Terms &amp; Compliance
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Legal, refund &amp; protection policies
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Read carefully before purchase. By completing checkout you agree to all policies below.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POLICIES.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">{p.title}</h3>
                    </div>
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-muted-foreground">
            <Link to="/refund-policy" className="text-primary hover:underline underline-offset-4">
              Full Refund Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="text-primary hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/privacy" className="text-primary hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
