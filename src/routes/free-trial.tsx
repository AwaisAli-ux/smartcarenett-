import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/free-trial")({
  head: () => ({
    meta: [
      { title: "Request a Free Trial — SMART CARE TV" },
      {
        name: "description",
        content:
          "Eligible customers may receive a 24–48 hour SMART CARE TV free trial. Submit your details and our support team will contact you to help you get started.",
      },
      { property: "og:title", content: "Request a SMART CARE TV Free Trial" },
      { property: "og:description", content: "Eligible customers may receive a 24–48 hour free trial." },
    ],
  }),
  component: FreeTrial,
});

type Errors = Partial<Record<"fullName" | "email", string>>;

function FreeTrial() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const preferredContact = String(data.get("preferredContact") ?? "Email").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!fullName) next.fullName = "Please enter your full name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/support@smartcaretv.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Full Name": fullName,
          "Email Address": email,
          "Phone Number": phone || "Not provided",
          "Preferred Contact Method": preferredContact,
          "Message": message || "No extra message provided",
          _subject: `New Free Trial Request from ${fullName}`,
          _replyto: email,
          _captcha: "false",
          _template: "table",
        }),
      });
    } catch {
      // Proceed gracefully
    } finally {
      setSubmitting(false);
      navigate({ to: "/trial-success" });
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Free Trial"
        title="Try SMART CARE TV Before You Subscribe"
        description="Experience SMART CARE TV before choosing a plan. Submit your details and our support team will contact you to help you get started."
      />

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
          >
            <h2 className="text-xl font-bold">Request Free Trial</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field
                id="fullName"
                label="Full name"
                required
                error={errors.fullName}
                input={<Input id="fullName" name="fullName" autoComplete="name" aria-required="true" />}
              />
              <Field
                id="email"
                label="Email address"
                required
                error={errors.email}
                input={<Input id="email" name="email" type="email" autoComplete="email" aria-required="true" />}
              />
              <Field
                id="phone"
                label="Phone number (optional)"
                input={<Input id="phone" name="phone" inputMode="tel" autoComplete="tel" />}
              />
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold">Preferred contact method</legend>
              <div className="mt-3 flex flex-wrap gap-4">
                {["Email", "Phone Call"].map((option, i) => (
                  <label key={option} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option}
                      defaultChecked={i === 0}
                      className="h-4 w-4 accent-[var(--primary)]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2"
                placeholder="Tell us anything you'd like us to know."
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              By submitting this form, you agree that SMART CARE TV may use the information you provide to
              contact you regarding your trial request and customer support. Please review our{" "}
              <Link to="/privacy" className="text-primary underline underline-offset-4">
                Privacy Policy
              </Link>{" "}
              for more information. See also our{" "}
              <Link to="/terms" className="text-primary underline underline-offset-4">
                Terms of Service
              </Link>
              .
            </p>

            <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full sm:w-auto">
              {submitting ? "Requesting..." : "Request Free Trial"}
            </Button>
          </form>

          <aside className="rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-base font-bold">24–48 Hour Free Trial</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Eligible customers may receive a 24–48 hour free trial. Our support team reviews trial requests
              and will contact you using the details you provide.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We never ask for passwords, card numbers or government identification to arrange a trial.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              SMART CARE TV is designed to work through a compatible Google TV or Android TV environment.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  input,
  required,
  error,
}: {
  id: string;
  label: string;
  input: React.ReactNode;
  required?: boolean | undefined;
  error?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </Label>
      <div className="mt-2">{input}</div>
      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
