import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">🎬 Movie App</Link>
      </div>

      {/* Middle: Navigation */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/now-showing">Now Showing</Link>
        <Link to="/upcoming">Upcoming</Link>
        <Link to="/about">About</Link>
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