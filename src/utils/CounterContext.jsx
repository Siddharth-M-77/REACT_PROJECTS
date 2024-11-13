// CounterContext.js
import React, { createContext, useState } from "react";

// Create the context
export const CounterContext = createContext();

// Create the provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevVal) => prevVal + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevVal) => prevVal - 1);
    }
  };

  return (
    <CounterContext.Provider value={{ count, handleIncrement, handleDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};
