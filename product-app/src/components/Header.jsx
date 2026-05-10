import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ cart }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.slice(0, 8));
      });
  }, []);

  return (
    <header className="header-container">
      {/* FLOWER BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1600&auto=format&fit=crop"
        alt="Purple flowers"
        className="header-flowers"
      />

      {/* HEADER CONTENT */}
      <div className="header-content">
        <h2 className="header-title">
          Cherina's Shop
        </h2>

        <p className="header-subtitle">
          Soft beauty, curated with care
        </p>

        <nav className="header-nav">
          {/* Categories */}
          <div className="categories">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="category-item"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Main navigation */}
          <div className="nav-links">
            <Link to="/" className="header-link">
              Home
            </Link>

            <Link to="/cart" className="header-link">
              Cart ({cart.length})
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;