import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // page index (0-based)
  const usersPerPage = 5;

  // Fetch 20 users on mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Calculate slice of users for current page
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const visibleUsers = users.slice(startIndex, endIndex);

  // Handlers for navigation
  const handleNext = () => {
    if (endIndex < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {visibleUsers.length > 0 ? (
        <ul>
          {visibleUsers.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}

      <div>
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={endIndex >= users.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;