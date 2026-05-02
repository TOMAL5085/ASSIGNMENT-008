import Image from "next/image";
import { notFound } from "next/navigation";

import { getTileById } from "@/lib/tiles";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tile = await getTileById(id);

  if (!tile) {
    return {
      title: "Tile not found | Tiles Gallery",
    };
  }

  return {
    title: `${tile.title} | Tiles Gallery`,
    description: tile.description,
  };
}

export default async function TileDetailsPage({ params }) {
  const { id } = await params;
  const tile = await getTileById(id);

  if (!tile) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid w-full gap-8 rounded-[2.5rem] border border-black/10 bg-white/80 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
        <div className="overflow-hidden rounded-[2rem] bg-black/5">
          <div className="relative aspect-square w-full">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-black/45">
              Single tile details
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-black sm:text-6xl">
              {tile.title}
            </h1>
            <p className="text-base leading-8 text-black/65">
              {tile.description}
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] bg-black/5 p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Creator
              </p>
              <p className="mt-2 text-sm font-medium text-black">{tile.creator}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Style Description
              </p>
              <p className="mt-2 text-sm font-medium text-black">
                {tile.styleDescription}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Material
              </p>
              <p className="mt-2 text-sm font-medium text-black">{tile.material}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Dimensions
              </p>
              <p className="mt-2 text-sm font-medium text-black">{tile.dimensions}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Price
              </p>
              <p className="mt-2 text-sm font-medium text-black">
                {tile.currency} {tile.price}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Stock
              </p>
              <p className="mt-2 text-sm font-medium text-black">
                {tile.inStock ? "In stock" : "Out of stock"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tile.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
