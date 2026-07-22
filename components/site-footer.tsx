import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { navigation, siteLinks } from "@/lib/site-data";

const socials = [
  { label: "GitHub", href: siteLinks.github },
  { label: "LinkedIn", href: siteLinks.linkedin },
  { label: "X / Twitter", href: siteLinks.twitter },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-12 sm:py-16">
      <div className="site-container">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="brand-mark" aria-label="Psami — home">
              <span className="brand-prompt" aria-hidden="true">~/</span>
              <span>psami</span><span className="text-accent">.</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-muted">
              Frontend and full-stack engineering for thoughtful, scalable digital products.
            </p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} className="footer-link" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">Elsewhere</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {socials.map((item) => (
                <a key={item.href} className="footer-link group" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Okechukwu Samuel Owhondah. All rights reserved.</p>
          <p className="font-mono">Built with Next.js + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
