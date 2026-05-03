'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
];

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-12 w-12 grid-cols-2 gap-1 rounded-2xl border border-black/10 bg-[#111] p-2 shadow-sm"
    >
      <span className="rounded-[0.35rem] bg-[#efe2c8]" />
      <span className="rounded-[0.35rem] bg-[#caa66b]" />
      <span className="rounded-[0.35rem] bg-[#8e7a63]" />
      <span className="rounded-[0.35rem] bg-[#f6f0e6]" />
    </span>
  );
}

function ProfileBadge({ user }) {
  const label = user?.name || user?.email || "Profile";
  const initial = (user?.name || user?.email || "?").slice(0, 1).toUpperCase();

  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-2 transition hover:bg-white">
      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black text-xs font-semibold uppercase text-white">
        {user?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt={label} className="h-full w-full object-cover" />
        ) : (
          initial
        )}
      </span>
      <span className="max-w-[7rem] truncate text-sm font-semibold text-black">
        {label}
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();

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

  async function handleLogout() {
    try {
      await authClient.signOut();
    } finally {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f0e6]/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3" onClick={handleLogoClick}>
            <LogoMark />
            <span className="leading-tight">
              <span className="block font-display text-2xl font-semibold tracking-tight text-black">
                Tiles Gallery
              </span>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-black/45">
                Curated surface stories
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium tracking-[0.18em] uppercase transition ${
                      active ? "text-black" : "text-black/50 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              {!session ? (
                <Link href="/login" className="btn rounded-full border-black/10 bg-black text-white hover:bg-black/90">
                  Login
                </Link>
              ) : (
                <>
                  <Link href="/my-profile" className="group">
                    <ProfileBadge user={session.user} />
                  </Link>
                  <button
                    type="button"
                    className="btn rounded-full border-black/10 bg-black text-white hover:bg-black/90"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

          <details className="dropdown dropdown-end md:hidden">
            <summary className="btn btn-ghost btn-square rounded-full border border-black/10 bg-white/60">
              <span className="sr-only">Open menu</span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                Menu
              </span>
            </summary>
            <div className="menu dropdown-content mt-3 w-64 rounded-[1.75rem] border border-black/10 bg-white p-4 shadow-xl shadow-black/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-black/80 hover:bg-black/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-black/10 pt-3">
                  {!session ? (
                    <Link href="/login" className="btn w-full rounded-full border-black/10 bg-black text-white">
                      Login
                    </Link>
                  ) : (
                    <>
                      <Link href="/my-profile" className="w-full">
                        <ProfileBadge user={session.user} />
                      </Link>
                      <button
                        type="button"
                        className="btn mt-2 w-full rounded-full border-black/10 bg-black text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
