import AuthForm from "@/components/auth-form";

export default async function RegisterPage({ searchParams }) {
  const params = await searchParams;
  const nextUrl = params?.next || "/";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-black/45">
            Public route
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-black">
            Register and join the tile gallery community.
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/65">
            Create an account with your name, email, photo URL, and password.
            After successful registration, users return to the login page.
          </p>
        </div>
        <AuthForm mode="register" nextUrl={nextUrl} />
      </div>
    </div>
  );
}
