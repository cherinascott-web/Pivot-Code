import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/tmdb";
import type { Movie } from "../types/movie";

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then((data) => {
        setMovie(data);
      });
    }
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>

      <img
        src={`${IMAGE_URL}w300${movie.poster_path}`}
        alt={movie.title}
      />

      <p>{movie.overview}</p>

      <p>Release Date: {movie.release_date}</p>

      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}