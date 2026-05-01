import Link from "next/link";

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-[#171412] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Contact Us
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
            A tile gallery made for elegant interiors.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Browse curated surfaces, search by style, and open detailed product
            views designed with a warm showroom-inspired layout.
          </p>
          <Link
            href="/all-tiles"
            className="btn mt-6 rounded-full border-0 bg-[#d6a458] text-black hover:bg-[#e4bd71]"
          >
            Browse Tiles
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Social
            </p>
            <ul className="mt-4 space-y-3">
              {socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/72 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <p>hello@tilesgallery.example</p>
              <p>+880 1000 000 000</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
