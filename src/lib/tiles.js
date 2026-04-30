import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

const tilesDataPath = path.join(process.cwd(), "db.json");

async function readTilesData() {
  const raw = await fs.readFile(tilesDataPath, "utf8");
  const data = JSON.parse(raw);
  return Array.isArray(data?.tiles) ? data.tiles : [];
}

export async function getTiles() {
  return readTilesData();
}

export async function getTileById(id) {
  const tiles = await getTiles();
  return tiles.find((tile) => tile.id === id) ?? null;
}

export async function getFeaturedTiles(limit = 4) {
  const tiles = await getTiles();
  return tiles.slice(0, limit);
}
