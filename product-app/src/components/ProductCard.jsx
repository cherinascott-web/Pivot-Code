import React from "react";

function ProductCard({ product, onViewDetails }) {
  // Logic for Task 1: Determining the stock status text
  const getStockStatus = (stockCount) => {
    if (stockCount === 0) {
      return "Sold Out";
    } else if (stockCount > 0 && stockCount < 5) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  };

  return (
    <div className="card">
      {/* Product Image */}
      <img src={product.thumbnail} alt={product.title} className="card-image" />
      
      <div className="card-content">
        {/* Requirement: Title and Brand */}
        <h3 className="product-title">{product.title}</h3>
        <p className="brand-name">{product.brand}</p>
        
        {/* Price Display */}
        <p className="price">${product.price}</p>

        {/* 
            Task 1: Dynamic Stock Status. 
            Uses 'warning' class (Red) if stock is low (< 5).
            Uses 'available' class (Green) otherwise.
        */}
        <p className={`stock-status ${product.stock < 5 ? 'warning' : 'available'}`}>
          {getStockStatus(product.stock)}
        </p>

        {/* 
            View Details Button:
            The onClick={onViewDetails} is what makes the page "clickable"
            so you can navigate to the full details screen.
        */}
        <button className="details-button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;