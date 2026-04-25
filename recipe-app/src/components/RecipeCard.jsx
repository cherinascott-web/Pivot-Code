import React, { useState } from "react"; // 1. Added useState here

function RecipeCard({ name, cookTime, ingredients, image, rating, difficulty, isFavorite, onFavoriteClick }) {
  // 2. This state controls if the list is visible or not
  const [show, setShow] = useState(false);
  
  const stars = "⭐".repeat(rating);

  return (
    <div className="card">
      <div className="card-header">
        <div className="header-top">
          <h2>{name}</h2>
          <button className="fav-button" onClick={onFavoriteClick}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="rating">{stars}</div>
      </div>

      <img src={image} alt={name} className="recipe-img" />

      <div className="card-content">
        <div className="info">
          <span>⏱️ {cookTime} mins</span>
          <span className="difficulty-tag"> | {difficulty}</span>
        </div>

        {/* 3. THE SHOW/HIDE BUTTON */}
        <button className="toggle-btn" onClick={() => setShow(!show)}>
          {show ? "Hide Ingredients" : "Show Ingredients"}
        </button>

        {/* 4. THE INGREDIENT LIST (Only shows when 'show' is true) */}
        {show && (
          <ul className="ingredient-list">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;