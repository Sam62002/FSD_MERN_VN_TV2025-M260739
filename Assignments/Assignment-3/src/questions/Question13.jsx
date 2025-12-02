import React, { useState } from "react";

function FruitList() {
  // Initial state with some fruits
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFruit.trim() === "") return; // avoid empty entries
    setFruits([...fruits, newFruit]);   // add new fruit to list
    setNewFruit("");                    // clear input
  };

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter a fruit"
        />
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  );
}

export default FruitList;