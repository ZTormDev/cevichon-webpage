// filepath: /cevichon-webpage/src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types/Product";
import "../styles/components/ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <span className="product-price">${product.price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProductCard;
