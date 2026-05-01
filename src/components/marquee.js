export default function Marquee({ items }) {
  const text = items.join(" | ");

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/80 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-black/5 pb-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-black/45">
          Studio updates
        </p>
        <span className="rounded-full border border-black/10 bg-[#f4ede1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
          Live feed
        </span>
      </div>

      <div className="overflow-hidden rounded-full border border-black/10 bg-[#fbf7f0] px-4 py-3">
        <div className="marquee-track flex min-w-max items-center gap-4 text-sm font-medium text-black/70">
          <span>{text}</span>
          <span aria-hidden="true">{text}</span>
        </div>
      </div>
    </div>
  );
}
