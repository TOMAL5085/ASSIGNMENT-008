import TilesBrowser from "@/components/tiles-browser";
import { getTiles } from "@/lib/tiles";

export default async function AllTilesPage() {
  const tiles = await getTiles();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-8 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-black/45">
            Gallery
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            All Tiles
          </h1>
          <p className="max-w-2xl text-base leading-8 text-black/65">
            Search the collection by title and open any tile to view its
            full-size details page.
          </p>
        </div>
        <TilesBrowser tiles={tiles} />
      </div>
    </div>
  );
}
