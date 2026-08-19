import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — SMART CARE TV" },
      {
        name: "description",
        content:
          "How the SMART CARE TV website uses essential and security/session cookies, and how you can control cookies in your browser.",
      },
      { property: "og:title", content: "SMART CARE TV Cookie Policy" },
      { property: "og:description", content: "Cookie categories used by the SMART CARE TV website." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage title="Cookie Policy">
      <h2>About Cookies</h2>
      <p>
        Cookies are small files stored by your browser when you visit a website. This policy explains the
        cookie categories used by the SMART CARE TV website.
      </p>

      <h2>Essential Cookies</h2>
      <p>
        Essential cookies are required for the website to function, for example to load pages correctly and to
        remember basic preferences during your visit. These cannot be switched off through the website.
      </p>

      <h2>Security / Session Cookies</h2>
      <p>
        Security and session cookies help protect the website against abuse, maintain the integrity of form
        submissions and support basic site security.
      </p>

      <h2>Analytics Cookies</h2>
      <p>
        The SMART CARE TV website does not currently use third-party advertising or cross-site tracking
        cookies. If analytics cookies are introduced in the future, this policy will be updated to describe
        the provider, purpose and how to opt out.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        Most browsers let you view, delete and block cookies through their settings. Blocking essential
        cookies may affect how parts of the website work.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies can be sent to {SITE.privacyEmail} ({SITE.legalName}).
      </p>
    </LegalPage>
  );
}
