import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

const FrontPage: React.FC = () => {
  return (
    <div className="front-page">
      <Header />
      <main>
        <Contact />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
};

export default FrontPage;
