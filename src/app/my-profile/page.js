import ProfileClient from "@/components/profile-client";

export const metadata = {
  title: "My Profile | Tiles Gallery",
  description: "View and manage your logged-in profile information.",
};

export default function MyProfilePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-8 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-black/45">
            Private route
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-black sm:text-6xl">
            My Profile
          </h1>
        </div>
        <div className="section-shell rounded-[2.25rem] p-2">
          <ProfileClient />
        </div>
      </div>
    </div>
  );
}
