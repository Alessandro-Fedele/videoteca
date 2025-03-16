export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  position: MoviePosition;
  genere: number[];
  vote: string;
  regista: string;
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

export type MoviePosition =
  | "F1S1"
  | "F1S2"
  | "F1S3"
  | "F1S4"
  | "F2S1"
  | "F2S2"
  | "F2S3"
  | "F2S4"
  | "F3S1"
  | "F3S2"
  | "F3S3"
  | "F3S4"
  | "F4S1"
  | "F4S2"
  | "F4S3"
  | "F4S4";
