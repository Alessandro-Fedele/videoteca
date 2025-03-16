"use client";
import { Movie } from "@/models/film";
import "./MovieDetails.css";
import { useState } from "react";
import FilmPosition from "./FilmPosition";

type MovieDetailsProps = {
  movie: Movie;
  onBack: () => void;
};

const MovieDetails = ({ movie, onBack }: MovieDetailsProps) => {
  const [tabPosition, setTabPosition] = useState<boolean>(false);

  return (
    <div className="movie-details">
      <div className="top-bar">
        <button className="back-button" onClick={onBack}>
          ←
        </button>
        <button
          className="tab-button"
          onClick={() => setTabPosition(!tabPosition)}
        >
          Mostra posizione
        </button>
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="sub-title">Titolo originale: {movie.original_title}</div>
      <div className="movie-info">
        {movie.regista} - {movie.release_date.split("-")[0]}
      </div>
      <p className="movie-description">{movie.overview}</p>
      <img
        className="details-movie-poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      {tabPosition && (
        <FilmPosition
          position={movie.position}
          onClose={() => setTabPosition(!tabPosition)}
        />
      )}
    </div>
  );
};

export default MovieDetails;
