import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../database/products.json";
import "../styles/pages/MenuPage.scss";

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <Header />
      <main>
        <h2>Nuestra Carta</h2>
        <div className="products-grid">
          {products
            .map((product, index) => ({
              id: index,
              name: product.nombre,
              description: product.descripcionCorta,
              price: product.precioActual,
              imageUrl: product.imagen,
            }))
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
