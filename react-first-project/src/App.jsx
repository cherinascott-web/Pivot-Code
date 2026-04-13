// 1. Imports
import { recipes } from './data/recipe.js';
import './App.css';

// 2. RecipeCard Component (The Blueprint)
const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" style={{ border: '1px solid #ddd', margin: '10px', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
      <h2>{recipe.name}</h2>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// 3. Main App Function
function App() {
  return (
    <div className="App">
      <h1>My Wellness Portfolio</h1>

      {/* Your Recipe Section */}
      <section className="recipe-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}

export default App;