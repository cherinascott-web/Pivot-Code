import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

        <img
          src={`${IMAGE_URL}/w200${movie.poster_path}`}
          alt={movie.title}
        />

        <p>Release Date: {movie.release_date}</p>

        <p>Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
}