import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SMART CARE TV" },
      {
        name: "description",
        content:
          "SMART CARE TV is a software product designed to make reminders and short announcements easier to see on shared TV screens.",
      },
      { property: "og:title", content: "About SMART CARE TV" },
      { property: "og:description", content: "Software for displaying temporary reminders on shared TV screens." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="About SMART CARE TV" />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            SMART CARE TV is a software product designed to make reminders and short announcements easier to
            see on shared TV screens.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our goal is to provide a simple way for families, individuals and businesses to display important
            reminders where people can see them.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-xl font-bold">What we do</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              SMART CARE TV is a software business providing a reminder and notification application for TV
              screens. Customers can use a mobile application to send temporary notes, reminders and
              announcements to a designated TV using a unique device identifier. Customers purchase
              subscription-based software access for the number of TV devices they want to activate.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
              <div>
                <dt className="font-semibold">Legal company name</dt>
                <dd className="text-muted-foreground">{SITE.legalName}</dd>
              </div>
              <div>
                <dt className="font-semibold">Business address</dt>
                <dd className="text-muted-foreground">{SITE.address}</dd>
              </div>
              <div>
                <dt className="font-semibold">Support email</dt>
                <dd className="text-muted-foreground">{SITE.supportEmail}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
