import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCartHandler }) {
  const getStockStatus = (stockCount) => {
    if (stockCount === 0) return "Sold Out";
    if (stockCount > 0 && stockCount < 5) return "Low Stock";
    return "In Stock";
  };

  const getStockClass = (stockCount) => {
    if (stockCount === 0) return "sold-out";
    if (stockCount > 0 && stockCount < 5) return "warning";
    return "available";
  };

  return (
    <div className="card">
      
      {/* Make image clickable */}
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="image-box">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
        </div>

        <h3 className="product-title">{product.title}</h3>
      </Link>

      <div className="card-content">
        <p className="brand-name">{product.brand}</p>

        <p className="price">${product.price}</p>

        <p className={`stock-status ${getStockClass(product.stock)}`}>
          {getStockStatus(product.stock)}
        </p>

        {/* Buttons */}
        <div className="button-group">
          <Link to={`/product/${product.id}`}>
            <button className="details-button">View Details</button>
          </Link>

          <button
            className="add-btn"
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;