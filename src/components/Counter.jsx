// ExampleComponent.jsx
import React, { useContext } from "react";
import { CounterContext } from "../utils/CounterContext";

const ExampleComponent = () => {
  const { count, handleIncrement, handleDecrement } =
    useContext(CounterContext);

  return (
    <div className="p-6 rounded-lg shadow-md max-w-md mx-auto mt-10 text-center transition duration-500 ">
      <h1 className="text-2xl font-semibold mb-4">Count: {count}</h1>
      <div className="space-x-4 mb-6">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
