import TilesBrowser from "@/components/tiles-browser";
import { getTiles, getTileCategories } from "@/lib/tiles";

export const metadata = {
  title: "All Tiles | Tiles Gallery",
  description: "Browse the full tile gallery and search by title.",
};

export default async function AllTilesPage({ searchParams }) {
  const params = await searchParams;
  const [tiles, categories] = await Promise.all([
    getTiles(),
    getTileCategories(),
  ]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">
            Gallery
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-black sm:text-6xl">
            All Tiles
          </h1>
          <p className="max-w-2xl text-base leading-8 text-black/65">
            Search the collection by title, narrow by category, and open any
            tile to view its full-size details page.
          </p>
        </div>
        <TilesBrowser
          tiles={tiles}
          categories={categories}
          initialCategory={params?.category || ""}
        />
      </div>
    </div>
  );
}
