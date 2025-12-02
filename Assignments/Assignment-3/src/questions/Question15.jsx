import React, { useState } from "react";

function ProfileForm() {
  // Profile object in state
  const [profile, setProfile] = useState({
    name: "Sam",
    email: "sam@example.com",
    phone: "1234567890",
  });

  // Generic handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value, // update the specific field
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
      </form>

      <h3>Current Profile Data:</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
}

export default ProfileForm;