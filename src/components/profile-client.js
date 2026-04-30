'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export default function ProfileClient() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-8">
        <p className="text-black/60">Loading profile...</p>
      </section>
    );
  }

  const user = session?.user;

  return (
    <section className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-black text-2xl font-semibold text-white">
          {user?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
          ) : (
            (user?.name || user?.email || "?").slice(0, 1).toUpperCase()
          )}
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-black/40">
            Logged in profile
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            {user?.name || "User"}
          </h1>
          <p className="text-sm text-black/65">{user?.email}</p>
        </div>
      </div>

      <div className="grid gap-4 rounded-3xl bg-black/5 p-5 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/45">Name</p>
          <p className="mt-2 text-sm font-medium text-black">{user?.name}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/45">Email</p>
          <p className="mt-2 text-sm font-medium text-black">{user?.email}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/45">Avatar</p>
          <p className="mt-2 truncate text-sm font-medium text-black">
            {user?.image || "No image linked"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/my-profile/update" className="btn btn-neutral rounded-full">
          Update Information
        </Link>
        <button
          type="button"
          className="btn btn-outline rounded-full"
          onClick={async () => {
            await authClient.signOut();
            router.push("/");
            router.refresh();
          }}
        >
          Logout
        </button>
      </div>
    </section>
  );
}
