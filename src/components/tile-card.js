import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile, compact = false, featured = false }) {
  return (
    <article className={`group overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(0,0,0,0.12)] ${compact ? "self-start" : "flex h-full flex-col"}`}>
      <div className={`relative ${compact ? (featured ? "aspect-[4/3]" : "aspect-[4/3]") : "aspect-[5/4]"}`}>
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div
        className={`flex flex-col ${
          compact
            ? featured
              ? "space-y-2.5 p-4 sm:p-4.5"
              : "space-y-2.5 p-4 sm:p-4.5"
            : "flex-1 space-y-4 p-5"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`line-clamp-2 font-display font-semibold leading-[0.98] tracking-tight text-black ${
                compact ? "text-2xl sm:text-[2.15rem]" : "text-3xl"
              }`}
            >
              {tile.title}
            </h3>
            <p
              className={`mt-2 uppercase text-black/45 ${
                compact ? "text-[10px] tracking-[0.2em] sm:text-[11px]" : "text-xs tracking-[0.22em]"
              }`}
            >
              {tile.creator}
            </p>
          </div>
          <span className={`inline-flex shrink-0 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs font-medium text-white ${compact ? "sm:px-3.5" : ""}`}>
            {tile.currency} {tile.price}
          </span>
        </div>
        <p
          className={`text-sm leading-6 text-black/65 ${
            compact ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {tile.description}
        </p>
        <div
          className={`flex flex-wrap gap-2 ${
            compact ? "pt-1" : "min-h-[2.5rem]"
          }`}
        >
          {tile.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-full bg-black/5 font-medium text-black/70 ${compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/tile/${tile.id}`}
          className={`btn btn-neutral w-full rounded-full ${
            compact ? "btn-sm mt-1 h-10" : "mt-auto"
          }`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
