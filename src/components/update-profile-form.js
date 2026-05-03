'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read the selected image"));
    reader.readAsDataURL(file);
  });
}

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const imageFile = formData.get("imageFile");

    setLoading(true);
    try {
      const payload = { name };

      if (imageFile instanceof File && imageFile.size > 0) {
        payload.image = await fileToDataUrl(imageFile);
      }

      const result = await authClient.updateUser(payload);

      if (result?.error || !result?.data?.status) {
        throw new Error(result?.error?.message || "Failed to update profile");
      }

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
          <span className="text-sm font-medium text-black">Upload Photo</span>
          <input
            name="imageFile"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered h-12 rounded-2xl border-black/10 bg-white px-4 py-2 text-sm"
          />
          <p className="text-xs text-black/45">
            Choose a photo from your device to update your profile picture.
            Leave it empty if you only want to change your name.
          </p>
        </label>

        {session?.user?.image ? (
          <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/5 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session.user.image}
              alt={session?.user?.name || "Profile photo"}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-sm text-black/65">
              <p className="font-medium text-black">Current photo</p>
              <p>This will be replaced if you upload a new one.</p>
            </div>
          </div>
        ) : null}

        <button type="submit" className="btn btn-neutral h-12 rounded-full" disabled={loading}>
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </section>
  );
}
