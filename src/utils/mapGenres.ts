import { GenreMap } from "@/models/film";

export function mapGenres(ids: number[]): string[] {
  return ids.map((id) => GenreMap[id] || "Sconosciuto");
}
