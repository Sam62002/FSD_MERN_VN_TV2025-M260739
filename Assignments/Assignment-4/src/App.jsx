// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Departments from "./pages/Departments.jsx";
import DepartmentDetail from "./pages/DepartmentDetail.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:deptId" element={<DepartmentDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;