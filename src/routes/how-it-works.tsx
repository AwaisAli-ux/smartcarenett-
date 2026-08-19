import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — SMART CARE TV" },
      {
        name: "description",
        content:
          "Install SMART CARE TV on a compatible Google TV or Android TV environment, connect your phone with the unique Device ID, write a reminder and display it on your TV.",
      },
      { property: "og:title", content: "How SMART CARE TV Works" },
      {
        property: "og:description",
        content: "Install, connect with a Device ID, write a reminder and display it on your designated TV.",
      },
    ],
  }),
  component: HowItWorks,
});

const STEPS = [
  { n: "Step 1", title: "Install", text: "Install SMART CARE TV on a compatible TV environment." },
  { n: "Step 2", title: "Connect", text: "Open the TV application and use the unique Device ID shown on your screen to connect your mobile device." },
  { n: "Step 3", title: "Write", text: "Create a reminder, note or short announcement from your phone." },
  { n: "Step 4", title: "Display", text: "Your message appears on the designated TV for the time period you choose." },
];

function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From your phone to your TV in four steps."
        description="SMART CARE TV is reminder and notification software. Send a short note from your mobile device and display it on a designated TV for the time period you choose."
      />

      <section className="section-y">
        <div className="container-page">
          <ol className="grid gap-5 sm:grid-cols-2">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold text-primary">{s.n}</span>
                  <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="text-xl font-bold">Compatibility</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                SMART CARE TV is designed to work through a compatible Google TV or Android TV environment.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                If your television does not support the application directly, a compatible external TV device
                may allow you to use SMART CARE TV on your existing television.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="text-xl font-bold">Unique Device ID</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Each TV installation is associated with a unique Device ID used to connect and manage the
                designated TV. This Device Activation ID is the normal software licensing and connection
                mechanism used by SMART CARE TV.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
