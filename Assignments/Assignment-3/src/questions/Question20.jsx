// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home Page</h2>
      <p>Welcome to our website! Explore our products and learn more about us.</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>About Page</h2>
      <p>
        We are passionate developers dedicated to building efficient, user-friendly
        applications. Our mission is to deliver high-quality solutions that make
        technology accessible and enjoyable.
      </p>
    </div>
  );
}

// Electronics Subpage
function Electronics() {
  return (
    <div>
      <h3>Electronics</h3>
      <p>Browse our latest laptops, smartphones, and smart devices.</p>
    </div>
  );
}

// Fashion Subpage
function Fashion() {
  return (
    <div>
      <h3>Fashion</h3>
      <p>Discover trendy clothing, accessories, and footwear collections.</p>
    </div>
  );
}

// Products Page with Nested Links
function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>
      <p>Select a category:</p>
      <nav>
        <Link to="electronics" style={{ marginRight: "10px" }}>Electronics</Link>
        <Link to="fashion">Fashion</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="electronics" element={<Electronics />} />
        <Route path="fashion" element={<Fashion />} />
      </Routes>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;