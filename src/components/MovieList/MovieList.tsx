"use client";
import { Movie } from "@/models/film";
import { mapGenres } from "@/utils/mapGenres";
import { useEffect, useMemo, useState } from "react";
import "./MovieList.css";
import Loader from "../Loader/Loader";
import SearchInput from "../SearchInput/SearchInput";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/movies.json");

        if (!res.ok) {
          throw new Error("Errore nel caricamento dei film");
        }

        const data: Movie[] = await res.json();
        setMovies(data);
      } catch (err: any) {
        setError(err.message || "Errore sconosciuto");
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchMovies();
  }, []);

  // 🔍 Filtro per ricerca
  const filteredMovies = useMemo(() => {
    const query = search.toLowerCase().trim();
    return movies.filter(
      (movie) =>
        movie.title?.toLowerCase().includes(query) ||
        movie.original_title?.toLowerCase().includes(query)
    );
  }, [search, movies]);

  // 📌 Raggruppiamo i film per categoria
  const moviesByGenre = useMemo(() => {
    const groupedMovies: Record<string, Movie[]> = {};

    filteredMovies.forEach((movie) => {
      movie.genere.forEach((genreId) => {
        const genreName = mapGenres([genreId])[0]; // Mappiamo l'ID in nome
        if (!groupedMovies[genreName]) groupedMovies[genreName] = [];
        groupedMovies[genreName].push(movie);
      });
    });

    return groupedMovies;
  }, [filteredMovies]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>{movies?.length} titoli</h3>
      {/* 🔍 Campo di ricerca */}
      <div className="search-bar">
        <SearchInput value={search} onChange={setSearch} />
      </div>

      {/* 🎥 Mostra film */}
      {Object.keys(moviesByGenre).length > 0 ? (
        Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="category">
            <h2>{genre}</h2>
            <div className="movie-list">
              {moviesByGenre[genre].map((movie) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no-results">Mi dispiace, non ho questo film!</p>
      )}
    </div>
  );
}
