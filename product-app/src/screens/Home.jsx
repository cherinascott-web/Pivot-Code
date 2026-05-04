import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import ProductDetails from "../screens/Details.jsx"; // Import your new details component

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the clicked product

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // If a product is selected, show the details page instead of the grid
  if (selectedProduct) {
    return (
      <div>
        <button onClick={() => setSelectedProduct(null)}>← Back to Store</button>
        <ProductDetails product={selectedProduct} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Product Store</h1>
      <div className="products">
        {products.map((item) => (
          <ProductCard 
            key={item.id} 
            product={item} 
            onViewDetails={() => setSelectedProduct(item)} // Pass the click function
          />
        ))}
      </div>
    </div>
  );
}

export default Home;