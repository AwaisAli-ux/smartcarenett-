import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { findPlan, formatBillingPeriodLabel, SITE } from "@/lib/site";

export const Route = createFileRoute("/checkout/$duration/$devices")({
  head: () => ({
    meta: [
      { title: "Review Your Order — SMART CARE TV" },
      {
        name: "description",
        content:
          "Review your SMART CARE TV plan, duration, device count, total price and activation information before secure payment.",
      },
      { property: "og:title", content: "Review Your SMART CARE TV Order" },
      { property: "og:description", content: "Plan summary, activation information and policies before payment." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
  notFoundComponent: PlanNotFound,
});

function PlanNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-extrabold">Plan not found</h1>
      <p className="mt-3 text-muted-foreground">Please choose a plan from the pricing page.</p>
      <Button asChild className="mt-6">
        <Link to="/pricing">View Pricing</Link>
      </Button>
    </div>
  );
}

function Checkout() {
  const { duration, devices } = Route.useParams();
  const plan = findPlan(duration, Number(devices));
  if (!plan) throw notFound();

  return (
    <>
      <PageHeader eyebrow="Checkout" title="Review your order" description="Please review your purchase details before continuing to secure payment." />

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <h2 className="text-xl font-bold">Order summary</h2>
            <dl className="mt-5 divide-y divide-border text-sm">
              <Row label="Product" value="SMART CARE TV" />
              <Row label="Selected plan" value={`${plan.duration.label} · ${plan.devices} ${plan.devices === 1 ? "device" : "devices"}`} />
              <Row label="Billing period" value={plan.duration.label} />
              <Row label="Number of devices" value={String(plan.devices)} />
              <Row label="Access type" value="Recurring subscription" />
              <Row label="Renewal" value={`Renews automatically (${formatBillingPeriodLabel(plan.duration.months).toLowerCase()})`} />
              <Row label="Total per billing period" value={`$${plan.price}`} emphasis />
            </dl>

            <h3 className="mt-8 text-lg font-bold">Activation &amp; renewal information</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              This is a recurring subscription. After payment confirmation, our support team will contact you to
              assist with activation. Your payment method will be automatically charged for each subsequent billing
              period unless you cancel beforehand.
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Payment is handled by a secure hosted checkout provided by our payment processor. SMART CARE TV
              does not collect card details through this website.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm text-muted-foreground">
              Secure checkout is being finalised with our payment provider. To complete this subscription today,
              contact our support team at {SITE.supportEmail} and quote the plan above.
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">Contact Support to Complete Purchase</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">Change Plan</Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-base font-bold">Before you pay</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/refund-policy" className="text-primary underline underline-offset-4">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary underline underline-offset-4">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/license" className="text-primary underline underline-offset-4">
                  Software License / EULA
                </Link>
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Eligible purchases may qualify for a refund under our 3-day Refund Policy.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ label, value, emphasis }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={emphasis ? "text-lg font-extrabold" : "font-semibold"}>{value}</dd>
    </div>
  );
}
