import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

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
    </div>
  );
}
