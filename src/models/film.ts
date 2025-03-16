export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  position: string;
  genere: number[];
  vote: string;
};

export const GenreMap: Record<number, string> = {
  1: "Fantascienza",
  2: "Horror",
  3: "Fantasy",
  4: "Azione",
  5: "Drama",
  6: "Thriller",
  7: "Crime",
  8: "Italiani",
  9: "Animazione",
  10: "Commedia",
  11: "War",
  12: "Western",
};
