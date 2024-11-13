import React, { useState, useEffect } from "react";

const DataFetchList = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Store fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-xl text-gray-500">Loading...</p>; // Show loading message
  if (error) return <p className="text-red-500">Error: {error}</p>; // Show error message

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          User List
        </h1>
        <ul className="space-y-4">
          {data.map((user) => (
            <li
              key={user.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 rounded-lg p-4 shadow-md hover:bg-blue-100 transition duration-200"
            >
              <span className="text-xl font-medium text-blue-900">
                {user.name}
              </span>
              <span className="text-gray-700">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetchList;
