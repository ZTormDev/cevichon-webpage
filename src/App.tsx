import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import MenuPage from "./pages/MenuPage";
import SchedulePage from "./pages/SchedulePage";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/horario" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
