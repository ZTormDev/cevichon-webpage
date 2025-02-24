import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import "../styles/pages/FrontPage.scss";

const FrontPage: React.FC = () => {
  return (
    <div className="front-page">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default FrontPage;
