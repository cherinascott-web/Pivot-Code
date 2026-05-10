import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details({ addToCartHandler }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading your selection...</div>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="product-images">
          <img
            className="detail-main-img"
            src={product.thumbnail}
            alt={product.title}
          />

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

        <div className="product-info">
          <p className="brand-header">{product.brand}</p>

          <h1 className="title-header">{product.title}</h1>

          <p>{product.description}</p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <div className="tags-row">
            {product.tags?.map((tag, index) => (
              <span key={index} className="tag-chip">
                #{tag}
              </span>
            ))}
          </div>

          <h2 className="price-tag">${product.price}</h2>

          {/* ADD TO CART BUTTON */}
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

export default Details;