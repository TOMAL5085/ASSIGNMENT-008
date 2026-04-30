import AuthForm from "@/components/auth-form";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const nextUrl = params?.next || "/my-profile";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-black/45">
            Public route
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-black">
            Log in from the navbar or from a protected page redirect.
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/65">
            Use email and password, or continue with Google. When login
            succeeds, users are sent to the home page or the private page they
            originally tried to open.
          </p>
        </div>
        <AuthForm mode="login" nextUrl={nextUrl} />
      </div>
    </div>
  );
}
