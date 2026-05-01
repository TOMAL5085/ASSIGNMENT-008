import Image from "next/image";
import Link from "next/link";

import FeaturedTilesCarousel from "@/components/featured-tiles-carousel";
import Marquee from "@/components/marquee";
import TileCard from "@/components/tile-card";
import { getFeaturedTiles, getTiles, getTileCategories } from "@/lib/tiles";

const brandValues = [
  {
    title: "Craftsmanship",
    description:
      "Elegant surfaces with rich texture, careful tones, and a showroom-inspired presentation.",
  },
  {
    title: "Durability",
    description:
      "Designed for everyday spaces where beauty and resilience need to work together.",
  },
  {
    title: "Versatility",
    description:
      "A curated gallery that moves from living rooms and kitchens to feature walls and public spaces.",
  },
];

export default async function Home() {
  const [featuredTiles, tiles, categories] = await Promise.all([
    getFeaturedTiles(4),
    getTiles(),
    getTileCategories(),
  ]);

  const marqueeItems = [
    `New Arrivals: ${featuredTiles[0]?.title || "Apollo 18 Veinstone"}`,
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community and explore curated surfaces",
  ];

  const collectionCategories = categories
    .map((category) => {
      const preview = tiles.find((tile) => tile.category === category);
      return preview ? { category, preview } : null;
    })
    .filter(Boolean)
    .slice(0, 6);

  const heroTiles = featuredTiles.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(214,164,88,0.18),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(23,20,18,0.08),_transparent_20%),linear-gradient(180deg,_#f7f1e8_0%,_#f5efe6_44%,_#efe5d7_100%)]" />

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[2.25rem] border border-black/10 bg-white/50 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur md:p-6">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-black/8 bg-[#f8f3ea] p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <div className="inline-flex rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-black/55">
                  Curated surface gallery
                </div>
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                    Tiles Gallery
                  </p>
                  <h1 className="max-w-xl font-display text-6xl font-semibold tracking-tight text-black sm:text-7xl lg:text-[5.5rem]">
                    Discover Your Perfect Aesthetic
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-black/70 sm:text-lg">
                    Explore a curated tile collection with elegant finishes,
                    enduring materials, and a warm editorial layout inspired by
                    premium showroom websites.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/all-tiles" className="btn rounded-full border-0 bg-black text-white hover:bg-black/85">
                  Browse Now
                </Link>
                <Link href="/login" className="btn rounded-full border-black/10 bg-white/80 text-black hover:bg-white">
                  Login
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {brandValues.map((value) => (
                  <div
                    key={value.title}
                    className="group rounded-[1.5rem] border border-black/10 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-5"
                  >
                    <p className="break-words text-sm font-semibold uppercase tracking-[0.16em] text-black/55 transition duration-300 group-hover:text-black sm:text-[0.95rem]">
                      {value.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-black/65 transition duration-300 group-hover:text-black/75 sm:text-[0.95rem] sm:leading-7">
                      {value.description}
                    </p>
                    <div className="mt-4 h-px w-0 bg-gradient-to-r from-[#d8b06a] to-transparent transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="grid gap-4">
                <div className="relative min-h-[410px] overflow-hidden rounded-[2rem] border border-black/10 bg-black/5">
                  <Image
                    src={heroTiles[0]?.image || "/images/tiles/34-TAPOLLO-18A-APOLLO-18-thumbnail-410x410-70.jpg"}
                    alt={heroTiles[0]?.title || "Featured tile"}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 backdrop-blur">
                    Featured collection
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 grid gap-3">
                    <div className="rounded-[1.35rem] border border-white/18 bg-black/40 p-4 text-white backdrop-blur">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
                        Surface of the moment
                      </p>
                      <p className="mt-2 text-xl font-semibold">
                        {heroTiles[0]?.title}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {heroTiles[0]?.styleDescription}
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-[1.1rem] border border-white/18 bg-white/15 p-3 text-white backdrop-blur">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                          Collection
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          {featuredTiles.length} Curated tiles
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] border border-white/18 bg-white/15 p-3 text-white backdrop-blur">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                          Finish
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Stone, marble, porcelain
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] border border-white/18 bg-white/15 p-3 text-white backdrop-blur">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                          Mood
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Warm, refined, tactile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
                  <div className="relative min-h-[178px] overflow-hidden rounded-[1.65rem] border border-black/10 bg-black/5">
                    <Image
                      src={heroTiles[1]?.image || heroTiles[0]?.image}
                      alt={heroTiles[1]?.title || heroTiles[0]?.title || "Tile preview"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
                        Preview
                      </p>
                      <p className="mt-1 text-base font-semibold">
                        {heroTiles[1]?.title || "Balanced surface"}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.65rem] border border-black/10 bg-white/80 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
                        Editorial note
                      </p>
                      <p className="mt-3 text-sm leading-6 text-black/70">
                        A quieter arrangement that lets the tile texture lead,
                        with supporting details kept compact and intentional.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-[1.65rem] border border-black/10 bg-white/75 p-4">
                      <Marquee items={marqueeItems} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="section-shell rounded-[2.25rem] p-5 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                Explore Tiles Collection by Category
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Collections by Category
              </h2>
            </div>
            <Link href="/all-tiles" className="text-sm font-medium tracking-[0.18em] uppercase text-black underline-offset-4 hover:underline">
              Discover all products
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {collectionCategories.map(({ category, preview }) => (
              <Link
                key={category}
                href={`/all-tiles?category=${encodeURIComponent(category)}`}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={preview.image}
                    alt={preview.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">
                      Category
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white">
                      {category}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">
                      {preview.title}
                    </p>
                    <span className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-shell rounded-[2.25rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-black/45">
              Why choose Tiles Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-black">
              Premium surfaces for refined spaces
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/68">
              The collection balances glossy, matte, geometric, and textured
              finishes to help you find the right surface for kitchens, living
              rooms, bathrooms, and feature walls.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Curated visual hierarchy inspired by high-end tile catalogs",
                "Mobile-friendly browsing with smooth route transitions",
                "Searchable gallery that keeps exploration fast and simple",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-black/10 bg-white/80 px-4 py-4 text-sm leading-6 text-black/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell rounded-[2.25rem] p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                  Featured Tiles
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-black">
                  Top picks from the gallery
                </h2>
              </div>
              <Link href="/all-tiles" className="text-sm font-medium tracking-[0.18em] uppercase text-black underline-offset-4 hover:underline">
                See all
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredTiles.map((tile) => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="section-shell rounded-[2.25rem] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                Popular
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-black">
                Design stories, care, and sustainable thinking
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/68">
                Like a premium manufacturer site, the gallery also highlights
                the thinking behind the products, from the visual language to
                the surfaces themselves.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Tiles Care", text: "Simple maintenance tips and surface-friendly cleaning guidance." },
                { title: "Projects", text: "Inspiration for homes, commercial spaces, and refined interiors." },
                { title: "Environment", text: "Thoughtful materials and processes that reduce waste." },
                { title: "Community", text: "A showcase that invites customers, students, and collaborators." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-black/10 bg-white/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-black transition duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/66 transition duration-300 group-hover:text-black/78">
                    {item.text}
                  </p>
                  <div className="mt-4 h-px w-0 bg-gradient-to-r from-[#d8b06a] to-transparent transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
