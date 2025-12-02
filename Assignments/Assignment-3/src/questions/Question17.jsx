import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  // Fetch user on mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/1")
      .then((response) => {
        setUser({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error fetching user");
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle update (PUT request)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("https://dummyjson.com/users/1", user);
      console.log(response.data); // optional: inspect response
      setMessage("User Updated Successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Error updating user");
    }
  };

  return (
    <div>
      <h2>Edit User Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update User</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UserProfile;