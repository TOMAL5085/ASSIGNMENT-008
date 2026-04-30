export default function Loading() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-10 shadow-sm backdrop-blur">
        <div className="h-4 w-36 rounded-full bg-black/10" />
        <div className="mt-6 h-10 w-3/4 rounded-2xl bg-black/10" />
        <div className="mt-4 h-4 w-full rounded-full bg-black/10" />
        <div className="mt-3 h-4 w-5/6 rounded-full bg-black/10" />
      </div>
    </main>
  );
}
