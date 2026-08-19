import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/trial-success")({
  head: () => ({
    meta: [
      { title: "Trial Request Received — SMART CARE TV" },
      {
        name: "description",
        content: "Your SMART CARE TV trial request has been received. Our support team will contact you shortly.",
      },
      { property: "og:title", content: "Trial Request Received — SMART CARE TV" },
      { property: "og:description", content: "Our support team will contact you about your trial request." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TrialSuccess,
});

function TrialSuccess() {
  return (
    <section className="section-y">
      <div className="container-page max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">Thank You!</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Your SMART CARE TV trial request has been received.
        </p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Our support team will contact you using the information you provided.
        </p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Please keep an eye on your email inbox so we can help you get started.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
