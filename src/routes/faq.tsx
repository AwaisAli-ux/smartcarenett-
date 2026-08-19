import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

const FAQS = [
  { q: "What is SMART CARE TV?", a: "SMART CARE TV is a reminder and notification application that allows users to send temporary notes and reminders from a mobile device to a designated TV." },
  { q: "How does it work?", a: "Install the TV application, use the Device ID shown on the TV to connect your mobile device, and send reminders from your phone." },
  { q: "Do I need an email login on the TV?", a: "No traditional email/password login is required on the TV application." },
  { q: "Can I use SMART CARE TV at home?", a: "Yes. SMART CARE TV can be used for family and household reminders." },
  { q: "Can businesses use it?", a: "Yes. Businesses can use it for meeting reminders, temporary announcements and shared-screen notices." },
  { q: "Can I use multiple TVs?", a: "Yes. Multi-device plans are available for customers who want to use SMART CARE TV on multiple designated TVs." },
  { q: "What happens if I replace my TV?", a: "Contact our support team. After verification, the previous device can be deactivated and the replacement device can be activated under the eligible subscription." },
  { q: "Are my notes stored permanently?", a: "SMART CARE TV is designed for temporary reminders rather than permanent message storage." },
  { q: "What happens when a reminder expires?", a: "The reminder is removed from the active TV display after its configured display period." },
  {
    q: "Why didn't my reminder show up on the TV screen?",
    a: "A few common reasons a reminder might not display:\n\n• The TV was completely powered off or unplugged at the scheduled time.\n• The TV wasn't connected to the internet at the scheduled time.\n• The app was closed, force-stopped, or removed from background processes.\n• Background permissions or notification settings for the app were restricted in your TV's system settings.\n• The app was undergoing a scheduled update at that time.\n\nTo avoid missed reminders, make sure the app has background/autostart permission enabled in your TV's settings, and keep your TV connected to the internet. For anything time-critical, we recommend also keeping a backup reminder (like a phone alarm).",
  },
  { q: "Is there a free trial?", a: "Eligible customers may receive a 24–48 hour free trial." },
  { q: "How do I request a trial?", a: "Complete the Start Free Trial form and our support team will contact you." },
  { q: "What happens after I purchase?", a: "Our support team will contact you after payment confirmation to assist with activation." },
  { q: "Are subscriptions recurring?", a: "Yes. All SMART CARE TV plans are recurring subscriptions. After the selected billing period ends, your payment method will be automatically charged for the next billing period unless you cancel beforehand." },
  { q: "How do I cancel?", a: "Contact our support team at any time to cancel. Cancellation stops future automatic renewals at the end of your current billing period." },
  { q: "Can I get a refund?", a: "Eligible purchases may qualify for a refund under our 3-day Refund Policy." },
  { q: "What if my TV does not directly support the application?", a: "A compatible external Google TV or Android TV device may allow you to use SMART CARE TV on your existing television." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SMART CARE TV Reminder App Questions" },
      {
        name: "description",
        content:
          "Answers about SMART CARE TV: how the TV reminder app works, Device ID connection, multi-TV plans, trials, activation and refunds.",
      },
      { property: "og:title", content: "SMART CARE TV FAQ" },
      { property: "og:description", content: "How the TV reminder app works, plans, trials, activation and refunds." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything customers usually ask about SMART CARE TV reminders, plans, trials and support."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/free-trial">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
