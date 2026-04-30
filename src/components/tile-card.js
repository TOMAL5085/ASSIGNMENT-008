import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile, compact = false }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(0,0,0,0.12)]">
      <div className={`relative ${compact ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-black">
              {tile.title}
            </h3>
            <p className="mt-1 text-sm text-black/55">{tile.creator}</p>
          </div>
          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            {tile.currency} {tile.price}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-black/65">
          {tile.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tile.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/tile/${tile.id}`} className="btn btn-neutral w-full rounded-full">
          View Details
        </Link>
      </div>
    </article>
  );
}
