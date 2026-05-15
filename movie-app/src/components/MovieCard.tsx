import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

type Props = {
  movie: Movie;
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
};

export default function MovieCard({
  movie,
  favorites,
  toggleFavorite,
}: Props) {
  const isFavorite = favorites.some(
    (fav) => fav.id === movie.id
  );

  return (
    <div className="movie-card">
      {/* Heart Button */}
      <button
        className="heart-btn"
        onClick={() => toggleFavorite(movie)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Movie Details */}
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

        <img
          src={`${IMAGE_URL}w200${movie.poster_path}`}
          alt={movie.title}
        />

        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </Link>
    </div>
  );
}