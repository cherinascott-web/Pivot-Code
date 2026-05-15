import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";
import NowPlaying from "./screens/NowPlaying";
import Favorites from "./screens/Favorites";
import Header from "./Header";
import type { Movie } from "./types/movie";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(movie: Movie) {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchQuery={searchQuery}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route
          path="/now-playing"
          element={
            <NowPlaying
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;