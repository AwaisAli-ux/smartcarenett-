import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Tv,
  Smartphone,
  Timer,
  KeyRound,
  MonitorSmartphone,
  Building2,
  ShieldCheck,
  Check,
  ArrowRight,
  Clock,
} from "lucide-react";
import heroImage from "@/assets/hero-phone-tv.jpg";
import { Button } from "@/components/ui/button";
import { DURATIONS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMART CARE TV — TV Reminder & Notification Software" },
      {
        name: "description",
        content:
          "Send reminders, notes and short announcements from your phone to a designated TV screen. SMART CARE TV is simple reminder and notification software for homes and businesses.",
      },
      { property: "og:title", content: "SMART CARE TV — TV Reminder & Notification Software" },
      {
        property: "og:description",
        content:
          "Display temporary reminders from your phone on a designated TV. Recurring subscription plans, free trial for eligible customers.",
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { icon: Tv, title: "TV Reminders", text: "Display important reminders directly on your TV screen." },
  { icon: Smartphone, title: "Send From Your Phone", text: "Create and send notes from your connected mobile device." },
  { icon: Timer, title: "Timed Display", text: "Choose how long your reminder should remain visible." },
  { icon: KeyRound, title: "Simple Connection", text: "Connect your mobile device to a designated TV using its unique Device ID." },
  { icon: MonitorSmartphone, title: "Multiple TV Plans", text: "Choose a plan based on the number of TVs you want to use." },
  { icon: Building2, title: "Home & Business", text: "Designed for families, homes, offices and shared spaces." },
];

const STEPS = [
  { n: "01", title: "Install", text: "Install SMART CARE TV on a compatible TV environment." },
  { n: "02", title: "Connect", text: "Open the TV application and use the unique Device ID shown on your screen to connect your mobile device." },
  { n: "03", title: "Write", text: "Create a reminder, note or short announcement from your phone." },
  { n: "04", title: "Display", text: "Your message appears on the designated TV for the time period you choose." },
];

const USE_CASES = [
  { title: "Families", text: "Keep family reminders visible where everyone can see them." },
  { title: "Parents", text: "Send quick reminders to a shared TV without needing to repeat the same message." },
  { title: "Home", text: "Display household reminders, appointments and important notes." },
  { title: "Offices", text: "Share meeting reminders and temporary announcements on a common TV." },
  { title: "Meeting Rooms", text: "Display meeting times, instructions and short reminders." },
  { title: "Shared Spaces", text: "Put important temporary information where people naturally look." },
];

const TRUST = [
  "Clear pricing",
  "Recurring subscriptions",
  "Simple device-based access",
  "Free trial for eligible customers",
  "Human customer support",
  "Clear refund policy",
  "Transparent terms",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface py-14 sm:py-20 md:py-24">
        {/* Soft ambient background glow on the right */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-rose-500/10 via-red-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm">
              TV Reminders &amp; Notification Software
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight text-foreground">
              Simple reminders.
              <span className="block text-primary mt-1">Right on your TV.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Send instant messages and scheduled reminders directly to your TV from your phone. Pair your TV with a simple code and keep important reminders visible when they matter.
            </p>

            {/* CTA Buttons (kept same as they are) */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: TV & Phone Interactive UI Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 relative pt-4 pb-12 sm:py-8 flex justify-center">
            {/* Main Floating Wrapper */}
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none animate-float">
              {/* TV Mockup Frame */}
              <div className="relative rounded-[2.5rem] sm:rounded-[3.2rem] border-[10px] sm:border-[14px] border-[#181414] bg-[#141010] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden aspect-[16/10] flex flex-col justify-center">
                {/* TV Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.04] pointer-events-none" />

                {/* Badge inside TV - positioned top center/left */}
                <div className="mb-4 sm:mb-6 pl-2 sm:pl-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2b1212] border border-[#521c1c] px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ef4444] shadow-inner">
                    <Tv className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>SMART CARE TV</span>
                  </div>
                </div>

                {/* TV Message - Fully visible text including TIME */}
                <div className="pl-2 sm:pl-4 pr-16 sm:pr-24">
                  <h2 className="text-xl sm:text-3xl md:text-[2.25rem] lg:text-[1.85rem] xl:text-[2.4rem] font-black tracking-wide text-white uppercase font-display whitespace-nowrap drop-shadow-md">
                    IT'S MEDICINE TIME
                  </h2>
                  <p className="mt-2 sm:mt-3.5 text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold text-neutral-400 font-mono tracking-tight pl-12 sm:pl-20">
                    8:00 PM
                  </p>
                </div>

                {/* TV Neck */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-6 bg-[#2a2424] rounded-b-md shadow-md" />
              </div>

              {/* TV Stand Base (under TV) */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-44 sm:w-60 h-2 bg-[#d1c5c5]/90 rounded-full shadow-lg" />

              {/* Phone Mockup Overlayed on Right Corner */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 sm:-bottom-7 w-44 sm:w-52 md:w-56 rounded-[2rem] sm:rounded-[2.25rem] border-[5px] sm:border-[7px] border-[#181414] bg-white p-3 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
                {/* Speaker Notch */}
                <div className="mx-auto w-10 sm:w-14 h-1 sm:h-1.5 bg-neutral-300 rounded-full mb-2.5" />

                <div className="space-y-2 sm:space-y-2.5">
                  <div className="text-[11px] sm:text-xs font-extrabold text-neutral-900 tracking-tight">
                    Smart Care TV
                  </div>

                  {/* Connected TV Box */}
                  <div className="rounded-xl bg-[#fdf2f2] border border-[#fee2e2] p-2 sm:p-2.5">
                    <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#ef4444]">
                      CONNECTED TV
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-neutral-900 mt-0.5">
                      Living Room TV
                    </div>
                  </div>

                  {/* Reminder List */}
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                      UPCOMING REMINDERS
                    </div>
                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200/90 bg-white px-2 py-1 text-[10px] sm:text-[11px] shadow-xs">
                        <Clock className="w-3 h-3 text-[#ef4444] shrink-0" />
                        <span className="font-bold text-neutral-900">8:00 PM</span>
                        <span className="text-neutral-500 truncate">Medicine Time</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200/90 bg-white px-2 py-1 text-[10px] sm:text-[11px] shadow-xs">
                        <Clock className="w-3 h-3 text-[#ef4444] shrink-0" />
                        <span className="font-bold text-neutral-900">12:30 PM</span>
                        <span className="text-neutral-500 truncate">Lunch Time</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg border border-neutral-200/90 bg-white px-2 py-1 text-[10px] sm:text-[11px] shadow-xs">
                        <Clock className="w-3 h-3 text-[#ef4444] shrink-0" />
                        <span className="font-bold text-neutral-900">6:30 PM</span>
                        <span className="text-neutral-500 truncate">Dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Simple Reminders. Right Where They Need to Be.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            SMART CARE TV makes it easier to keep important reminders visible on a shared TV screen. Send a
            short note from your phone and display it on your designated TV for the time period you choose.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you're reminding your family about an appointment, displaying a household reminder, or
            sharing a quick announcement in an office, SMART CARE TV helps put the message where people can
            see it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold sm:text-4xl">How It Works</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Four simple steps from your phone to your designated TV screen.
          </p>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2.5">
                  <span className="text-base font-bold text-primary">{s.n}</span>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-y">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Features</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            ))}
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

      {/* Use cases */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Built for Everyday Reminders</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <article key={u.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy positioning */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Designed With Simplicity &amp; Privacy in Mind</h2>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              SMART CARE TV is designed to minimize the information required to use the TV application.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The TV application does not require a traditional email and password login.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              SMART CARE TV aims to collect only the information necessary to provide the service, process
              purchases, provide support and maintain the security of the platform.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <h3 className="text-lg font-bold">Unique Device ID</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Each TV installation is associated with a unique Device ID used to connect and manage the
              designated TV. The Device Activation ID is a standard software licensing and connection
              mechanism.
            </p>
            <h3 className="mt-6 text-lg font-bold">Compatibility</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              SMART CARE TV is designed to work through a compatible Google TV or Android TV environment. If
              your television does not support the application directly, a compatible external TV device may
              allow you to use SMART CARE TV on your existing television.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-y border-border bg-surface section-y">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Simple Subscription Plans for Every Setup</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Choose the number of TVs and billing interval that fits your needs. All plans renew automatically until cancelled.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DURATIONS.map((d) => (
              <article key={d.id} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-bold">{d.label}</h3>
                <p className="mt-3 text-3xl font-extrabold">
                  ${d.prices[0]}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ 1 device</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View Full Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-y">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Clear. Simple. Transparent.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trial CTA */}
      <section className="border-t border-border bg-surface section-y">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Try SMART CARE TV Before You Subscribe</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Experience SMART CARE TV before choosing a plan. Submit your details and our support team will
            contact you to help you get started.
          </p>
          <p className="mt-3 font-semibold">24–48 Hour Free Trial</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Eligible customers may receive a 24–48 hour free trial.
          </p>
          <div className="mt-7 flex justify-center">
            <Button asChild size="lg">
              <Link to="/free-trial">Request Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
