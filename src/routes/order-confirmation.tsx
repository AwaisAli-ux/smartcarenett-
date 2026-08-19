import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order-confirmation")({
  head: () => ({
    meta: [
      { title: "Thank You For Your Order — SMART CARE TV" },
      {
        name: "description",
        content: "Your SMART CARE TV payment has been received. Our support team will contact you to assist with activation.",
      },
      { property: "og:title", content: "Thank You For Your Order — SMART CARE TV" },
      { property: "og:description", content: "Payment received. Support will contact you for activation." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderConfirmation,
});

function OrderConfirmation() {
  return (
    <section className="section-y">
      <div className="container-page max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">Thank You For Your Order</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">Your payment has been received.</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Our support team will contact you shortly to assist with SMART CARE TV activation.
        </p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Please keep an eye on your email inbox so our team can reach you.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
