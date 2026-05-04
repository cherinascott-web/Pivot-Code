import React from "react";

function ProductDetails({ product }) {
  // If the product data hasn't arrived yet, show a loading state
  if (!product) return <div className="loading">Loading your selection...</div>;

  return (
    <div className="details-container">
      <div className="details-card">
        
        {/* Requirement: Thumbnail as main image */}
        <div className="product-images">
          <img 
            className="detail-main-img" 
            src={product.thumbnail} 
            alt={product.title} 
          />
          
          {/* Requirement: Show smaller “images” */}
          <div className="image-thumbs">
            {product.images?.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="Product view" 
                className="thumb-item" 
              />
            ))}
          </div>
        </div>

        {/* Requirement: Brand, Title, Rating, Category, Description, Tags */}
        <div className="product-info">
          <p className="brand-header">{product.brand}</p>
          <h1 className="title-header">{product.title}</h1>
          
          <div className="meta-row">
            <span className="rating">Rating: {product.rating} ⭐</span>
            <span className="category">Category: {product.category}</span>
          </div>

          <div className="desc-section">
            <p>{product.description}</p>
          </div>

          {/* Requirement: Display Tags */}
          <div className="tags-row">
            {product.tags?.map((tag, index) => (
              <span key={index} className="tag-chip">#{tag}</span>
            ))}
          </div>

          <h2 className="price-tag">${product.price}</h2>
          <button className="add-btn">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;