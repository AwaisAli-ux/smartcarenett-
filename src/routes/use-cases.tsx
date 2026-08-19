import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Family, Home & Office TV Reminders" },
      {
        name: "description",
        content:
          "SMART CARE TV is used for family TV reminders, household notes, office TV notifications, meeting reminders and shared-screen announcements.",
      },
      { property: "og:title", content: "SMART CARE TV Use Cases" },
      {
        property: "og:description",
        content: "Family reminders, household notes, office announcements and meeting room reminders.",
      },
    ],
  }),
  component: UseCases,
});

const USE_CASES = [
  { title: "Families", text: "Keep family reminders visible where everyone can see them." },
  { title: "Parents", text: "Send quick reminders to a shared TV without needing to repeat the same message." },
  { title: "Home", text: "Display household reminders, appointments and important notes." },
  { title: "Offices", text: "Share meeting reminders and temporary announcements on a common TV." },
  { title: "Meeting Rooms", text: "Display meeting times, instructions and short reminders." },
  { title: "Shared Spaces", text: "Put important temporary information where people naturally look." },
];

function UseCases() {
  return (
    <>
      <PageHeader
        eyebrow="Use Cases"
        title="Built for Everyday Reminders"
        description="From family appointments to meeting-room notices, SMART CARE TV puts short, temporary messages on a designated TV screen."
      />
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <article key={u.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <h2 className="text-lg font-bold">{u.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{u.text}</p>
              </article>
            ))}
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
