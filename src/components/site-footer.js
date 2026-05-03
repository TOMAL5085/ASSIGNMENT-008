'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const socials = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
  { href: "/login", label: "Login" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M14.2 8.3H16V5.5h-1.8c-2.2 0-3.9 1.7-3.9 3.8v1.7H8.7v2.8h1.6V19h3v-5.2h2.1l.4-2.8h-2.5V9.7c0-.8.5-1.4 1.3-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6.7 8.4H4V19h2.7V8.4Zm-1.3-1.5A1.6 1.6 0 1 0 5.4 3.7a1.6 1.6 0 0 0 0 3.2ZM20 19h-2.7v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V19h-2.7V8.4h2.6v1.5h.1c.4-.8 1.4-1.7 3-1.7 3 0 3.5 2 3.5 4.7V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 8l5 4 5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7.5 4.8 9 4.2c.8-.3 1.7 0 2.1.8l1 2.1c.4.8.2 1.8-.5 2.3l-1.4 1c.9 1.8 2.4 3.3 4.2 4.2l1-1.4c.5-.7 1.5-.9 2.3-.5l2.1 1c.8.4 1.1 1.3.8 2.1l-.6 1.5c-.4 1.1-1.6 1.7-2.8 1.4C11.3 20.3 3.7 12.7 4.8 6.3c.2-1.2.9-2.4 2.7-1.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m6.5 8 5.5 4 5.5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteFooter() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogoClick(event) {
    event.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");
    router.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="mt-auto border-t border-black/10 bg-[#14110f] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="space-y-6">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.34em] text-white/55 transition hover:bg-white/10"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8b06a] text-[10px] font-bold tracking-[0.22em] text-black">
                TG
              </span>
              Tiles Gallery
            </Link>

            <div className="max-w-xl space-y-4">
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Designed for elegant interiors and curated surface stories.
              </h2>
              <p className="text-sm leading-7 text-white/68 sm:text-base">
                Explore a premium tile collection built with a warm showroom
                feel, searchable gallery pages, private profile features, and
                a refined browsing experience from home to checkout.
              </p>
            </div>

            <Link
              href="/all-tiles"
              className="btn rounded-full border-0 bg-[#d8b06a] px-6 text-black hover:bg-[#e4bf7f]"
            >
              Browse Tiles
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Quick Links
              </p>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Social Media
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Contact Us
            </p>
            <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="space-y-4 text-sm text-white/72">
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/55">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="block text-white">Email</span>
                    hello@tilesgallery.example
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/55">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-white">Phone</span>
                    +880 1000 000 000
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/55">
                    <LocationIcon />
                  </span>
                  <span>
                    <span className="block text-white">Location</span>
                    Dhaka, Bangladesh
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/55">
                    <ContactIcon />
                  </span>
                  <span>
                    <span className="block text-white">Support</span>
                    Mon-Fri, 10:00 AM - 6:00 PM
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.28em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Tiles Gallery</p>
          <p>Curated surface stories for modern spaces</p>
        </div>
      </div>
    </footer>
  );
}
