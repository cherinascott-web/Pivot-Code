import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";

type FavoritesProps = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
};

export default function Favorites({
  favorites,
  toggleFavorite,
}: FavoritesProps) {
  return (
    <div className="favorites-page">
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}