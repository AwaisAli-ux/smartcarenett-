import { createFileRoute, Link } from "@tanstack/react-router";
import { Tv, Smartphone, Timer, KeyRound, MonitorSmartphone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SMART CARE TV Reminder Software" },
      {
        name: "description",
        content:
          "TV reminders, phone-to-TV notes, timed display, simple Device ID connection and multi-TV plans for homes, offices and shared spaces.",
      },
      { property: "og:title", content: "SMART CARE TV Features" },
      {
        property: "og:description",
        content: "TV reminders, timed display, Device ID connection and multi-TV plans.",
      },
    ],
  }),
  component: Features,
});

const FEATURES = [
  { icon: Tv, title: "TV Reminders", text: "Display important reminders directly on your TV screen." },
  { icon: Smartphone, title: "Send From Your Phone", text: "Create and send notes from your connected mobile device." },
  { icon: Timer, title: "Timed Display", text: "Choose how long your reminder should remain visible." },
  { icon: KeyRound, title: "Simple Connection", text: "Connect your mobile device to a designated TV using its unique Device ID." },
  { icon: MonitorSmartphone, title: "Multiple TV Plans", text: "Choose a plan based on the number of TVs you want to use." },
  { icon: Building2, title: "Home & Business", text: "Designed for families, homes, offices and shared spaces." },
];

function Features() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything you need to show a reminder on a TV."
        description="SMART CARE TV keeps temporary notes, reminders and short announcements visible on the screens people already look at."
      />
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article key={f.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-bold leading-snug">{f.title}</h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Experience / Pairing Feature Showcase */}
      <section className="border-t border-border bg-surface/50 py-16 sm:py-20 md:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="inline-flex items-center rounded-full bg-[#fdf2f2] border border-[#fee2e2] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ef4444]">
                PRODUCT EXPERIENCE
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
                Designed to be<br />simple for everyone.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                The person using the TV does not need to navigate complicated menus or create a traditional account on the television. Smart Care TV is designed around a simple pairing experience so an authorized person can manage messages and reminders remotely.
              </p>

              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                The interface shown here is a conceptual representation. The exact pairing code format is not finalized.
              </p>
            </div>

            {/* Right Column: TV and Mobile Phone Mockups Side-by-Side */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
              {/* Left: TV Screen Mockup */}
              <div className="w-[52%] sm:w-[54%] rounded-[2rem] sm:rounded-[2.25rem] border-[8px] sm:border-[10px] border-[#181414] bg-[#141010] p-4 sm:p-7 shadow-2xl flex flex-col items-center justify-center text-center aspect-[4/3]">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#ef4444]">
                  SMART CARE TV
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-300 font-medium mt-2 sm:mt-3">
                  Your TV is ready to connect.
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-neutral-500 mt-3 sm:mt-5">
                  PAIRING CODE
                </div>
                <div className="mt-1 font-mono font-black text-white text-3xl sm:text-5xl tracking-[0.25em] leading-tight text-center">
                  <div>4 8 2</div>
                  <div>7 1 9</div>
                </div>
              </div>

              {/* Right: Phone Mockup */}
              <div className="w-[46%] sm:w-[42%] rounded-[1.75rem] sm:rounded-[2rem] border-[5px] sm:border-[6px] border-[#181414] bg-white p-3.5 sm:p-5 shadow-2xl flex flex-col justify-between aspect-[3/4.6]">
                <div>
                  {/* Speaker Notch */}
                  <div className="mx-auto w-10 sm:w-12 h-1 bg-neutral-300 rounded-full mb-3 sm:mb-4" />

                  {/* Connect a TV header */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 mb-4 sm:mb-5">
                    <Smartphone className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>Connect a TV</span>
                  </div>

                  {/* Enter code input area */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                      ENTER CODE
                    </div>
                    <div className="rounded-xl bg-[#fdf2f2] border border-[#fee2e2] py-2 sm:py-2.5 px-2 text-center font-mono font-black text-base sm:text-lg tracking-[0.18em] text-neutral-900">
                      482 719
                    </div>
                  </div>

                  {/* Connect TV Button */}
                  <div className="mt-3 sm:mt-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white py-2 sm:py-2.5 text-center text-xs sm:text-sm font-bold shadow-md cursor-pointer transition">
                    Connect TV
                  </div>
                </div>

                <div className="text-[8px] sm:text-[9px] text-neutral-400 text-center mt-2">
                  Conceptual interface preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
