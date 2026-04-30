export default function Marquee({ items }) {
  const text = items.join(" | ");

  return (
    <div className="overflow-hidden rounded-full border border-black/10 bg-white/70 px-5 py-3 shadow-sm">
      <div className="marquee-track flex min-w-max items-center gap-4 text-sm font-medium text-black/70">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}
