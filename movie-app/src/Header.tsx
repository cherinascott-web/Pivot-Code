import { useState } from "react";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export default function Header({
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const [input, setInput] = useState(searchQuery);

  function handleSearch() {
    setSearchQuery(input);
  }

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">
        <NavLink to="/">🎬 Movie App</NavLink>
      </div>

      {/* Middle: Navigation */}
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/now-playing">
          Now Playing
        </NavLink>

        <NavLink to="/upcoming">
          Upcoming
        </NavLink>

        <NavLink to="/favorites">
          Favorites
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>

      {/* Right: Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </header>
  );
}