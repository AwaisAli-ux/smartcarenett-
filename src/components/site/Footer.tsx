import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const PRODUCT = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/features", label: "Features" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
] as const;

const SUPPORT = [
  { to: "/free-trial", label: "Start Free Trial" },
  { to: "/contact", label: "Contact" },
] as const;

const LEGAL = [
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/refund-policy", label: "Refund & Cancellation Policy" },
  { to: "/license", label: "Software License / EULA" },
  { to: "/acceptable-use", label: "Acceptable Use Policy" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/accessibility", label: "Accessibility Statement" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* CTA Banner Above Footer */}
      <div className="container-page pt-12 sm:pt-16 md:pt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#171313] px-6 py-14 sm:px-12 sm:py-20 md:py-24 text-center shadow-2xl">
          {/* Subtle warm ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.18]">
              Keep important messages and reminders visible on the TV that matters most.
            </h2>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 text-sm font-semibold shadow-md transition-colors"
              >
                Get Smart Care TV
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3 text-sm font-semibold transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="SMART CARE TV logo"
              className="h-9 w-9 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="text-lg font-extrabold tracking-tight">SMART CARE TV</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{SITE.tagline}</p>
          <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">Legal company name</dt>
              <dd>{SITE.legalName}</dd>
            </div>
            <div>
              <dt className="sr-only">Business address</dt>
              <dd>{SITE.address}</dd>
            </div>
            <div>
              <dt className="sr-only">Support email</dt>
              <dd>{SITE.supportEmail}</dd>
            </div>
          </dl>
        </div>

        <FooterColumn title="Product" links={PRODUCT} />
        <FooterColumn title="Support" links={SUPPORT} />
        <FooterColumn title="Legal" links={LEGAL} />
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} SMART CARE TV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
