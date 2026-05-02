'use client';

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function FeaturedTilesCarousel({ tiles }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3200, disableOnInteraction: false }}
      loop
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1.08 },
        640: { slidesPerView: 1.25 },
        1024: { slidesPerView: 2.15 },
      }}
      className="pb-8"
    >
      {tiles.map((tile) => (
        <SwiperSlide key={tile.id}>
          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.1)]">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[320px] bg-black/5">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                    Featured Tile
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-black">
                    {tile.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/65">
                    {tile.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tile.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex min-h-9 items-center justify-center rounded-full bg-black/5 px-3 py-1.5 text-xs font-medium leading-none text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href={`/tile/${tile.id}`} className="btn btn-neutral rounded-full">
                    View Details
                  </Link>
                  <span className="text-sm font-medium text-black/55">
                    {tile.material} · {tile.dimensions}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
