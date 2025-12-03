// src/pages/Contact.jsx
import React, { useState } from "react";
import departmentsData from "../data/departments.json";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", department: "", message: "" });
  };

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Department</span>
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            {departmentsData.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>

        <button className="btn" type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted">
          <h2>Submitted Details</h2>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Department:</strong> {submitted.department}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;