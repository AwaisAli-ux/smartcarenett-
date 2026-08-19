import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SMART CARE TV" },
      {
        name: "description",
        content:
          "SMART CARE TV does not collect personal data from your phone or TV. Learn what information we collect for trials and orders, how we use it, and how to request deletion.",
      },
      { property: "og:title", content: "SMART CARE TV Privacy Policy" },
      { property: "og:description", content: "What information SMART CARE TV collects, how it is used, and your rights to deletion." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm text-muted-foreground">
        Effective date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <h2>Overview</h2>
      <p>
        This Privacy Policy explains how {SITE.legalName} ("SMART CARE TV", "we", "us") handles information
        in connection with the SMART CARE TV website, TV application and mobile services. We are committed to
        collecting as little personal information as possible and to being transparent about the limited data
        we do process.
      </p>

      <h2>Information We Do Not Collect</h2>
      <p>
        SMART CARE TV is designed to minimize data collection. We do not collect, access, or retrieve any
        personal data stored on your mobile phone or TV device. We do not access your contacts, photos, files,
        browsing history, location, or any other content stored on your devices.
      </p>
      <p>
        The SMART CARE TV app does not require you to provide an email address or create a password-protected
        account to log in or use the service on your TV. The TV application uses a Unique Device ID only to
        route reminders to the correct screen, and this identifier is not linked to your personal identity.
      </p>

      <h2>Information We May Collect</h2>
      <p>
        We only collect personal information when you voluntarily provide it to us for a specific purpose, such
        as requesting a free trial, placing an order, or contacting customer support. The information we may
        collect is limited to:
      </p>
      <ul>
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Your message or request details</li>
      </ul>
      <p>
        This information is retained solely to process your request, provide activation or support, and
        communicate with you about the service you requested. We do not use this information for any unrelated
        purpose, marketing, or profiling.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the limited information described above only to:</p>
      <ul>
        <li>Respond to free trial requests</li>
        <li>Process and fulfil orders</li>
        <li>Process and manage recurring subscription payments and renewals</li>
        <li>Provide customer support and activation assistance</li>
        <li>Communicate with you about your request or service</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell, rent, or share your personal information with third parties for marketing or any other
        unrelated purpose.
      </p>
      <p>
        The only exception is when we use a payment processor to generate a payment link for your order. In that
        case, only the information necessary to create the payment link — typically your name — is provided to
        the processor. No unnecessary personal information is shared, and we do not share your full payment card
        details because those are entered directly into the payment processor's secure, hosted checkout.
      </p>
      <p>
        We may also disclose information if required by law, court order, or legal process, or if necessary to
        protect our rights, property, or safety.
      </p>

      <h2>Your Rights and Data Deletion</h2>
      <p>
        You have the right to request access to, correction of, or deletion of your personal information. If
        you would like us to delete the information you have provided, please contact our support team at{" "}
        {SITE.privacyEmail}. We will process your request and delete your information where applicable, unless
        we are required to retain it for legal, accounting, or fraud-prevention purposes.
      </p>

      <h2>Message Privacy</h2>
      <p>
        SMART CARE TV is designed for temporary reminders and notifications rather than permanent message
        storage. Reminders are processed only as needed to deliver them to the designated TV and are removed
        from active display after their configured display period.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect the limited information we hold. No
        method of transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>The Service is intended for use by adults and is not directed to children.</p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be reflected on this page
        with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or would like to exercise your privacy rights,
        please contact us at:
      </p>
      <p>
        {SITE.privacyEmail} · {SITE.legalName} · {SITE.address}
      </p>
    </LegalPage>
  );
}
