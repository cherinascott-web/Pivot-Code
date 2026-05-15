import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";
import { getNowPlaying } from "../api/tmdb";

type NowPlayingProps = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
};

export default function NowPlaying({
  favorites,
  toggleFavorite,
}: NowPlayingProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getNowPlaying().then((results) => {
      setMovies(results);
    });
  }, []);

  return (
    <div>
      <h1>Now Playing</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}