import Link from "next/link";

import FeaturedTilesCarousel from "@/components/featured-tiles-carousel";
import Marquee from "@/components/marquee";
import TileCard from "@/components/tile-card";
import { getFeaturedTiles } from "@/lib/tiles";

export default async function Home() {
  const featuredTiles = await getFeaturedTiles(4);
  const marqueeItems = [
    `New Arrivals: ${featuredTiles[0]?.title || "Ceramic Blue Tile"}`,
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community of tile enthusiasts",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(217,164,65,0.28),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.12),_transparent_25%),linear-gradient(180deg,_#f3efe7_0%,_#f8f5ef_45%,_#efe7da_100%)]" />
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-black/70 shadow-sm">
              A curated tile showcase for surfaces, patterns, and ideas
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">
                Tiles Gallery
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Discover your perfect aesthetic.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-black/70 sm:text-lg">
                Explore handcrafted textures, modern geometric tiles, and calm
                surface stories built to inspire interiors with balance and
                character.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/all-tiles" className="btn btn-neutral rounded-full px-7">
                Browse Now
              </Link>
              <Link href="/login" className="btn btn-outline rounded-full px-7">
                Login
              </Link>
            </div>
            <Marquee items={marqueeItems} />
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.1)] backdrop-blur">
            <FeaturedTilesCarousel tiles={featuredTiles} />
          </div>
        </div>

        <section className="space-y-6 pt-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-black/45">
                Featured Tiles
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
                Top picks from the gallery
              </h2>
            </div>
            <Link href="/all-tiles" className="text-sm font-medium text-black underline-offset-4 hover:underline">
              View all tiles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
