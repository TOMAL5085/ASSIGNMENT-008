import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl rounded-3xl border border-black/10 bg-white/70 p-10 shadow-sm backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-black/50">
          Not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black">
          That tile is not in the gallery.
        </h1>
        <p className="mt-4 text-base leading-7 text-black/70">
          The page you are looking for does not exist or has moved.
        </p>
        <Link className="btn btn-primary mt-8" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
