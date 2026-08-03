import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/copyright-licensing", label: "Copyright & Licensing" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-black">
      <div className="container-lux py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-master.png" alt="Maison Motion Studio" className="h-16 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-bronze">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-bronze">Studio</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-hairline pt-8 text-[10px] uppercase tracking-[0.15em] text-foreground/40 md:justify-start">
          {legalLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-3">
              {i > 0 && <span className="text-bronze/50">&middot;</span>}
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-foreground/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Maison Motion Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bronze"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
