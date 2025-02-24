import React from "react";
import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import "../styles/pages/SchedulePage.scss";

const SchedulePage: React.FC = () => {
  return (
    <div className="schedule-page">
      <Header />
      <main>
        <Schedule />
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
