import UpdateProfileForm from "@/components/update-profile-form";

export default function UpdateProfilePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-8 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-black/45">
            Private route
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Update Information
          </h1>
        </div>
        <UpdateProfileForm />
      </div>
    </div>
  );
}
