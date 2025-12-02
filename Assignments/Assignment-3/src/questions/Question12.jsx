import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);   // track loading
  const [error, setError] = useState(false);      // track error

  useEffect(() => {
    // fetch("https://api.example.com/data") -error
    fetch("https://dummyjson.com/products") // loading ....
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading…</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;