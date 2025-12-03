// src/pages/Departments.jsx
import React, { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard.jsx";
import departmentsData from "../data/departments.json";

function Departments() {
  const [departments, setDepartments] = useState([]);

  // Load data from local JSON on mount
  useEffect(() => {
    // Simulate async load to meet the requirement
    setTimeout(() => {
      setDepartments(departmentsData);
    }, 0);
  }, []);

  return (
    <section className="departments">
      <h1>Departments</h1>
      <div className="grid">
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            name={dept.name}
            description={dept.short}
          />
        ))}
      </div>
    </section>
  );
}

export default Departments;