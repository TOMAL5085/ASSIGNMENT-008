'use client';

import { useDeferredValue, useMemo, useState } from "react";

import TileCard from "@/components/tile-card";

export default function TilesBrowser({ tiles }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredTiles = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();
    if (!normalized) return tiles;
    return tiles.filter((tile) =>
      tile.title.toLowerCase().includes(normalized)
    );
  }, [deferredQuery, tiles]);

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-black/10 bg-black px-6 py-8 text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] sm:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-white/45">
          Search the collection
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Find a tile by title
        </h1>
        <div className="mt-6">
          <label className="input flex items-center gap-3 rounded-full border-0 bg-white px-5 py-3 text-black shadow-inner shadow-black/5">
            <span className="text-lg text-black/40">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tile titles..."
              className="w-full bg-transparent text-base outline-none placeholder:text-black/35"
            />
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-black/55">
          Showing {filteredTiles.length} of {tiles.length} tiles
        </p>
        {query ? (
          <button
            type="button"
            className="text-sm font-medium text-black underline-offset-4 hover:underline"
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        ) : null}
      </div>

      {filteredTiles.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} compact />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-black/15 bg-white/70 px-8 py-16 text-center">
          <p className="text-xl font-semibold text-black">No tiles matched your search.</p>
          <p className="mt-3 text-sm text-black/60">
            Try a different title or clear the search field.
          </p>
        </div>
      )}
    </section>
  );
}
