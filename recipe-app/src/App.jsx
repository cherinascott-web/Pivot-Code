import React, { useState } from "react";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    if (favorites.find((fav) => fav.id === recipe.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>

      <div className="favorites-container">
        <h2>My Favorites ❤️</h2>
        {favorites.length === 0 ? (
          <div className="empty-state">
            <p>Your favorites list is empty!</p>
          </div>
        ) : (
          <div className="recipe-grid">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                isFavorite={true}
                onFavoriteClick={() => toggleFavorite(recipe)}
              />
            ))}
          </div>
        )}
      </div>

      <hr />

      <h2>All Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            isFavorite={favorites.some((fav) => fav.id === recipe.id)}
            onFavoriteClick={() => toggleFavorite(recipe)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;