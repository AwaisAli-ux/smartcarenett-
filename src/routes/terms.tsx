import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SMART CARE TV" },
      {
        name: "description",
        content:
          "Terms of Service for SMART CARE TV reminder and notification software, covering licensing, device limits, trials, payments, refunds and acceptable use.",
      },
      { property: "og:title", content: "SMART CARE TV Terms of Service" },
      { property: "og:description", content: "The terms that govern use of SMART CARE TV software." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <h2>1. Acceptance of Terms</h2>
      <p>
        These Terms of Service ("Terms") govern your access to and use of the SMART CARE TV website,
        applications and related services (together, the "Service"), operated by {SITE.legalName}. By using the
        Service or purchasing access, you agree to these Terms. If you do not agree, please do not use the
        Service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        SMART CARE TV is reminder and notification software. It allows a user to send temporary reminders,
        notes and short announcements from a mobile device to a designated TV screen for a display period
        chosen by the user. SMART CARE TV is not a streaming, media, television channel or content service.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be of legal age to enter into a binding contract in your jurisdiction and be able to comply
        with these Terms. If you use the Service on behalf of an organisation, you confirm you are authorised
        to bind that organisation.
      </p>

      <h2>4. Software License</h2>
      <p>
        Subject to these Terms and payment of applicable fees, SMART CARE TV grants you a limited,
        non-exclusive, non-transferable, revocable license to use the software during your purchased access
        period and within your purchased device limit. Full license terms are set out in the SMART CARE TV
        Software License Agreement.
      </p>

      <h2>5. Device Limits</h2>
      <p>
        Each plan permits activation on a specified number of designated TV devices. Each TV installation is
        associated with a unique Device ID used to connect and manage the designated TV. Circumventing device
        limits or activation controls is prohibited.
      </p>

      <h2>6. Free Trial</h2>
      <p>
        Eligible customers may receive a 24–48 hour free trial. Trial availability, duration and eligibility
        are determined by SMART CARE TV and may be declined, limited or withdrawn. Trial requests are reviewed
        by our support team, and a trial is not automatic.
      </p>

      <h2>7. Pricing and Payments</h2>
      <p>
        SMART CARE TV subscriptions are billed in advance on a recurring basis for the selected billing period
        (for example, monthly, every three months, every six months, or annually). The price, billing interval
        and number of permitted devices are displayed on the pricing page. When the selected billing period ends,
        your payment method will be automatically charged for the next billing period unless you cancel before the
        renewal date. You authorise this recurring charge when you complete checkout. Payments are processed through
        our payment provider's secure hosted checkout. Applicable taxes may apply.
      </p>

      <h2>8. Refunds</h2>
      <p>
        Refunds are governed by the SMART CARE TV Refund &amp; Cancellation Policy, which includes a 3-day
        refund window for eligible purchases. Nothing in these Terms is intended to limit consumer rights that
        cannot legally be excluded.
      </p>

      <h2>9. Device Replacement</h2>
      <p>
        If you replace a designated TV or TV device, contact support. After verification, the previous device
        may be deactivated and a replacement device may be activated under an eligible subscription. Device
        replacement requests may be limited to prevent abuse.
      </p>

      <h2>10. Acceptable Use</h2>
      <p>
        You agree to use the Service lawfully and in accordance with the Acceptable Use Policy, which forms
        part of these Terms.
      </p>

      <h2>11. User Content</h2>
      <p>
        You are responsible for the reminders, notes and announcements you submit through the Service. You
        confirm you have the right to display that content on the designated TV and that it does not violate
        applicable law or the rights of others. SMART CARE TV is designed for temporary reminders rather than
        permanent message storage.
      </p>

      <h2>12. Intellectual Property</h2>
      <p>
        The Service, including the software, brand, design and documentation, is owned by {SITE.legalName} or
        its licensors and is protected by intellectual property laws. No rights are granted other than the
        limited license described in these Terms.
      </p>

      <h2>13. Software Updates</h2>
      <p>
        SMART CARE TV may release updates, fixes or changes to the software. Updates may be required for
        continued operation, security or compatibility.
      </p>

      <h2>14. Service Availability</h2>
      <p>
        We aim to keep the Service available and reliable, but availability may be affected by maintenance, third-party providers, network conditions, device compatibility or events outside our reasonable control. The Service is designed to work through a compatible Google TV or Android TV environment.
      </p>
      <p>
        Reminder delivery specifically depends on the designated TV device remaining connected to the internet, the application remaining active in the background, and required app permissions remaining enabled. We do not guarantee delivery or display of a reminder where this results from:
      </p>
      <ul className="!list-none !pl-0 space-y-2 my-3">
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(a)</span>
          <span>The designated device not being connected to the internet at the scheduled time;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(b)</span>
          <span>The application having been force-stopped, closed, or removed from active/background processes by the device operating system or the user;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(c)</span>
          <span>Background activity, autostart, battery optimization, or notification permissions for the application having been restricted or disabled at the device level;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(d)</span>
          <span>The application undergoing a scheduled update or maintenance at the time a reminder is due;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(e)</span>
          <span>Any other device-level restriction or third-party interference outside our reasonable control; or</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-semibold text-foreground shrink-0">(f)</span>
          <span>The designated TV device being powered off, unplugged, or disconnected from power at the scheduled time.</span>
        </li>
      </ul>
      <p>
        Users relying on time-critical reminders are advised to also maintain an independent backup method (such as a mobile phone alarm).
      </p>

      <h2>15. Suspension</h2>
      <p>
        We may suspend access where reasonably necessary to protect the Service, other users, or to address
        suspected breach of these Terms, fraud, abuse or unlawful activity.
      </p>

      <h2>16. Termination</h2>
      <p>
        Your subscription continues until cancelled. You may cancel at any time; cancellation takes effect at the
        end of the current billing period and stops future automatic renewals. You may stop using the Service at any
        time. Cancellation does not automatically create a refund unless the purchase qualifies under the Refund Policy
        or applicable law.
      </p>

      <h2>17. Disclaimer</h2>
      <p>
        Except where prohibited by law, the Service is provided "as is" and "as available" without warranties
        of any kind. SMART CARE TV should not be relied upon as the sole method of delivering urgent, safety,
        medical or emergency information.
      </p>

      <h2>18. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, SMART CARE TV and {SITE.legalName} shall not be
        liable for indirect, incidental, special, consequential or punitive damages, or loss of data, profits
        or goodwill. Where liability cannot be excluded, it is limited to the amount you paid for the
        applicable access period. Nothing limits liability that cannot lawfully be limited.
      </p>

      <h2>19. Governing Law</h2>
      <p>
        These Terms are governed by the laws of {SITE.jurisdiction}, without regard to conflict of law rules.
      </p>

      <h2>20. Contact Information</h2>
      <p>
        Questions about these Terms can be sent to {SITE.supportEmail} ({SITE.legalName}, {SITE.address}).
      </p>
    </LegalPage>
  );
}
