import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function Home({ addToCartHandler }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  return (
    <div className="app-container">
      <h1>Product Store</h1>

      <div className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;