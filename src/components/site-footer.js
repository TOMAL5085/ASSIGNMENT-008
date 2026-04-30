import Link from "next/link";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Bring the gallery to your next interior concept.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
            Browse artisanal tile surfaces, save favorites, and explore modern
            texture stories in a responsive showcase built for the assignment.
          </p>
          <Link
            href="/all-tiles"
            className="btn btn-primary mt-6 rounded-full border-0 bg-[#d9a441] text-black hover:bg-[#efbf56]"
          >
            Browse Tiles
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Social
            </p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Email
            </p>
            <a
              href="mailto:hello@tilesgallery.example"
              className="mt-4 block text-sm text-white/70 transition hover:text-white"
            >
              hello@tilesgallery.example
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
