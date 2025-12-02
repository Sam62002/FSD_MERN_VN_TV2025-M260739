// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Page Component
function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Sam — a fresher software developer passionate about building
        efficient, user-friendly applications. This is my portfolio where I
        showcase my journey, projects, and skills.
      </p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Explore Projects
      </button>
    </div>
  );
}

// About Page Component
function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>About Page</h2>
      <p>
        Hi, I'm Sam — a fresher software developer passionate about building
        efficient, user-friendly applications. I enjoy working with modern
        technologies like React, MongoDB, and Docker to create full‑stack
        solutions.
      </p>
      <p>
        This portfolio showcases my journey, projects, and skills as I continue
        to grow in the field of software development. My goal is to deliver
        high‑quality solutions that make technology accessible and enjoyable.
      </p>

      <h3>Contact Me</h3>
      {submitted && (
        <p style={{ color: "green" }}>Thank you! Your message has been sent.</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// Products Page Component
function Products() {
  const productList = [
    { id: 1, name: "Laptop", price: "$1000" },
    { id: 2, name: "Smartphone", price: "$600" },
    { id: 3, name: "Headphones", price: "$150" },
    { id: 4, name: "Smartwatch", price: "$200" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>
      <p>Here are some of our featured products:</p>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> — {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App Component
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
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;