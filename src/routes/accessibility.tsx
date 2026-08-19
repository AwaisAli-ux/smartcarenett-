import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — SMART CARE TV" },
      {
        name: "description",
        content:
          "SMART CARE TV's approach to accessible design: semantic headings, labelled forms, keyboard navigation, readable contrast and responsive typography.",
      },
      { property: "og:title", content: "SMART CARE TV Accessibility Statement" },
      { property: "og:description", content: "Our approach to accessible design and how to report barriers." },
    ],
  }),
  component: Accessibility,
});

function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement">
      <h2>Our Approach</h2>
      <p>
        SMART CARE TV aims to make this website usable for as many people as possible, including people who
        use assistive technology.
      </p>

      <h2>What We Do</h2>
      <ul>
        <li>Proper heading hierarchy on every page</li>
        <li>Labelled form fields and clear, accessible error messages</li>
        <li>Keyboard-navigable links, buttons and menus with visible focus states</li>
        <li>Colour contrast intended to remain readable across devices</li>
        <li>Alternative text for meaningful images</li>
        <li>Responsive typography and touch-friendly targets on mobile</li>
      </ul>

      <h2>Ongoing Work</h2>
      <p>
        Accessibility is an ongoing effort. We review the website as it changes and address issues we identify
        or that customers report.
      </p>

      <h2>Feedback</h2>
      <p>
        If you encounter an accessibility barrier on this website, please contact {SITE.supportEmail} and
        describe the page and the difficulty so we can help and address it.
      </p>
    </LegalPage>
  );
}
