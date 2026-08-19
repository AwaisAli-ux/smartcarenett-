import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/license")({
  head: () => ({
    meta: [
      { title: "Software License Agreement (EULA) — SMART CARE TV" },
      {
        name: "description",
        content:
          "The SMART CARE TV Software License Agreement explains the limited, non-exclusive license granted for the purchased access period and device limit.",
      },
      { property: "og:title", content: "SMART CARE TV Software License Agreement" },
      { property: "og:description", content: "Limited license terms for the purchased access period and device limit." },
    ],
  }),
  component: License,
});

function License() {
  return (
    <LegalPage title="SMART CARE TV Software License Agreement">
      <h2>1. License Grant</h2>
      <p>
        Subject to your compliance with this Agreement and the SMART CARE TV Terms of Service, {SITE.legalName}{" "}
        grants you a limited, non-exclusive, non-transferable, revocable license to install and use the SMART
        CARE TV software during the applicable subscription billing period and within the purchased device limit.
      </p>

      <h2>2. No Transfer of Ownership</h2>
      <p>
        The software is licensed, not sold. You do not purchase ownership of the software, its source code or
        any intellectual property in it. All rights not expressly granted are reserved.
      </p>

      <h2>3. Device Activation</h2>
      <p>
        Each TV installation is associated with a unique Device ID (Device Activation ID) used to connect and
        manage the designated TV. Activation is a normal software licensing mechanism and is required to use
        the licensed software.
      </p>

      <h2>4. Prohibited Actions</h2>
      <ul>
        <li>Unauthorized copying</li>
        <li>Unauthorized distribution</li>
        <li>Unauthorized resale</li>
        <li>Sublicensing</li>
        <li>Circumventing device limits</li>
        <li>Bypassing activation controls</li>
        <li>Unauthorized modification, reverse engineering or derivative works</li>
        <li>Unauthorized access to backend systems or infrastructure</li>
      </ul>

      <h2>5. Updates</h2>
      <p>
        Updates, patches and new versions provided during your access period are covered by this Agreement
        unless accompanied by separate terms.
      </p>

      <h2>6. Term and Termination</h2>
      <p>
        The license ends when the applicable access period expires or is terminated under the Terms of
        Service. On termination you must stop using the software, and activation for the designated devices
        may be disabled.
      </p>

      <h2>7. Disclaimer and Liability</h2>
      <p>
        Except where prohibited by law, the software is provided "as is". The disclaimers and limitations of
        liability set out in the Terms of Service apply to this Agreement.
      </p>

      <h2>8. Governing Law</h2>
      <p>This Agreement is governed by the laws of {SITE.jurisdiction}.</p>

      <h2>9. Contact</h2>
      <p>{SITE.supportEmail}</p>
    </LegalPage>
  );
}
