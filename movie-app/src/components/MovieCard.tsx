import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import "./MovieCard.css";

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
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-card-container">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${IMAGE_URL}w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>

      <button
        className="heart-btn"
        onClick={() => toggleFavorite(movie)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}