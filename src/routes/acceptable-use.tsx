import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/acceptable-use")({
  head: () => ({
    meta: [
      { title: "Acceptable Use Policy — SMART CARE TV" },
      {
        name: "description",
        content:
          "Rules for using SMART CARE TV reminder software responsibly, including prohibited activities and how access may be suspended.",
      },
      { property: "og:title", content: "SMART CARE TV Acceptable Use Policy" },
      { property: "og:description", content: "Prohibited activities and responsible use of SMART CARE TV." },
    ],
  }),
  component: AcceptableUse,
});

function AcceptableUse() {
  return (
    <LegalPage title="Acceptable Use Policy">
      <h2>Purpose</h2>
      <p>
        This policy sets out how SMART CARE TV may and may not be used. It forms part of the SMART CARE TV
        Terms of Service.
      </p>

      <h2>Prohibited Activities</h2>
      <p>Users may not use SMART CARE TV for:</p>
      <ul>
        <li>Illegal activities</li>
        <li>Fraud</li>
        <li>Threats</li>
        <li>Harassment</li>
        <li>Malware</li>
        <li>Unauthorized access</li>
        <li>Abuse</li>
        <li>Copyright infringement</li>
        <li>Impersonation</li>
        <li>Spam</li>
        <li>Circumventing device restrictions</li>
        <li>Attacking service infrastructure</li>
        <li>Unauthorized surveillance</li>
        <li>Activities violating applicable law</li>
      </ul>

      <h2>Enforcement</h2>
      <p>
        SMART CARE TV may suspend access where reasonably necessary to protect the service and users.
        Depending on the circumstances, we may also terminate access in accordance with the Terms of Service.
      </p>

      <h2>Reporting Abuse</h2>
      <p>Suspected misuse can be reported to {SITE.supportEmail}.</p>
    </LegalPage>
  );
}
