export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  position: string;
  genere: number[];
  release_date: string;
};

export const GenreMap: Record<number, string> = {
  1: "Action",
  2: "Adventure",
  3: "Animation",
  4: "Comedy",
  5: "Crime & Noir",
  6: "Drama & Romance",
  7: "Fantasy",
  8: "Horror",
  9: "Italiani",
  10: "Sci-Fi",
  11: "Thriller",
  12: "War",
  13: "Western",
};
