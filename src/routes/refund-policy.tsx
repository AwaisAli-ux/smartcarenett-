import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — SMART CARE TV" },
      {
        name: "description",
        content:
          "SMART CARE TV provides a 3-day refund window for eligible purchases. Read how to request a refund or cancel your access.",
      },
      { property: "og:title", content: "SMART CARE TV Refund & Cancellation Policy" },
      { property: "og:description", content: "3-day refund window for eligible purchases and cancellation details." },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <h2>3-Day Refund Window</h2>
      <p>SMART CARE TV provides a 3-day refund window for eligible purchases.</p>
      <p>
        Customers who wish to request a refund should contact SMART CARE TV support within 3 calendar days of
        the applicable purchase.
      </p>
      <p>
        Once an eligible refund is approved, access to the relevant SMART CARE TV subscription will be
        deactivated.
      </p>
      <p>
        Where permitted by applicable law and payment-provider rules, reasonable transaction or processing
        costs may be deducted from the refundable amount.
      </p>
      <p>
        Approved refunds will normally be initiated within 7 days after approval. The time required for the
        refund to appear in the customer's account may depend on the payment provider and financial
        institution.
      </p>
      <p>Nothing in this policy is intended to limit consumer rights that cannot legally be excluded.</p>

      <h2>Cancellation</h2>
      <p>
        Customers may request cancellation at any time. Cancellation takes effect at the end of the current billing
        period and stops future automatic renewals. Cancellation does not automatically create a refund unless the
        purchase qualifies under this Refund Policy or applicable law.
      </p>

      <h2>How to Request a Refund</h2>
      <ul>
        <li>Contact support within 3 calendar days of the purchase.</li>
        <li>Include the name and contact details used at purchase.</li>
        <li>Include the plan purchased (duration and number of devices) and the date of purchase.</li>
        <li>Describe the reason for the request so our team can assist.</li>
      </ul>

      <h2>Contact</h2>
      <p>{SITE.supportEmail}</p>
      <p>
        {SITE.legalName} · {SITE.address}
      </p>
    </LegalPage>
  );
}
