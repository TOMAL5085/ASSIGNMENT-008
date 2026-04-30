'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const image = formData.get("image")?.toString().trim();

    setLoading(true);
    try {
      await authClient.updateUser({
        name,
        image: image || null,
      });
      toast.success("Profile updated successfully");
      router.push("/my-profile");
      router.refresh();
    } catch (error) {
      toast.error(error?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return (
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-8">
        <p className="text-black/60">Loading update form...</p>
      </section>
    );
  }

  return (
    <section className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-black/40">
          Update information
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black">
          Edit your name and image
        </h1>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-black">Name</span>
          <input
            name="name"
            defaultValue={session?.user?.name || ""}
            required
            className="input input-bordered h-12 rounded-2xl border-black/10 bg-white"
            placeholder="Your updated name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-black">Image URL</span>
          <input
            name="image"
            defaultValue={session?.user?.image || ""}
            className="input input-bordered h-12 rounded-2xl border-black/10 bg-white"
            placeholder="https://example.com/photo.jpg"
          />
        </label>

        <button type="submit" className="btn btn-neutral h-12 rounded-full" disabled={loading}>
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </section>
  );
}
