import React, { useEffect, useState } from "react";

const FetchDataAndDisplayListWithPagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  // Calculate items for the current page
  const LastIndexOfItem = currentPage * itemPerPage;
  const FirstIndexOfItem = LastIndexOfItem - itemPerPage;
  const currentItem = data.slice(FirstIndexOfItem, LastIndexOfItem);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p className="text-center text-9xl mt-72 font-bold">Loading data...</p>;
  if (errors) return <p>Error: {errors}</p>;

  return (
    <div className="w-full min-h-screen bg-gray-700 text-center items-center flex justify-center">
      <div className="p-10 w-full rounded-lg bg-white shadow-sm h-fit max-w-xl">
        <h1 className="text-4xl font-bold uppercase mb-6">User Data</h1>
        <ul className="space-y-6">
          {currentItem.map((item) => (
            <li key={item.id} className="bg-pink-300 p-2 flex justify-between gap-5">
              <span>{item.name}</span> - <span>{item.email}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchDataAndDisplayListWithPagination;
