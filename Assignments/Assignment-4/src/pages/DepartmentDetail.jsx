// src/pages/DepartmentDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import departmentsData from "../data/departments.json";

function DepartmentDetail() {
  const { deptId } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    // Load and find the department by id
    const found = departmentsData.find((d) => d.id === deptId);
    setDepartment(found || null);
  }, [deptId]);

  if (!department) {
    return (
      <section className="dept-detail">
        <h1>Department Not Found</h1>
        <Link to="/departments" className="btn">Back to Departments</Link>
      </section>
    );
  }

  return (
    <section className="dept-detail">
      <h1>{department.name}</h1>
      <p className="lead">{department.description}</p>

      <div className="detail-grid">
        <div>
          <h2>Courses Offered</h2>
          <ul>
            {department.courses.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <div>
          <h2>Faculty</h2>
          <ul>
            {department.faculty.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        <div>
          <h2>Labs & Facilities</h2>
          <ul>
            {department.labs.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </div>
      </div>

      <Link to="/departments" className="btn btn-outline">Back to Departments</Link>
    </section>
  );
}

export default DepartmentDetail;