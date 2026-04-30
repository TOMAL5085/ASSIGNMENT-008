'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function handleLogout() {
    try {
      await authClient.signOut();
      router.push("/");
      router.refresh();
    } catch {
      router.push("/");
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3efe7]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-semibold tracking-[0.24em] text-white shadow-lg shadow-black/15">
            TG
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight text-black">
              Tiles Gallery
            </span>
            <span className="block text-xs uppercase tracking-[0.28em] text-black/45">
              Curated surface stories
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active ? "text-black" : "text-black/55 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {!session ? (
            <Link href="/login" className="btn btn-sm btn-neutral rounded-full">
              Login
            </Link>
          ) : (
            <>
              <div className="hidden flex-col items-end text-right xl:flex">
                <span className="text-xs uppercase tracking-[0.24em] text-black/40">
                  Signed in as
                </span>
                <span className="text-sm font-medium text-black">
                  {session.user?.name || session.user?.email}
                </span>
              </div>
              <Link
                href="/my-profile"
                className="btn btn-sm btn-outline rounded-full"
              >
                Profile
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-neutral rounded-full"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>

        <details className="dropdown dropdown-end md:hidden">
          <summary className="btn btn-ghost btn-square rounded-full border border-black/10 bg-white/70">
            <span className="sr-only">Open menu</span>
            <span className="text-lg">☰</span>
          </summary>
          <div className="menu dropdown-content mt-3 w-64 rounded-3xl border border-black/10 bg-white p-4 shadow-xl shadow-black/10">
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
                  <Link
                    href="/login"
                    className="btn btn-neutral w-full rounded-full"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/my-profile"
                      className="btn btn-outline w-full rounded-full"
                    >
                      Profile
                    </Link>
                    <button
                      type="button"
                      className="btn btn-neutral mt-2 w-full rounded-full"
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
    </header>
  );
}
