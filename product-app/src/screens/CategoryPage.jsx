import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function CategoryPage({ addToCartHandler }) {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error:", err));
  }, [name]);

  function formatCategory(name) {
    if (!name) return "";
    return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page-wrapper">
      <div className="category-header">
        <h1 className="custom-header">Category: {formatCategory(name)}</h1>

        <input
          type="text"
          placeholder="Search items..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;