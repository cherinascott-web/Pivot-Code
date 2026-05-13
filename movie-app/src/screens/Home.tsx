import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";
import { getPopularMovies, searchMovies } from "../api/tmdb";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPopularMovies().then((results) => {
      setMovies(results);
    });
  }, []);

  function handleSearch() {
    if (search.trim() === "") {
      getPopularMovies().then((results) => {
        setMovies(results);
      });
    } else {
      searchMovies(search).then((results) => {
        setMovies(results);
      });
    }
  }

  return (
    <div>
      <h1>Popular Movies</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}