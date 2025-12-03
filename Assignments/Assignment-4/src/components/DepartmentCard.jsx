// src/components/DepartmentCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./DepartmentCard.css";

function DepartmentCard({ id, name, description }) {
  return (
    <div className="dept-card">
      <h3 className="dept-title">{name}</h3>
      <p className="dept-desc">{description}</p>
      <Link to={`/departments/${id}`} className="btn">
        View More
      </Link>
    </div>
  );
}

export default DepartmentCard;